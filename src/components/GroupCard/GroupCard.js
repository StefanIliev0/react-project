import React from 'react' ;
import styles from "./groupCard.module.css";
import { GrGroup } from "react-icons/gr"; 

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';
import { CustomButton } from '../commonComponents/CustomButton/CustomButton';


export function GroupCard() {
    return (
<article className={styles["article"]}>
    <div className={styles["icon-div"]}>
    <GrGroup className={styles["icon"]}/>
    </div>
    <div>
    <h4>Some Group Name</h4>
    <h5>Number of members : 10</h5>
    <p>Preferred activity : Drink</p>
    <p>location : Varna, Bulgaria</p>
    </div>
    <div >
    <CustomButton text={"Candidate"} onclick={() => console.log("cliked")} />
    <CustomLink to={"/groups/groupId"} text = "Details"/>
    </div>
</article>
    )
}