import { ActivityCard } from '../../ActivityCard/ActyvityCard';
import styles from "./groupActivities.module.css";

export function GroupActivities() {
    return (

<div className={styles["activity-div"]}>
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