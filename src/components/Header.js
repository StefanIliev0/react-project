import React from 'react' ;
import styles from "../css/header.module.css";
import { CustomLink } from './CustomLink';


export function Header() {
    return (
        <header className={styles["header"]}>
            <div>
            <h2 className={styles["subtitle"]}>Start Your New Journey</h2>
            <h1 className={styles["title"]}>With Your Friends</h1>
            </div>
            <div>
                <CustomLink to={"/"} text="Someting"/>
            </div>
        </header>
    )
}