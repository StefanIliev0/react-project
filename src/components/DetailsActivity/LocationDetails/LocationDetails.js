import { useContext } from "react";
import styles from "./locationDetails.module.css";

import { replaceLocations } from "../../../services/activityService"; 

import { AddNewLocation } from "./AddNewLocation/AddNewLocation";
import { AprovedLocationCard } from "./AprovedLocationCard/AprovedLocationCard";
import { UnaprovedLocationCard } from "./UnaprovedLocationCard/UnaprovedLocationCard";
import { AuthContext } from "../../../contexts/authContext";



export function LocationDetails({ locations , isMember , numOfMembers , activityId , updateLocations , isOwner }) {
    const {isAuthenticated , userId} = useContext(AuthContext); 

    async function aproveLocation (locationId , data ) {
        const currLocation = [...locations] ; 
        currLocation.splice(locationId , 1  , data) ;
        await replaceLocations(currLocation , activityId) ;
        updateLocations(currLocation)
    }
    async function removeLocation (locationId) {
        const currLocation = [...locations] ;
        currLocation.splice(locationId , 1) ;
        await replaceLocations(currLocation , activityId) ;
        updateLocations(currLocation)
    }
    async function incrementVotes (locationId) {
        const newLocations = locations.map((l, i) => {
            if(Number(locationId) === i ){
        return {...l , votes : {positive :(Number(l.votes.positive) + 1 ), negative :l.votes.negative} , voted :[...l.voted , userId]}
            }else{
                return l
            }
        }) ;
        await replaceLocations(newLocations , activityId) ;
        updateLocations(newLocations); 
    }
    async function decrementVotes (locationId) {
        const newLocations = locations.map((l, i) => {
            if(Number(locationId) === i ){
        return {...l , votes : {negative :Number(l.votes.negative) + 1 , positive :l.votes.positive} , voted :[...l.voted , userId]}
            }else{
                return l
            }
        }) ;
        await replaceLocations(newLocations , activityId) ;
        updateLocations(newLocations); 
    }

    async function addLocation (index ,data ) {
        const newLoc = {...data , aproved : false , votes :{positive : 1 , negative : 0} , voted :[userId]}
        const currLocation = [...locations] ; 
        currLocation.splice(index + 1 , 0  , newLoc) ;
        await replaceLocations(currLocation , activityId) ;
        updateLocations(currLocation)
    }

    return (
        <div className={styles["locations-div"]}>

            {locations.map((l , i) => {
                if (l.aproved) {
                    return (<>
                        <AprovedLocationCard key={`l_location${i}`} data={{ location: l.location, country: l.country }} />
                     {(isAuthenticated && (isMember || isOwner) ) &&   <AddNewLocation key={i}  addLocation ={addLocation} index ={i} /> }
                    </>
                    )
                }else{
                    return ( (isAuthenticated && (isMember || isOwner)) && <>
                    <UnaprovedLocationCard 
                    key={`l_${i}`} 
                    index ={i} 
                    data={l} 
                    userId={userId}
                     numOfMembers={numOfMembers} 
                     aproveLocation={aproveLocation} 
                     removeLocation={removeLocation}
                     incrementVotes = {incrementVotes}
                     decrementVotes = {decrementVotes}/>
                    <AddNewLocation key={i}  addLocation ={addLocation} index ={i} />
                </>)
            }})}

        </div>

    )
}
