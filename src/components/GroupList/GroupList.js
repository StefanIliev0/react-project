import React from 'react' ;
import { GroupCard } from '../GroupCard/GroupCard';
import styles from "./groupList.module.css";
import { CustomLink } from '../commonComponents/CustomLink/CustomLink';

export function GroupList() {
    return (
<div>
    <div className={styles["sub-navigate-div"]} >
    <h3 className={styles.h3}>Find your friend in this gorup!</h3>
<div className={styles["create-group-div"]}>
    <CustomLink text={"Create new group"} to={"/groups/create"}/>
</div>
</div>
<div className={styles["group-div"]}>
    <GroupCard/>
    <GroupCard/>
    <GroupCard/>
    <GroupCard/>
</div>
</div>
    )
}