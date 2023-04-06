import { useContext, useEffect ,useState } from "react";
import styles from "./activities.module.css";

import {AuthContext} from "../../contexts/authContext"

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';
import { ActivityCard } from '../ActivityCard/ActyvityCard';
import { getAllActivities } from "../../services/activityService";



export function Activities() {
    const{ user ,isAuthenticated }  = useContext(AuthContext); 
    const userActivites = user?.activities || []  ; 
    const [activities , setActivities] = useState(userActivites);

    useEffect(()=>{
         getAllActivities().then((value) =>{
            setActivities((activity) => ([...activity , ...value])); 
         }).catch((err) => console.log(err)); 
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