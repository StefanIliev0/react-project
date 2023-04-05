import { useState ,useEffect ,useContext } from "react";
import styles from "./members.module.css";

import { AuthContext } from "../../contexts/authContext";

import { ProfileDiv } from '../commonComponents/ProfileDiv/ProfileDiv';




export function Members({members , postOwner , removeMember }) {
    const {user} = useContext(AuthContext) ;
    const [normalMembers , setNormalMember] = useState(members) ;
    const isOwner = postOwner?.id === user?._id ;
    useEffect(()=>{
        setNormalMember(members)
    },[members ])

    return (<>
 <div className={styles["members-div"]}>
{ !isOwner ? (
    
    <div className={styles["members-owner-div"]} >
    <h4 className={styles["members-h4"]} >Owner:</h4>
<ProfileDiv  nickname={postOwner?.nickname} imgUrl={postOwner?.imgUrl} to = {postOwner?.id} />
    </div>
) : null }
<h4 className={styles["members-h4"]} >Members:</h4>
{normalMembers?.map((member) => {
   return    <ProfileDiv key={member.id} nickname= {member?.nickname} imgUrl={member?.imgUrl} to = {member?.id} postOwner={isOwner} removeUser={removeMember} path={member.id}/>})}
<div className={styles["number-div"]}> 
</div>
</div> 
   </> )
}