/* eslint-disable */
import { useState, useContext , useEffect} from "react";
import styles from "./customLocationElement.module.css";

import { formContext } from "../../../../contexts/formContext";


import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalLocationInput } from "./NormalLocationInput/NormalLocationInput";
import { checkInput } from "../../../../utils/checkInputs";


export function CustomLocationElement({name}) {
    const {saveLocationData, generalEdit, savedData , isOwner} = useContext(formContext)
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const index = Number(name.split(`-`)[1]);
    const [currentText , setCurrentText] = useState({ text :  savedData.location[index] , error : "" }); 
    useEffect(()=>{
        if(!generalEdit){
        setCurrentText({ text : savedData.location[index] , error : "" })}
    }, [savedData])
       useEffect(() => {
        onEditSubmit();}
    , [currentText]);

    function onEditSubmit(){
        if(generalEdit){
        onSubmit();}
    }
    
   
    const onSubmit = (e) => {
        if(e){
            e.preventDefault(e) ;}
        if(generalEdit){
        saveLocationData( currentText.text , index , name , currentText.error);
        } else{
        if(!currentText.error){
        saveLocationData( currentText.text , index , name);
        if(setEdit){
        setEdit(false) ;}}
     }
    }

    function handleChange(e){
        const locationTitle = e.target.name ;
        const locationValue = e.target.value ;
        setCurrentText( (currentText) => ({text : {...currentText.text ,  [locationTitle] : locationValue} , error :checkInput[name.split("-")[0]]( e.target.value)}));
    };
    function undo(e){
        e.preventDefault();
        setCurrentText({text: savedData.location[index] , error : ""}); 
        setEdit(false) ; 
    };
    return (
    <div className={styles["input-container-long"]} >
{generalEdit ? (<NormalLocationInput changeHandler={handleChange} text={currentText.text} name= {name} error = {currentText.error}/>) : (
<>
{ (edit && isOwner) ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form-long"]}>
    <NormalLocationInput changeHandler={handleChange} text={currentText.text} name={name} error = {currentText.error}/>  
          <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-text-div"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3"]} >Start location : {`${currentText.text.location} , ${currentText.text.country}`}</h3>
  {(hover && isOwner) && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>) }
</>)}

    </div>
    )
};