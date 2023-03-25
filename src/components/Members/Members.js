import React from 'react' ;
import styles from "./members.module.css";

import { ProfileDiv } from '../commonComponents/ProfileDiv/ProfileDiv';

export function Members({postOwner = true}) {
    return (
<div className={styles["members-div"]}>
{ !postOwner ? (
    <div className={styles["members-owner-div"]} >
    <h4 className={styles["members-h4"]} >Owner:</h4>
<ProfileDiv  nickname= "Stefan" imgUrl={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}/>
    </div>
) : null }
<h4 className={styles["members-h4"]} >Members:</h4>
<ProfileDiv postOwner={postOwner}  nickname= "gosho" imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s"}/>
<ProfileDiv postOwner={postOwner} nickname= "ivan" imgUrl={"https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"}/>
<ProfileDiv postOwner={postOwner}  nickname= "nasko"imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s"}/>
<ProfileDiv postOwner={postOwner} nickname= "misho"/>
<ProfileDiv postOwner={postOwner} nickname= "monika"/>
<ProfileDiv postOwner={postOwner}  nickname= "gosho" imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s"}/>
<ProfileDiv postOwner={postOwner} nickname= "ivan" imgUrl={"https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"}/>
<ProfileDiv postOwner={postOwner}  nickname= "nasko"imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD3XP0y2U4ZVpcGsaFUu-tmM7-aD0Luj6FgQgqdJc&s"}/>
<ProfileDiv postOwner={postOwner} nickname= "misho"/>
<ProfileDiv postOwner={postOwner} nickname= "monika"/>
<div className={styles["number-div"]}> 
</div>
</div>
    )
}