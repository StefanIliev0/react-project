import React from 'react' ;
import styles from "../css/footer.module.css";
import {AiOutlineCopyrightCircle} from "react-icons/ai"

export function Footer() {
    return (
<footer className={styles["footer"]}>
    <p className={styles["p-footer"]}>Copyright 2023 <AiOutlineCopyrightCircle/> <span className={styles["span-footer"]}>Stefan Iliev </span> for <span className={styles["span-footer"]}>SoftUni React Project</span></p>
</footer>
    )
}