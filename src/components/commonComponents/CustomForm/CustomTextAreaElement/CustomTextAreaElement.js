/* eslint-disable */
import { useState, useContext, useEffect } from "react";
import styles from "./customTextAreaElement.module.css";

import { formContext } from "../../../../contexts/formContext";


import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalTextarea } from "./NormalTextarea/NormalTextarea";
import { checkInput } from "../../../../utils/checkInputs";

export function CustomTextAreaElement({name}) {
    const {saveData , generalEdit , savedData , isOwner } = useContext(formContext)
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState({ text : savedData[name] , error : "" });
    useEffect(()=>{
        if(!generalEdit){
        setCurrentText({ text : savedData[name] , error : "" })}
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
            saveData(name , currentText.text , currentText.error );
        }else{
        if(!currentText.error){
        saveData(name , currentText.text);
        if(setEdit){
        setEdit(false) ;
    }}}}
    function handleChange(e){
        e.preventDefault();
        setCurrentText({text: e.target.value , error :checkInput[name](e.target.value) });
     };
    function undo(e){
        e.preventDefault();
        setCurrentText({text: savedData[name] , error : ""});
        setEdit(false) ; 
    };
    return (
    <div className={styles["input-container-area"]} >
        {generalEdit ?(<NormalTextarea changeHandler={handleChange} name={name} text={currentText.text} error = {currentText.error}/>) : (
        <>
        { (edit && isOwner)? (
    <form action="submit" onSubmit={onSubmit} className={styles["form-area"]}>
            <NormalTextarea changeHandler={handleChange} name={name} text={currentText.text} error = {currentText.error} />
          <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-textarea-div"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3-textarea"]} >{`${name[0].toUpperCase()}${name.substring(1)} :`}</h3>
  <p className={styles["textarea"]}>{currentText.text}</p>
  {(hover && isOwner) && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>)
}
        </>)}
    </div>
    )
};