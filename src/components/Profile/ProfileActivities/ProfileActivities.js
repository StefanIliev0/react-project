import { CustomLink } from '../../commonComponents/CustomLink/CustomLink';
import { ActivityCard } from '../../ActivityCard/ActyvityCard';
import styles from "./profileActivities.module.css";

export function ProfileActivities({ activities }) {
    return (

        <div className={styles["activity-div"]}>
            <h2>Your ativities !</h2>
            {activities !== [] ? (activities.map((act) => (
                <ActivityCard
                    name={act?.id}
                    key={act?.id}
                    title={act.activityTitle}
                    date={act?.date}
                    type={act?.type}
                    location={act?.location}
                />))) : (
                <>
                    <h3>You haven`t activities yet</h3>
                    <CustomLink to={"/activities"} text={"Find your next activity"} />
                </>
            )}
        </div>
    )
}