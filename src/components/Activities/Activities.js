import { useContext, useEffect ,useState , useMemo} from "react";
import styles from "./activities.module.css";

import {AuthContext} from "../../contexts/authContext"

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';
import { ActivityCard } from '../ActivityCard/ActyvityCard';
import { getAllActivities } from "../../services/activityService";



export function Activities() {
    const [activities , setActivities] = useState([]);
    const{ user ,isAuthenticated }  = useContext(AuthContext); 
    const userActivites = useMemo(() =>  user?.activities || [] , [user])  ; 

    useEffect(()=>{
         getAllActivities(user._id).then((value) =>{
            setActivities((activity) => ([...value , ...userActivites]))
         }).catch((err) => console.log(err))

    },[user._id ,userActivites])

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
            name = {act.actId}
            key={act.actId} 
            title={act["activity title"]} 
            date={act.date} 
            type={act.type} 
            location={act.location}
            />) )}
            </div>
        </div>
    )
}