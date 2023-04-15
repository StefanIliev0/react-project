import { ActivityCard } from '../../ActivityCard/ActyvityCard';
import styles from "./groupActivities.module.css";

export function GroupActivities({ groupActivities }) {
    return (
        <div className={styles["activity-div"]}>
            { (groupActivities.length > 0) && groupActivities.map(g => (
                <ActivityCard
                    name={g?.id}
                    key={g?.id}
                    title={g?.activityTitle}
                    date={g?.date}
                    type={g?.type}
                    location={g?.location}
                />
            ))
            }
        </div>
    )
}