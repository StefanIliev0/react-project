import { useState, useContext } from "react";
import styles from "./customTextAreaElement.module.css";

import { formContext } from "../../../../contexts/formContext";


import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalTextarea } from "./NormalTextarea/NormalTextarea";
import { checkInput } from "../../../../utils/checkInputs";

export function CustomTextAreaElement({name}) {
    const {saveData , generalEdit , savedData} = useContext(formContext)
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState({ text : savedData[name] , error : "" });
    
    const onSubmit = (e) => {
        e.preventDefault(e) ;
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
        if(generalEdit){
            onSubmit(e) ;
        }};
    function undo(e){
        e.preventDefault();
        setCurrentText({text: savedData[name] , error : ""});
        setEdit(false) ; 
    };
    return (
    <div className={styles["input-container-area"]} >
        {generalEdit ?(<NormalTextarea changeHandler={handleChange} name={name} text={currentText.text} error = {currentText.error}/>) : (
        <>
        { edit ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form-area"]}>
            <NormalTextarea changeHandler={handleChange} name={name} text={currentText.text} error = {currentText.error} />
          <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-textarea-div"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3-textarea"]} >{`${name[0].toUpperCase()}${name.substring(1)} :`}</h3>
  <p className={styles["textarea"]}>{currentText.text}</p>
  {hover && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>)
}
        </>)}
    </div>
    )
};