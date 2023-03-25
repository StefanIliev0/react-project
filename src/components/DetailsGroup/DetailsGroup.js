
import styles from "./detailsGroup.module.css";
import { Members } from '../Members/Members';
import { GroupDetail } from "./GroupDetails/GroupDetails";
import { GroupActivities } from "./GroupActivities/GroupActivities";
import { GroupComments } from "./GroupComments/GroupComments";


export function DetailsGroup() {
    return (
<div className={styles["container-div"]}> 
<GroupDetail/>
<Members/>
<GroupActivities/>
<GroupComments />
</div>
    )
}