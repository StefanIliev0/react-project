import React from 'react';
import styles from '../css/navigation.module.css';
import { Link } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import {CgProfile , CgHome} from "react-icons/cg"


export function Navigation() {
    return (
        <div className={styles["navigation-div"]}>
                <div className={styles["home-div"]}>
                <Link to="/" className={styles["link-icon"]}>
                  <CgHome className={styles.icon}/>
                </Link>
                </div>
            <nav className={styles["nav"]} >
                <ul className={styles.ul}>
                    {/* <li className={styles.li}>
                        <CustomLink to="users/login" text={"Login"} />
                    </li>
                    <li className={styles.li}>
                         <CustomLink to="users/register" text={"Register"} />
                    </li>  */}
                    <li className={styles.li}>
                        <CustomLink to="users/logout" text={"Logout"} />
                    </li>
                    <li className={styles.li}>
                        <CustomLink to="/activities" text={"Activities"}/>
                    </li>
                    <li className={styles.li}>
                        <CustomLink to="/groups" text={"Groups"}/>
                    </li>
                </ul>
            </nav>
            <div className={styles["profile-div"]}>
                <Link to="/prolfile" className={styles["link-icon"]}>
                    <div>
                   <CgProfile className={styles.icon}/>
                   </div>
                </Link>
            </div>
    </div>
    )
}



