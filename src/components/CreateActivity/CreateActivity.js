import { useState } from "react";
import styles from "./createActivity.module.css";


import {  CustomForm } from '../commonComponents/CustomForm/CustomForm';
import {CustomInputElement} from "../commonComponents/CustomForm/CustomInputElement/CustomInputElement";
import {CustomLocationElement} from "../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement";
import {CustomSelectElement} from "../commonComponents/CustomForm/CustomSelectElement/CustomSelectElement";
import {CustomTextAreaElement} from "../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement";
import { CustomDateElement } from "../commonComponents/CustomForm/CustomDateElement/CustomDateElement";
import { AccessibilitySelect } from "../commonComponents/CustomForm/AccessibilitySelect/AccessibilitySelect";

export function CreateAcivity() {
    const [savedData , setSavedData] = useState({});

    const groups = [
        {_id : "13" , name : "gosho" } ,
        {_id : "14" , name : "misho" } ,
        {_id : "15" , name : "pesho" } ,
        {_id : "16" , name : "gasho" } ,
        {_id : "17" , name : "goshko" } ,
    ];

    function saveData(name , value ){
        setSavedData((currentData) => ({...currentData , [name] : value}))
    } 

    return (
<div  className={styles["container-div"]}>
<CustomForm generalEdit={true} >
<CustomInputElement name={"title"} generalEdit={true} text={''} saveData = {saveData}/>
<AccessibilitySelect saveData = {saveData} groups = {groups} />
<CustomSelectElement name={"type"} generalEdit={true} text={''} saveData = {saveData}/>
<CustomDateElement name={"date"} generalEdit={true} text={{from:""}} saveData = {saveData}/>
<CustomLocationElement name={"location"} generalEdit={true} text={{}} saveData = {saveData}/>
<CustomTextAreaElement name={"description"} generalEdit={true} text={''} saveData = {saveData}/>
</CustomForm>
</div>
    )
}