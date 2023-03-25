import React from 'react' ;
import { GroupCard} from "../../GroupCard/GroupCard"
import styles from "./profileGroups.module.css";

export function ProfileGroups() {
    return (
<div>
    <h3 className={styles.h3}>Your Groups !</h3>
<div className={styles["group-div"]}>
    <GroupCard/>
    <GroupCard/>
    <GroupCard/>
    <GroupCard/>
</div>
</div>
    )
}