import {useContext, useEffect ,useState} from 'react' ;
import { useParams } from 'react-router-dom';
import styles from "./detailsGroup.module.css";

import { AuthContext } from '../../contexts/authContext';


import { Members } from '../Members/Members';
import { GroupDetail } from "./GroupDetails/GroupDetails";
import { GroupActivities } from "./GroupActivities/GroupActivities";
// import { GroupComments } from "./GroupComments/GroupComments";

import { updateGroup ,removeUserFromGroup , getGroupDeatails, approveGroupCandidate, unapproveGroupCandidate} from '../../services/groupService';


export function DetailsGroup() {
    const [group , setGroup] = useState({
        "group name": "",
        "preferent type": "",
        location: [{ location: "", country: "" }],
        "group description": "" , 
        members : [] ,
        candidates : [] , 
        creator : {id : "" , imgUrl : "" , nickname : ""} ,
        groupActivities : []
        });
    const {groupId} = useParams() ;
    useEffect(()=> {
        getGroupDeatails(groupId).then((result)=>{
            const currentGroup = result ;
            setGroup(currentGroup);
        }).catch((err)=> {console.log(err)})
    }, [groupId]) ;
    const {userId} = useContext(AuthContext)
    async function sendData(data){
        try{
        await updateGroup( data , activityId );
    }catch(err){
            console.log(err)
        }
    }
    async function removeUser(memberId){
     try{
     await removeUserFromGroup (groupId , memberId ) ; 
     setGroup((gr) => ({...gr , groups : gr.members.filter(x => x.id !== userId)}));
    }catch(err){
        console.log(err)
    }
    }
    async function approveCandidate (memberId){
        try{
      await  approveGroupCandidate(groupId , memberId)
      const candidate = group.candidates.find(c => c.id === memberId);
      const candidates = group.candidates.filter(c => c.id !== memberId);
      const members = group.members.push(candidate); 
      setGroup((gr) => ({...gr, candidates, members}))
    }catch(err){
        console.log(err)
    }
    }
    async function unapproveCandidate (memberId) {
        try{
        await unapproveGroupCandidate(groupId , memberId)
        const candidates = group.candidates.filter(c => c.id !== memberId);
        setGroup((gr) => ({...gr, candidates}))
    }catch(err){
        console.log(err)
    }
    }
    return (
<div className={styles["container-div"]}> 
<GroupDetail  details ={group}  sendData ={sendData} unsubscribeFromGroup={removeUser}/>
<Members
 members={group.members}
 postOwner={group.creator}
 removeMember={removeUser}
 candidates={group.candidates}
  approveCandidate={approveCandidate}
 unapproveCandidate={unapproveCandidate}/>
<GroupActivities groupActivities={group.groupActivities}/>
{/* <GroupComments /> */}
</div>
    )
}