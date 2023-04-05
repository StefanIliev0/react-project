/* eslint-disable */
import { useState , useContext , useEffect} from 'react';
import styles from "./activityDetail.module.css";

import { formContext } from '../../../contexts/formContext';
import { AuthContext } from '../../../contexts/authContext';

import { CustomForm } from '../../commonComponents/CustomForm/CustomForm';
import { CustomInputElement } from "../../commonComponents/CustomForm/CustomInputElement/CustomInputElement";
import { CustomLocationElement } from "../../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement";
import { CustomDateElement } from "../../commonComponents/CustomForm/CustomDateElement/CustomDateElement";
import { CustomSelectElement } from "../../commonComponents/CustomForm/CustomSelectElement/CustomSelectElement";
import { CustomTextAreaElement } from "../../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement";



export function ActivityDetail({ details , sendData , jounToActivity,  removeFromActivity}) {
    const [generalEdit, setGeneralEdit] = useState(false);
    const [savedData, setSavedData] = useState(details);
    const [err, setErr] = useState(new Set());
    const {user , isAuthenticated , addNewActivity } = useContext(AuthContext) ;
    useEffect(()=> {
        setSavedData(details);
    } , [details])


    const isOwner = user?._id === details.creator.id ; 
    let isJoinedMember = Object.values(details.members).find(x => x.id === user._id) ; 

    function saveData(name, value, err) {
        err ? setErr((err) => err.add(name)) : (
            setErr((err) => {
                err.delete(name);
                return err;
            }));
        setSavedData((currentData) => ({ ...currentData, [name]: value }));
        if(!generalEdit){
            sendData(savedData) ;}
    };
    function saveLocationData(value, index, name, err) {
        err ? setErr((err) => err.add(name)) : (
            setErr((err) => {
                err.delete(name);
                return err;
            }));
        setSavedData((currentData) => {
            currentData.location[index] = value;
            return { ...currentData };
        })
                if(!generalEdit){
            sendData(savedData) ;}
    };
    async function submitForm() {
        try{
          await sendData(savedData) ; 
          setGeneralEdit(false)
    }catch(err){
        console.log(err.message) ; 
    }
    }

    function setEdit(state) {
        setGeneralEdit(state);
    };
    async function reject(){
        setSavedData(details);
        setGeneralEdit(false); 
    }
    async function  joinActivity(){
    const newMember = {id : user._id , imgUrl : user.imgUrl , nickname : user.nickname};
      await   jounToActivity(newMember) ;
     addNewActivity(details) ;
    }
    async function unsubscribeToActivity(userId){
     await removeFromActivity(userId);
    }
    
    return (
        <div className={styles["details-div"]}>
            <formContext.Provider value={({savedData , generalEdit , saveData , submitForm ,saveLocationData , err , isOwner , isAuthenticated , isJoinedMember})}>
            <CustomForm  setGeneralEdit={setEdit} reject={reject}  join={joinActivity}  unsubscribe={unsubscribeToActivity} >
                <CustomInputElement name={"activity title"} type={"text"}  />
                <CustomSelectElement name={"type"} />
                <CustomDateElement name={"date"} />
                <CustomLocationElement name={"location-0"}  />
                <CustomTextAreaElement name={"activity description"}  />
            </CustomForm>
            </formContext.Provider>
        </div>
    )
}
