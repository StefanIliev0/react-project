import { useState, useEffect} from 'react';
import styles from "./profileDetails.module.css";
import { Navigate } from 'react-router-dom';


import { formContext } from '../../../contexts/formContext';

import { CustomForm } from '../../commonComponents/CustomForm/CustomForm';
import { CustomInputElement } from '../../commonComponents/CustomForm/CustomInputElement/CustomInputElement';
import { CustomLocationElement } from '../../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement';
import { CustomTextAreaElement } from '../../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement';
import { CustomProfilePic } from '../../commonComponents/CustomForm/CustomProfilePic/CustomProfilePic';



export function ProfileDetails({details , sendData , destroy , isOwner }) {
    const [generalEdit, setGeneralEdit] = useState(false);
    const [savedData, setSavedData] = useState(details);
    const [err, setErr] = useState(new Set());
    useEffect(()=> {
        setSavedData(details);
    } , [details])
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
        return <Navigate to={"/error"}/>
    }
    }

    function setEdit(state) {
        setGeneralEdit(state);
    };
    async function reject(){
        setSavedData(details);
        setGeneralEdit(false); 
    }
    return (
<div className={styles["details-div"]}>
<formContext.Provider value={({savedData , generalEdit , saveData , submitForm ,saveLocationData , err , isOwner , setEdit })}>
<CustomForm  reject={reject} deleteItem={destroy} >
<CustomProfilePic name={"profile picture"}/>
<CustomInputElement name={"nickname"} type={"text"} />
<CustomInputElement name={"age"} type={"number"} />
<CustomLocationElement name={"location"} />
<CustomTextAreaElement name={"interests"} />
</CustomForm>
</formContext.Provider>
</div>
)}
