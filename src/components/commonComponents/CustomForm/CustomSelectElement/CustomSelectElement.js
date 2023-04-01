/* eslint-disable */
import { useState,useContext, useEffect  } from "react";
import styles from "./customSelectElement.module.css";

import { formContext } from "../../../../contexts/formContext";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalSelect } from "./NormalSelect/NormalSelect";
import { checkInput } from "../../../../utils/checkInputs";

export function CustomSelectElement({ name}) {
    const {saveData , generalEdit , savedData , isOwner} = useContext(formContext)
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState({ text : savedData[name] , error : "" });
    useEffect(()=>{
        setCurrentText({ text : savedData[name] , error : "" })
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
    <div className={styles["input-container"]} >
        {generalEdit ? (<NormalSelect text={currentText.text} changeHandler={handleChange} name={name} error={currentText.error} />): 
        (
            <>
            { (edit && isOwner) ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form"]}>
            <NormalSelect text={currentText.text} changeHandler={handleChange} name={name} error={currentText.error} />    
            <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-text-div"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3"]} >{`${name[0].toUpperCase()}${name.substring(1)} : ${currentText.text[0].toUpperCase()}${currentText.text.substring(1)}`}</h3>
  {(hover && isOwner) && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>)
}
            </>
        )}

    </div>
    )
};