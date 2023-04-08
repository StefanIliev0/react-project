import React, { useContext } from 'react';
import styles from './navigation.module.css';

import { AuthContext } from '../../contexts/authContext';

import { Link } from 'react-router-dom';
import { CustomLink } from '../commonComponents/CustomLink/CustomLink';
import { ProfileDiv } from '../commonComponents/ProfileDiv/ProfileDiv';
import { CgHome} from "react-icons/cg"


export function Navigation() {
    const {isAuthenticated ,user } = useContext(AuthContext) ; 
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
                {isAuthenticated ? (<> <li className={styles.li}>
                        <CustomLink to="/groups" text={"Groups"}/>
                    </li> 
                     <li className={styles.li}>
                        <CustomLink to={"auth/logout"} text={"Logout"}/>
                    </li> </>):(<>
                    <li className={styles.li}>
                        <CustomLink to="auth/login" text={"Login"} />
                    </li>
                    <li className={styles.li}>
                         <CustomLink to="auth/register" text={"Register"} />
                    </li> </>)}
                </ul>
            </nav>
            {isAuthenticated ? <ProfileDiv to={`${user._id}`} nickname={user.nickname} imgUrl={user.imgUrl} /> : (
                  <div className={styles["profile-div"]} />
            )}
            
         
    </header>
    )
}



