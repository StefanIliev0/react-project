import React from 'react' ;
import styles from "./HomeHeader.module.css";
import { CustomLink } from '../../commonComponents/CustomLink/CustomLink';


export function HomeHeader() {
    return (
        <div className={styles["header"]}>
            <div>
            <h2 className={styles["subtitle"]}>Start Your New Journey</h2>
            <h1 className={styles["title"]}>With Your Friends</h1>
            </div>
            <div>
                <CustomLink to={"/activities"} text="Let`s start"/>
            </div>
        </div>
    )
}