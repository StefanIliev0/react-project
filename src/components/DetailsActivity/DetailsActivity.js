
import {useEffect ,useState} from 'react' ;
import { useParams } from 'react-router-dom';
import styles from "./detailsActivity.module.css";



import { Members } from '../Members/Members';
import { ActivityDetail } from './ActivityDetail/ActivityDetail';
import { LocationDetails } from './LocationDetails/LocationDetails';
import { getActivityDeatails, joinNewMemberToActivity, updateActivity } from '../../services/activityService';


export function DetailsActivity() {
const initialActivity = {
    "activity title": "",
    type: "sport",
    date: { from: "0000-00-00" , to: "" },
    location: [{ location: "", country: "" }],
    "activity description": "" , 
    members : [] ,
    _creatorId : ""
};
const [activity , setActivity] = useState(initialActivity);
const {activityId} = useParams()
useEffect(()=> {
    getActivityDeatails(activityId).then((result)=>{
        const currentActivity = result ;
        setActivity(currentActivity);
    }).catch((err)=> {console.log(err)})
}, [activityId])

async function joinToActivity (userData){
    try{
  await joinNewMemberToActivity(userData , activityId) ;
  setActivity({...activity , members : {...activity.members , userData} })
}catch(err){
    console.log(err)
}}

async function sendData(data){
    try{
    await updateActivity(data , activityId );
}catch(err){
        console.log(err)
    }
}
async function removeUser(userId){
 setActivity((act) => ({...act , members : Object.values(act.members).filter(x => x.id !== userId)}))
}

    return (
<>
<div className={styles["container-div"]}> 

<ActivityDetail details={activity} sendData ={sendData} jounToActivity = {joinToActivity}/>

<Members members={activity.members} postOwner={activity._creatorId} removeMember={removeUser}/>

<LocationDetails/>

</div>
</>
    )
}