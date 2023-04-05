
import styles from "./profileDiv.module.css";
import {Link} from "react-router-dom";
import { useState } from 'react';

import {CgProfile } from "react-icons/cg"

export function ProfileDiv({ to , postOwner, imgUrl , nickname , removeUser}) {
   const [isHovered , setIsHovered] = useState(false); 
   const [remove , setRemove] = useState(false); 

   function removeUserFromActivity(e){
    removeUser(to) ;
   }

    return (
        <div className={styles["container-div"]} onMouseEnter = {() => setIsHovered(true)} onMouseLeave = {() => setIsHovered(false)}>
            {remove ?(
                <div>
                    <p className={styles["p"]} style={ {"color" : "red"}}>Are you sure you want to remove this member?</p>
                <div>
                    <button className={styles["removed-btn"]} onClick ={ removeUserFromActivity}>Yes!</button>
                    <button className={styles["return-btn"]} onClick = {(e) => setRemove(false)}>No!</button>
                </div>
                </div>
            ) :(
            <>
        <div className={styles["buttons-div"]}>
        <p className={styles["p"]}>{nickname}</p>
        {(postOwner && isHovered) ? (
                <button className={styles["remove-btn"]} onClick = {(e) => setRemove(true)}>Remove</button>
         ) : null}
        </div>
        <div className={styles["profile-div"]}>
         <Link to={`/profile/${to}`} className={styles["link-icon"]}>
           {imgUrl ?<img src={imgUrl} alt="profile" className={styles.icon}/>  : <CgProfile className={styles.icon}/>}
        </Link>
    </div>
            </> )}
    </div>
    )
}