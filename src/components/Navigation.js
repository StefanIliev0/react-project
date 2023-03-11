import React from 'react';
import styles from '../css/navigation.module.css';
import { Link } from "react-router-dom";
import {MdOutlineRoute} from "react-icons/md";
import {CgProfile} from "react-icons/cg"


export function Navigation() {
    return (
        <div className={styles["navigation-div"]}>
            <nav className={styles["nav"]} >
                <div className={styles["home-div"]}>
                <Link to="/" className={styles.link}>
                   <MdOutlineRoute className={styles.icon}/>
                </Link>
                </div>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/users/login" className={styles.link}>Login</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="users/register" className={styles.link}>Register</Link>
                    </li> 
                    <li className={styles.li}>
                        <Link to="users/logout" className={styles.link}>Logout</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="trips" className={styles.link}>Trips</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="groups" className={styles.link}>Groups</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles["profile-div"]}>
                <Link to="/prolfile" className={styles.link}>
                   <CgProfile className={styles.icon}/>
                </Link>
            </div>
    </div>
    )
}



