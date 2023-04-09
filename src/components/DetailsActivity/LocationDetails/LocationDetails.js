import { useContext } from "react";
import { Navigate } from "react-router-dom";
import styles from "./locationDetails.module.css";

import { replaceLocations } from "../../../services/activityService";

import { AddNewLocation } from "./AddNewLocation/AddNewLocation";
import { AprovedLocationCard } from "./AprovedLocationCard/AprovedLocationCard";
import { UnaprovedLocationCard } from "./UnaprovedLocationCard/UnaprovedLocationCard";
import { AuthContext } from "../../../contexts/authContext";



export function LocationDetails({ locations, isMember, numOfMembers, activityId, updateLocations, isOwner }) {
    const { isAuthenticated, userId } = useContext(AuthContext);

    async function aproveLocation(locationId, data) {
        let currLocation = [...locations];
        currLocation.splice(locationId, 1, data);
        try {
            await replaceLocations(currLocation, activityId);
        } catch (err) {
            console.log(err);
            return <Navigate to={"/error"} />;
        }
        updateLocations(currLocation)
    }
    async function removeLocation(locationId) {
        let currLocation = [...locations];
        currLocation.splice(locationId, 1);
        try {
            await replaceLocations(currLocation, activityId);
        } catch (err) {
            console.log(err);
            return <Navigate to={"/error"} />;
        }
        updateLocations(currLocation)
    }
    async function incrementVotes(locationId) {
        let newLocations = locations.map((l, i) => {
            if (Number(locationId) === i) {
                return { ...l, votes: { positive: (Number(l.votes.positive) + 1), negative: l.votes.negative }, voted: [...l.voted, userId] }
            } else {
                return l
            }
        });
        try {
            await replaceLocations(newLocations, activityId);
        } catch (err) {
            console.log(err);
            return <Navigate to={"/error"} />
        }
        updateLocations(newLocations);
    }
    async function decrementVotes(locationId) {
        let newLocations = locations.map((l, i) => {
            if (Number(locationId) === i) {
                return { ...l, votes: { negative: Number(l.votes.negative) + 1, positive: l.votes.positive }, voted: [...l.voted, userId] }
            } else {
                return l
            }
        });
        try {
            await replaceLocations(newLocations, activityId);
        } catch (err) {
            console.log(err);
            return <Navigate to={"/error"} />
        }
        updateLocations(newLocations);
    }

    async function addLocation(index, data) {
        let newLoc = { ...data, aproved: false, votes: { positive: 1, negative: 0 }, voted: [userId] }
        let currLocation = [...locations];
        currLocation.splice(index + 1, 0, newLoc);
        try {
            await replaceLocations(currLocation, activityId);
        } catch (err) {
            console.log(err);
            return <Navigate to={"/error"} />
        }
        updateLocations(currLocation)
    };


    return (
        <div className={styles["locations-div"]}>
            <h3>Locations :</h3>

            {locations.map((l, i) => {
                if (l.aproved) {
                    return (<>
                        <AprovedLocationCard key={`l_location${i}`} data={{ location: l.location, country: l.country }} />
                        {(isAuthenticated && (isMember || isOwner)) && <AddNewLocation key={i} addLocation={addLocation} index={i} />}
                    </>
                    )
                } else {
                    return ((isAuthenticated && (isMember || isOwner)) && <>
                        <UnaprovedLocationCard
                            key={`l_${i}`}
                            index={i}
                            data={l}
                            userId={userId}
                            numOfMembers={numOfMembers}
                            aproveLocation={aproveLocation}
                            removeLocation={removeLocation}
                            incrementVotes={incrementVotes}
                            decrementVotes={decrementVotes} />
                        <AddNewLocation key={i} addLocation={addLocation} index={i} />
                    </>)
                }
            })}

        </div>

    )
}
