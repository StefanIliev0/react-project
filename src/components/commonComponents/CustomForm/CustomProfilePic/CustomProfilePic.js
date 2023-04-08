/* eslint-disable */
import { useState ,useContext, useEffect} from "react";
import styles from "./customProfilePic.module.css";
import {CgProfile} from "react-icons/cg";

import { formContext } from "../../../../contexts/formContext";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalInput } from "../CustomInputElement/NormalInput/NormalInput"; 
import { checkInput } from "../../../../utils/checkInputs";



export function CustomProfilePic({name}) {
    const {saveData , generalEdit , savedData , isOwner} = useContext(formContext)
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
    <div className={styles["input-container"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
    <div className={styles["img-container"]}>
    {savedData[name] ? <img src={savedData[name]} alt="profile" className={styles.icon}/>  : <CgProfile className={styles.icon}/>}
    </div>
    {generalEdit ? (<>
         <NormalInput text={currentText.text}  changeHandler={handleChange} name={name} type={"url"} error={currentText.error}/>
         </>) :(<>
    {  ( edit ) ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form"]}>
     <NormalInput text={currentText.text} changeHandler={handleChange} name={name} type={"url"} error={currentText.error}/>
     <BtnsSubmitAndReject  reject={undo} />
    </form>
  )  :
  ( <>
    {(hover && isOwner) && (<BtnEdit onclick={(e) => setEdit(true)}/> )}
    </>
  )
} </>
         )
     }


    </div>
    )
};