import { useState } from "react";
import styles from "./createActivity.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";


import {  CustomForm } from '../commonComponents/CustomForm/CustomForm';
import {CustomInputElement} from "../commonComponents/CustomForm/CustomInputElement/CustomInputElement";
import {CustomLocationElement} from "../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement";
import {CustomSelectElement} from "../commonComponents/CustomForm/CustomSelectElement/CustomSelectElement";
import {CustomTextAreaElement} from "../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement";
import { CustomDateElement } from "../commonComponents/CustomForm/CustomDateElement/CustomDateElement";
import { AccessibilitySelect } from "../commonComponents/CustomForm/AccessibilitySelect/AccessibilitySelect";
import { CustomButton } from "../commonComponents/CustomButton/CustomButton";

export function CreateAcivity() {
    const [savedData , setSavedData] = useState({
        "activity title" : "",
        "accessibility" : "" ,
        type : "" ,
        date : {from :""} ,
        location : [] ,
        "activity description" : ""
    });
    const [numOfLocations , setNumOfLocations] = useState([1]);

    const groups = [
        {_id : "13" , name : "gosho" } ,
        {_id : "14" , name : "misho" } ,
        {_id : "15" , name : "pesho" } ,
        {_id : "16" , name : "gasho" } ,
        {_id : "17" , name : "goshko" } ,
    ];

    function incrementLocations(){
        setNumOfLocations( (numOfLocations) => ([...numOfLocations , numOfLocations + 1]) ) ;
    };

    function saveData(name , value ){
        setSavedData((currentData) => ({...currentData , [name] : value})) ;
    } ;
    function saveLocationData(value , index ){
        setSavedData((currentData)=> {
            currentData.location[index - 1] = value ;
            return {...currentData};
            }) 
    };
function submitForm(){
console.log(savedData);
}

    return (
<div  className={styles["container-div"]}>
<CustomForm generalEdit={true} setGeneralSave={submitForm}>
<CustomInputElement name={"activity title"} generalEdit={true} text={''} type="text" saveData = {saveData}/>
<AccessibilitySelect name={"accessibility"} saveData = {saveData} groups = {groups} />
<CustomSelectElement name={"type"} generalEdit={true} text={'sport'} saveData = {saveData} />
<CustomDateElement name={"date"} generalEdit={true} text={{from:""}} saveData = {saveData} />
{ numOfLocations.map( (location) => <CustomLocationElement key={location} name={`location-${location}`} generalEdit={true} text={{location : "" , coutry : ""}} saveData = {saveLocationData}/>)  }
<div className={styles["plus-btn-div"]}>
    <CustomButton text={< AiOutlinePlusCircle  className={styles["plus-btn"]} />} type="button" onclick={incrementLocations} />
</div>
<CustomTextAreaElement name={"activity description"} generalEdit={true} text={''} saveData = {saveData} />
</CustomForm>
</div>
    )
}