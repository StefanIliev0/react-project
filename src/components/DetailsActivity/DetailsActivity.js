import React from 'react' ;
import { Members } from '../Members/Members';
import { ActivityDetail } from './ActivityDetail/ActivityDetail';
import styles from "./detailsActivity.module.css";
import { LocationDetails } from './LocationDetails/LocationDetails';


export function DetailsActivity() {
    return (
<>
<div className={styles["container-div"]}> 

<ActivityDetail/>

<Members/>

<LocationDetails/>
</div>
</>
    )
}