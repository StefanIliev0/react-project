import { ActivityCard } from '../../ActivityCard/ActyvityCard';
import styles from "./profileActivities.module.css";

export function ProfileActivities() {
    return (

<div className={styles["activity-div"]}>
    <h2>Your ativities !</h2>
    <ActivityCard/>
    <ActivityCard/>
    <ActivityCard/>
    <ActivityCard/>
    <ActivityCard/>
    <ActivityCard/>
    <ActivityCard/>
    <ActivityCard/>
</div>
    )
}