import styles from "./aprovedLocationCard.module.css";


export function AprovedLocationCard({data}) {

    return (
<div className={styles["location-card-div"]}>
<h4>{`${data.location}, ${data.country}`}</h4>
</div>
    )
}