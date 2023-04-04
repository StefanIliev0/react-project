import { useState ,useEffect ,useContext } from "react";
import styles from "./members.module.css";

import { AuthContext } from "../../contexts/authContext";

import { ProfileDiv } from '../commonComponents/ProfileDiv/ProfileDiv';




export function Members({members , postOwner , removeMember }) {
    const {user} = useContext(AuthContext) ;
    const [normalMembers , setNormalMember] = useState(members?.map(a => ({id : a?.id , imgUrl : a?.attributes?.imgUrl ,  nickname : a?.attributes?.nickname}))) ;
    const isOwner = postOwner?.id === user?._id ;
    useEffect(()=>{
        setNormalMember(Object.entries(members).map(([k,v])=> ({...v , _id : k})).filter((x) => x.id !== postOwner.id));
    },[members,postOwner?.id , setNormalMember ])

    return (<>
 <div className={styles["members-div"]}>
{ !isOwner ? (
    
    <div className={styles["members-owner-div"]} >
    <h4 className={styles["members-h4"]} >Owner:</h4>
<ProfileDiv  nickname={postOwner?.attributes?.nickname} imgUrl={postOwner?.attributes?.imgUrl} to = {postOwner?.id} />
    </div>
) : null }
<h4 className={styles["members-h4"]} >Members:</h4>
{normalMembers?.map((member) => {
   return    <ProfileDiv key={member.id} nickname= {member?.attributes?.nickname} imgUrl={member?.attributes?.imgUrl} to = {member?.attributes?.id} postOwner={isOwner} removeUser={removeMember} path={member.id}/>})}
<div className={styles["number-div"]}> 
</div>
</div> 
   </> )
}