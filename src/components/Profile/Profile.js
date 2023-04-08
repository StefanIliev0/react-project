import {useState,useContext,useEffect } from 'react' ;
import { useParams ,useNavigate} from 'react-router-dom';
import styles from "./profile.module.css";

import { getProfileDeatails,deleteProfile, updateProfile } from '../../services/userServise';
import { AuthContext } from '../../contexts/authContext';

import { ProfileActivities } from './ProfileActivities/ProfileActivities';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';
import { ProfileGroups } from './ProfileGroups/ProfileGroups';


export function Profile() {
    const initialData = {
    nickname : "" ,
    age : "",
    location : [{location : "" , country : ""}] ,
    interests : "" ,
    "profile picture" : "",
    activities : [] , 
    groups : []
}

    const [profile , setProfile] = useState(initialData);
    const {profileId} = useParams() ;
    useEffect(()=> {
        getProfileDeatails(profileId).then((result)=>{
            const currentProfile = result ;
            setProfile(currentProfile);
        }).catch((err)=> {console.log(err)})
    }, [profileId]) ;
    const {userId} = useContext(AuthContext);
    const isOwner = userId === profile?.id;
    const navigate = useNavigate() ;
    
    async function sendData(data){
        try{
        await updateProfile( data , profileId );
    }catch(err){
            console.log(err);
    }};
    async function deleteItem (){
      await deleteProfile(profileId);
        navigate("/login");
    };
    


    return (
<>
<div className={styles["container-div"]}> 
<ProfileDetails details={profile} sendData={sendData} destroy={deleteItem} isOwner={isOwner}/>
{isOwner && (
<>
<ProfileActivities  activities={profile.activities}/>
<ProfileGroups groups={profile.groups} />
</>
)}
</div>
</>
    )
}