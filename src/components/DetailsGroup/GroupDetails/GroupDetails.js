import { useState , useContext, useEffect } from 'react';
import styles from "./groupDetails.module.css";


import { AuthContext } from '../../../contexts/authContext';
import { formContext } from '../../../contexts/formContext';

import {  CustomForm } from '../../commonComponents/CustomForm/CustomForm';
import {CustomNumberElement} from "../../commonComponents/CustomForm/CustomNumberElement/CustomNumberElement";
import {CustomInputElement} from "../../commonComponents/CustomForm/CustomInputElement/CustomInputElement";
import {CustomLocationElement} from "../../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement";
import {CustomSelectElement} from "../../commonComponents/CustomForm/CustomSelectElement/CustomSelectElement";
import {CustomTextAreaElement} from "../../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement";

export function GroupDetail({details, sendData , unsubscribeFromGroup ,deleteItem}) {
    const [generalEdit, setGeneralEdit] = useState(false);
    const [savedData, setSavedData] = useState(details);
    const [err, setErr] = useState(new Set());
    const {user , isAuthenticated  } = useContext(AuthContext) ;
    useEffect(()=> {
        setSavedData(details);
    } , [details])
    const isOwner = user?._id === details.creator.id ; 
    let isJoinedMember = true ; 

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
    async function unsubscribeToGroup(){
        await unsubscribeFromGroup(user._id) ; 
    }

    
    return (
<div className={styles["details-div"]}>
<formContext.Provider value={{savedData , generalEdit ,setEdit, saveData , submitForm ,saveLocationData , err , isOwner , isAuthenticated , isJoinedMember}}>
<CustomForm  reject={reject} unsubscribe={unsubscribeToGroup} deleteItem={deleteItem}>
<CustomInputElement name={"group name"} type={"text"} />
<CustomSelectElement name={"preferent type"} />
<CustomNumberElement name={"members"}  number={details?.members?.length || 0}/>
<CustomLocationElement name={"location-0"} />
<CustomTextAreaElement name={"group description"}/>
</CustomForm>
</formContext.Provider>
</div>
)}
