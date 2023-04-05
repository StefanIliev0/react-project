
import {useContext, useEffect ,useState} from 'react' ;
import { useParams } from 'react-router-dom';
import styles from "./detailsActivity.module.css";



import { Members } from '../Members/Members';
import { ActivityDetail } from './ActivityDetail/ActivityDetail';
import { LocationDetails } from './LocationDetails/LocationDetails';
import { getActivityDeatails, joinNewMemberToActivity, removeUserFromActivity, updateActivity } from '../../services/activityService';
import { AuthContext } from '../../contexts/authContext';


export function DetailsActivity() {
const initialActivity = {
    "activity title": "",
    type: "sport",
    date: { from: "0000-00-00" , to: "" },
    location: [{ location: "", country: "" }],
    "activity description": "" , 
    members : [] ,
    creator :{ id : "" ,ingUrl : "" , nickname : ""},
};
const [activity , setActivity] = useState(initialActivity);
const {activityId} = useParams() ;
const [NumOfMembers , setNumofMembers] = useState(0)
useEffect(()=> {
    getActivityDeatails(activityId).then((result)=>{
        const currentActivity = result ;
        setActivity(currentActivity);
        setNumofMembers(Object.values(currentActivity.members).length)

    }).catch((err)=> {console.log(err)})
}, [activityId]) ;
const {userId} = useContext(AuthContext)
 const isMember = !!Object.values(activity.members).find((m) => m.id === userId) ;

async function joinToActivity (userData){
    try{
  await joinNewMemberToActivity(activityId) ;
  setActivity({...activity , members : {...activity.members , userData} })
}catch(err){
    console.log(err)
}}

async function sendData(data){
    try{
    await updateActivity( data , activityId );
}catch(err){
        console.log(err)
    }
}
async function removeUser(userId , memberId){
 setActivity((act) => ({...act , members : Object.values(act.members).filter(x => x.id !== userId)}));
 try{
 await removeUserFromActivity (activityId , memberId ) ; 
}catch(err){
    console.log(err)
}
}
function updateLocations(data){
    setActivity((act) => ({...act , location : data}))
}
    return (
<>
<div className={styles["container-div"]}> 

<ActivityDetail details={activity} sendData ={sendData} jounToActivity = {joinToActivity}/>

<Members members={activity.members} postOwner={activity.creator} removeMember={removeUser}/>

<LocationDetails locations={activity.location} isMember ={isMember} numOfMembers={NumOfMembers} activityId={activityId} updateLocations = {updateLocations} isOwner={userId === activity?.creator.id} />

</div>
</>
    )
}


