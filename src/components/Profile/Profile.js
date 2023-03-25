import React from 'react' ;
import styles from "./profile.module.css";
import { ProfileActivities } from './ProfileActivities/ProfileActivities';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';
import { ProfileGroups } from './ProfileGroups/ProfileGroups';


export function Profile() {
    return (
<>
<div className={styles["container-div"]}> 

<ProfileDetails/>

<ProfileActivities/>

<ProfileGroups />

</div>
</>
    )
}