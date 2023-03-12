import React from 'react' ;
import styles from "../css/customLink.module.css";
import {Link} from "react-router-dom";


export function CustomLink({to , text}) {
    return (
    <Link to={to} className={styles.link}>{text}</Link>
    )
}