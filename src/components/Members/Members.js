import { useState ,useEffect ,useContext } from "react";
import styles from "./members.module.css";

import { AuthContext } from "../../contexts/authContext";

import { ProfileDiv } from '../commonComponents/ProfileDiv/ProfileDiv';




export function Members({members , postOwner , removeMember }) {
    const {user} = useContext(AuthContext) ;
    const [normalMembers , setNormalMember] = useState(Object.values(members).filter((x) => x.id !== postOwner)) ;
    const isOwner = postOwner === user?._id ;
    const owner = Object.values(members).filter((x) => x.id === postOwner)[0]; 

    useEffect(()=>{
        setNormalMember(Object.values(members).filter((x) => x.id !== postOwner));
    },[members,postOwner])
    return (
<div className={styles["members-div"]}>
{ !isOwner ? (
    <div className={styles["members-owner-div"]} >
    <h4 className={styles["members-h4"]} >Owner:</h4>
<ProfileDiv  nickname= {owner?.nickname} imgUrl={owner?.imgUrl} to = {owner?.id} />
    </div>
) : null }
<h4 className={styles["members-h4"]} >Members:</h4>
{normalMembers?.map((member) => <ProfileDiv key={member.id} nickname= {member.nickname} imgUrl={member.imgUrl} to = {member.id} postOwner={isOwner} removeUser={removeMember} />)}
<div className={styles["number-div"]}> 
</div>
</div>
    )
}