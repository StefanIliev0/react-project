
import {useContext, useEffect ,useState} from 'react' ;
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./detailsActivity.module.css";



import { Members } from '../Members/Members';
import { ActivityDetail } from './ActivityDetail/ActivityDetail';
import { LocationDetails } from './LocationDetails/LocationDetails';
import { deleteActivity, getActivityDeatails, joinNewMemberToActivity, removeUserFromActivity, updateActivity } from '../../services/activityService';
import { AuthContext } from '../../contexts/authContext';


export function DetailsActivity() {
const initialActivity = {
    "activity title": "",
    type: "sport",
    date: { from: "2023-01-01" , to: "" },
    location: [{ location: "", country: "" }],
    "activity description": "" , 
    members : [] ,
    creator :{ id : false ,ingUrl : "" , nickname : ""},
    isLoading : true
};
const [activity , setActivity] = useState(initialActivity);
const {activityId} = useParams() ;
const [NumOfMembers , setNumofMembers] = useState(0);
useEffect(()=> {
    getActivityDeatails(activityId).then((result)=>{
        const currentActivity = result ;
        setActivity(currentActivity);
        setNumofMembers( currentActivity.members.length + 1)

    }).catch((err)=> {console.log(err)})
}, [activityId]) ;
const {userId} = useContext(AuthContext);
const navigate = useNavigate() ;
 const isMember = !!(activity.members.find((m) => m.id === userId)) ;

async function joinToActivity (userData){
    try{
  await joinNewMemberToActivity(activityId) ;
  setActivity({...activity , members : [...activity.members , userData] })
}catch(err){
    console.log(err);
}}

async function sendData(data){
    try{
    await updateActivity( data , activityId );
}catch(err){
        console.log(err);
}};
async function removeUser(memberId){

 try{ 
    setActivity((act) => {
    const members = act.members.filter(x => x.id !== memberId); 
 return {...act , members}});
 await removeUserFromActivity (activityId , memberId ) ; 
}catch(err){
    console.log(err);
}};
function updateLocations(data){
    setActivity((act) => ({...act , location : data}));
};
async function deleteItem (){
  await deleteActivity(activityId);
    navigate("/activities");
};

    return (
<>
<div className={styles["container-div"]}> 

<ActivityDetail details={activity} sendData ={sendData} jounToActivity = {joinToActivity} removeFromActivity={removeUser} deleteItem={deleteItem}/>

<Members members={activity.members} postOwner={activity.creator} removeMember={removeUser}/>

<LocationDetails locations={activity.location} isMember ={isMember} numOfMembers={NumOfMembers} activityId={activityId} updateLocations = {updateLocations} isOwner={userId === activity?.creator.id} />

</div>
</>
    )
}


