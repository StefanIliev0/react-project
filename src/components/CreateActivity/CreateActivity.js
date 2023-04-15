import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./createActivity.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { formContext } from "../../contexts/formContext";
import { AuthContext } from "../../contexts/authContext";
import { createNewActivity } from "../../services/activityService";


import { CustomForm } from '../commonComponents/CustomForm/CustomForm';
import { CustomInputElement } from "../commonComponents/CustomForm/CustomInputElement/CustomInputElement";
import { CustomLocationElement } from "../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement";
import { CustomSelectElement } from "../commonComponents/CustomForm/CustomSelectElement/CustomSelectElement";
import { CustomTextAreaElement } from "../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement";
import { CustomDateElement } from "../commonComponents/CustomForm/CustomDateElement/CustomDateElement";
import { AccessibilitySelect } from "../commonComponents/CustomForm/AccessibilitySelect/AccessibilitySelect";
import { CustomButton } from "../commonComponents/CustomButton/CustomButton";

export function CreateAcivity() {
    const { user, addNewActivity } = useContext(AuthContext);
    const [savedData, setSavedData] = useState({
        "activity title": "",
        "accessibility": "all",
        type: "",
        date: { from: "", to: "" },
        location: [{ location: "", country: "" , aproved : true}],
        "activity description": "" , 
    });
    const [err, setErr] = useState(new Set());
    const [errors , setErrors ] = useState([]); 
    const groups = user.groups;
    const navigate = useNavigate();

    function incrementLocations() {
        setSavedData((savedData) => {
            savedData.location.push({ location: "", country: "" , aproved : true });
            return { ...savedData };
        });
    };

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
        if(err.size > 0){
        let errors = []
           err.values.forEach(x => errors.push({message : x}))
        throw errors; 
        }
        console.log(savedData); 
        const newActivity = await createNewActivity(savedData, user._id);
        addNewActivity(newActivity);
        navigate("/activities");
    }catch(err){
        console.log(err)
        setErrors([err]); 
    }
    }

    return (
        <div className={styles["container-div"]}>
               {errors.length > 0 && (
                <div className={styles["error-div"]}>
                    {errors.map((err) => <p key={err.message}>{err.message}</p>)}
                </div>
            )}
            <formContext.Provider value={({ generalEdit: true, saveData, saveLocationData, submitForm, savedData, groups, err })}>
                <CustomForm  >
                    <CustomInputElement name={"activity title"} type="text" />
                    <AccessibilitySelect name={"accessibility"} />
                    <CustomSelectElement name={"type"} />
                    <CustomDateElement name={"date"} />
                    {savedData.location.map((location, i) => <CustomLocationElement key={i} name={`location-${i}`} />)}
                    <div className={styles["plus-btn-div"]}>
                        <CustomButton text={< AiOutlinePlusCircle className={styles["plus-btn"]} />} type="button" onclick={incrementLocations} />
                    </div>
                    <CustomTextAreaElement name={"activity description"} />
                </CustomForm>
            </formContext.Provider>
        </div>
    )
}