import { ActivityCard } from '../ActivityCard/ActyvityCard';
import styles from "./activities.module.css";
import { CustomLink } from '../commonComponents/CustomLink/CustomLink';

export function Activities() {
    return (
        <div >
            <div className={styles["sub-navigate-div"]} >
                <h3 className={styles.h3}>Find next your activity!</h3>
                <div className={styles["create-activity-div"]}>
                    <CustomLink text={"Create new activity"} to={"/activities/create"} />
                </div>
            </div>
            <div className={styles["activity-div"]}>
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
            </div>
        </div>
    )
}