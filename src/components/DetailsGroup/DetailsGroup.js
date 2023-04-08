import { useEffect ,useState} from 'react' ;
import { useParams ,useNavigate} from 'react-router-dom';
import styles from "./detailsGroup.module.css";


import { Members } from '../Members/Members';
import { GroupDetail } from "./GroupDetails/GroupDetails";
import { GroupActivities } from "./GroupActivities/GroupActivities";
import { GroupComments } from "./GroupComments/GroupComments";

import { updateGroup ,removeUserFromGroup , getGroupDeatails, approveGroupCandidate, unapproveGroupCandidate, deleteGroup} from '../../services/groupService';


export function DetailsGroup() {
    const {groupId} = useParams() ;
    const initial = {
        id: groupId,
        location: [{location : "" , county : ""}],
        "group name": "",
        "group description": "",
        "preferent type": "other",
        members: [],
        creator: { id : "" , imgUrl : "" , nickname : ""},
        candidates: [],
        groupActivities: [],
        isLoading : true
    }
    const [group , setGroup] = useState(initial);
    useEffect(()=> {
        getGroupDeatails(groupId).then((result)=>{
            const currentGroup = result ;
            setGroup(currentGroup);
        }).catch((err)=> {console.log(err)})
    }, [groupId]) ;
    const navigate = useNavigate();
    async function sendData(data){
        try{
        await updateGroup( data , groupId );
    }catch(err){
            console.log(err)
        }
    }
    async function removeUser(memberId){
     try{
     await removeUserFromGroup (groupId , memberId ) ; 
     setGroup((gr) => { 
        const members = gr.members.filter(x => x.id !== memberId)
        return{...gr , members}});
    }catch(err){
        console.log(err)
    }
    }
    async function approveCandidate (memberId){
        try{
      await  approveGroupCandidate(groupId , memberId)
      const candidate = group.candidates.find(c => c.id === memberId);
      const candidates = group.candidates.filter(c => c.id !== memberId);
        setGroup((gr) => {
            let members = gr.members  
            members.push(candidate);
        return  {...gr, candidates, members}})
    }catch(err){
        console.log(err)
    }
    }
    async function unapproveCandidate (memberId) {
        try{
        await unapproveGroupCandidate(groupId , memberId)
        const candidates = group.candidates.filter(c => c.id !== memberId);
        setGroup((gr) => ({...gr, candidates}));
    }catch(err){
        console.log(err);
    }}
    async function deleteItem (){
        await deleteGroup(groupId);
          navigate("/groups");
      };
    return (
<div className={styles["container-div"]}> 
<GroupDetail  details ={group}  sendData ={sendData} unsubscribeFromGroup={removeUser} deleteItem={deleteItem} />
<Members
 members={group.members}
 postOwner={group.creator}
 removeMember={removeUser}
 candidates={group.candidates}
  approveCandidate={approveCandidate}
 unapproveCandidate={unapproveCandidate}/>
<GroupActivities groupActivities={group.groupActivities}/>
<GroupComments objectId={groupId} owner={group.creator}/>
</div>
    )
}