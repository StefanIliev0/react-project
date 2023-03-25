import React from 'react';
import styles from './navigation.module.css';
import { Link } from 'react-router-dom';
import { CustomLink } from '../commonComponents/CustomLink/CustomLink';
import { ProfileDiv } from '../commonComponents/ProfileDiv/ProfileDiv';
import { CgHome} from "react-icons/cg"


export function Navigation() {
    return (
        <header className={styles["navigation-div"]}>
                <div className={styles["home-div"]}>
                <Link to="/" className={styles["link-icon"]}>
                  <CgHome className={styles.icon}/>
                </Link>
                </div>
            <nav className={styles["nav"]} >
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <CustomLink to="/activities" text={"Activities"}/>
                    </li>
                    {/* <li className={styles.li}>
                        <CustomLink to="/groups" text={"Groups"}/>
                    </li> */}
                    <li className={styles.li}>
                        <CustomLink to="auth/login" text={"Login"} />
                    </li>
                    <li className={styles.li}>
                         <CustomLink to="auth/register" text={"Register"} />
                    </li> 
                    {/* <li className={styles.li}>
                        <CustomLink to={"auth/logout"} text={"Logout"}/>
                    </li> */}
                </ul>
            </nav>
            {/* <div className={styles["profile-div"]}>
            </div> */}
            <ProfileDiv/>
    </header>
    )
}



