import { useState ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./createGroup.module.css";

import { AuthContext } from "../../contexts/authContext";
import { formContext } from "../../contexts/formContext";

import {  CustomForm } from '../commonComponents/CustomForm/CustomForm';
import {CustomInputElement} from "../commonComponents/CustomForm/CustomInputElement/CustomInputElement";
import {CustomLocationElement} from "../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement";
import {CustomSelectElement} from "../commonComponents/CustomForm/CustomSelectElement/CustomSelectElement";
import {CustomTextAreaElement} from "../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement";
import { createNewGroup } from "../../services/groupService";


export function CreateGroup() {
    const { user ,addNewGroup} = useContext(AuthContext);
    const [savedData, setSavedData] = useState({
        "group name": "",
        "preferent type": "",
        location: [{ location: "", country: "" }],
        "group description": "" , 
    });
    const [err, setErr] = useState(new Set());
    const navigate = useNavigate();


    function saveData(name, value, err) {
        err ? setErr((err) => err.add(name)) : (
            setErr((err) => {
                err.delete(name);
                return err;
            }));
        setSavedData((currentData) => ({ ...currentData, [name]: value }));
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
    };
    async function submitForm() {
        try{
        const newGroup = await createNewGroup(savedData, user._id , user.imgUrl , user.nickname );
        addNewGroup(newGroup); 
        navigate("/groups");
    }catch(err){
        console.log(err.message) ; 
    }
    }

    return (
<div  className={styles["container-div"]}>
    <formContext.Provider value={{ generalEdit: true, saveData, saveLocationData, submitForm, savedData, err }}>
<CustomForm  >
<CustomInputElement name={"group name"} type="text"/>
<CustomSelectElement name={"preferent type"} />
<CustomLocationElement name={"location-0"} />
<CustomTextAreaElement name={"group description"} />
</CustomForm>
</formContext.Provider>
</div>
    )
}