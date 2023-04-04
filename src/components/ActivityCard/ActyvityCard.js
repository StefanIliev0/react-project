import React from 'react' ;
import styles from "./activityCard.module.css";
import {BiRun} from "react-icons/bi"

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';


export function ActivityCard({ name , title , date ,type, location}) {
    return (
<article className={styles["article"]}>
    <div className={styles["icon-div"]}>
    <BiRun className={styles["icon"]}/>
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