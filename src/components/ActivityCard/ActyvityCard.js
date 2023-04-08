import React from 'react' ;
import styles from "./activityCard.module.css";
import { GiPartyFlags, GiRun} from "react-icons/gi";
import {GrMicrophone , GrMandriva} from "react-icons/gr"; 
import {MdExplore , MdRoute} from "react-icons/md"; 
import {FaEllipsisH} from "react-icons/fa"

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';


export function ActivityCard({ name , title , date ,type, location}) {
const titleIcon = {
    party : <GiPartyFlags className={styles["icon"]}/> ,
    sport : <GiRun className={styles["icon"]}/> , 
    relax : <GrMandriva className={styles["icon"]}/> , 
    holiday : <MdExplore className={styles["icon"]}/> , 
    meeting : <GrMicrophone className={styles["icon"]}/> , 
    trip : <MdRoute className={styles["icon"]}/> , 
    other : <FaEllipsisH className={styles["icon"]}/> , 
}; 

    return (
<article className={styles["article"]}>
    <div className={styles["icon-div"]}>
    {titleIcon[type]}
    </div>
    <div>
    <h4>{title}</h4>
    <h5>Planing Date : {date.from}</h5>
    <p>Type of Activity : {type}</p>
    <p>location : {`${location[0]?.location}, ${location[0]?.country}` }</p>
    </div>
    <div>
    <CustomLink to={`/activities/${name}`} text = "Details"/>
    </div>
</article>
    )
}