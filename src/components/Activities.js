import React from 'react' ;
import styles from "../css/activities.module.css";
import { ActivityCard } from './ActyvityCard';

export function Activities() {
    return (
<div>
    <h3 className={styles.h3}>Find next your activity!</h3>
<div className={styles["activity-div"]}>
    <ActivityCard/>
    <ActivityCard/>
    <ActivityCard/>
    <ActivityCard/>
</div>
</div>
    )
}