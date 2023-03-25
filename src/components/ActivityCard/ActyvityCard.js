import React from 'react' ;
import styles from "./activityCard.module.css";
import {BiRun} from "react-icons/bi"

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';


export function ActivityCard() {
    return (
<article className={styles["article"]}>
    <div className={styles["icon-div"]}>
    <BiRun className={styles["icon"]}/>
    </div>
    <div>
    <h4>Something Activity Name</h4>
    <h5>Planing Date : 01.03.2023</h5>
    <p>Type of Activity : Drink</p>
    <p>location : Varna, Bulgaria</p>
    </div>
    <div>
    <CustomLink to={"/activities/NeshtoSi"} text = "Details"/>
    </div>
</article>
    )
}