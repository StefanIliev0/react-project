import React from 'react' ;
import styles from "./customLink.module.css";
import {Link} from "react-router-dom";


export function CustomLink({to , text}) {
    return (
    <Link to={to} className={styles.link}>{text}</Link>
    )
}