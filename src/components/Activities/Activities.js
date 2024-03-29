import { useContext, useEffect ,useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./activities.module.css";

import {AuthContext} from "../../contexts/authContext"

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';
import { ActivityCard } from '../ActivityCard/ActyvityCard';
import { getAllActivities } from "../../services/activityService";



export function Activities() {
    const{ isAuthenticated }  = useContext(AuthContext); 
    const [activities , setActivities] = useState([]);

    useEffect(()=>{
         getAllActivities().then((value) =>{
            setActivities(value); 
         }).catch((err) =>{
            console.log(err);
         return <Navigate to={"/error"}/>
        }); 
    },[])

    return (
        <div >
            <div className={styles["sub-navigate-div"]} >
                <h3 className={styles.h3}>Find next your activity!</h3>
                <div className={styles["create-activity-div"]}>
                 {isAuthenticated && <CustomLink text={"Create new activity"} to={"/activities/create"} />}   
                </div>
            </div>
            <div className={styles["activity-div"]}>
            {activities !== [] && activities.map((act) =>  (
            <ActivityCard  
            name = {act?.id}
            key={act?.id} 
            title={act.activityTitle} 
            date={act?.date} 
            type={act?.type} 
            location={act?.location}
            />) )}
            </div>
        </div>
    )
}