import React from 'react';
import styles from "../css/homeArticles.module.css";
import {FaUserFriends , FaRoute} from "react-icons/fa";
import {GiPartyFlags} from "react-icons/gi";


export function HomeArticles(){
    return (
    <div className={styles["div-articles"]}>
    <article className={`${styles["article"]}  ${styles["right-border"]}`}>
    <FaUserFriends className={styles["icon"]}/>
        <h6 className={styles["headers"]}>Communicate with your close friends</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolore ratione beatae laborum optio corrupti ea maxime labore quis modi.</p>
    </article>
    <article className={styles["article"]}>
    <FaRoute className={styles["icon"]} />
        <h6 className={styles["headers"]}>Don't be afraid to jump into the unknown!</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolore ratione beatae laborum optio corrupti ea maxime labore quis modi.</p>
    </article>
    <article className={`${styles["article"]}  ${styles["left-border"]}`}>
    <GiPartyFlags className={styles["icon"]} />
        <h6 className={styles["headers"]}>Make best party!</h6>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore dolore ratione beatae laborum optio corrupti ea maxime labore quis modi.</p>
    </article>
    </div>
    )
}