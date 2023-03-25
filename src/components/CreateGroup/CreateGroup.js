import { useState } from "react";
import styles from "./createGroup.module.css";


import {  CustomForm } from '../commonComponents/CustomForm/CustomForm';
import {CustomInputElement} from "../commonComponents/CustomForm/CustomInputElement/CustomInputElement";
import {CustomLocationElement} from "../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement";
import {CustomSelectElement} from "../commonComponents/CustomForm/CustomSelectElement/CustomSelectElement";
import {CustomTextAreaElement} from "../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement";


export function CreateGroup() {
    const [savedData , setSavedData] = useState({});

    function saveData(name , value ){
        setSavedData((currentData) => ({...currentData , [name] : value}))
    } 

    return (
<div  className={styles["container-div"]}>
<CustomForm generalEdit={true} >
<CustomInputElement name={"name"} generalEdit={true} text={''} saveData = {saveData}/>
<CustomSelectElement name={"preferent type"} generalEdit={true} text={''} saveData = {saveData}/>
<CustomLocationElement name={"location"} generalEdit={true} text={{}} saveData = {saveData}/>
<CustomTextAreaElement name={"description"} generalEdit={true} text={''} saveData = {saveData}/>
</CustomForm>
</div>
    )
}