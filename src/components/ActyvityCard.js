import React from 'react' ;
import styles from "../css/activityCard.module.css";
import { CustomLink } from './CustomLink';


export function ActivityCard() {
    return (
<article className={styles["article"]}>
    <div className={styles["img-div"]}>
    <img  className={styles["img"]}src="https://static.framar.bg/thumbs/6/sport/vlianie-fizicheska-aktivnost-opornodvigatelen-aparat.jpg" alt="something" />
    </div>
    <div>
    <h4>Something Activity Name</h4>
    <h5>Planing Date : 01.03.2023</h5>
    <p>Type of Activity : Drink</p>
    <p>location : Varna, Bulgaria</p>
    </div>
    <div>
    <CustomLink to={"/details"} text = "Details"/>
    </div>
</article>
    )
}