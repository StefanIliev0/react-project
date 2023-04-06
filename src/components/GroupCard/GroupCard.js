import styles from "./groupCard.module.css";
import { GrGroup } from "react-icons/gr"; 

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';
import { CustomButton } from '../commonComponents/CustomButton/CustomButton';


export function GroupCard({name, id, preferentType, location, candidate, isMember, isCandidate }) {
    return (
<article className={styles["article"]}>
    <div className={styles["icon-div"]}>
    <GrGroup className={styles["icon"]}/>
    </div>
    <div>
    <h4>{name}</h4>
    <p>Preferred activity :{preferentType}</p>
    <p>location : {`${location[0].location}, ${location[0].country}`}</p>
    </div>
    <div >
    {(!isCandidate && !isMember) && <CustomButton text={"Candidate"} onclick={() => candidate(id)} />}
    {isMember && <CustomLink to={`/groups/${id}`} text = "Details"/>}
    </div>
</article>
    )
}