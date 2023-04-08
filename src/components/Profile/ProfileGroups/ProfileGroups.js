import { CustomLink } from '../../commonComponents/CustomLink/CustomLink';
import { GroupCard } from "../../GroupCard/GroupCard"
import styles from "./profileGroups.module.css";

export function ProfileGroups({ groups }) {
    return (
        <div>
            <h3 className={styles.h3}>Your Groups !</h3>
            <div className={styles["group-div"]}>
                {groups !== [] ? groups.map((g) => (
                    <GroupCard
                        name={g.name}
                        id={g.id}
                        location={g.location}
                        preferentType={g.preferentType}
                        isMember={true}
                        key={g.id}
                    />
                )) : (
                    <>
                        <h3>You are not in any groups yet.</h3>
                        <CustomLink to={"/groups"} text={"join now!"} />
                    </>
                )}
            </div>
        </div>
    )
}