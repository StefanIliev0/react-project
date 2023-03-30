import { useState } from "react";
import styles from "./customProfilePic.module.css";
import {CgProfile} from "react-icons/cg";


import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalInput } from "../CustomInputElement/NormalInput/NormalInput"; 



export function CustomProfilePic({ text, generalEdit, saveData, setSave}) {
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState(text);

    const onSubmit = (e) => {
        saveData("imgUrl" , currentText);
        setEdit(false) ; 
     }

    
    function handleChange(e){
        e.preventDefault();
        setCurrentText(e.target.value);
        if(generalEdit){
            onSubmit()
        }
    };
    function undo(e){
        e.preventDefault();
        setCurrentText(text);
        setEdit(false) ; 
    };
    return (
    <div className={styles["input-container"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
    <div className={styles["img-container"]}>
    {text ? <img src={text} alt="profile" className={styles.icon}/>  : <CgProfile className={styles.icon}/>}
    </div>
    {generalEdit ? (<>
         <NormalInput text={currentText}  changeHandler={handleChange} name={"profile image"} type={"url"}/>
         </>) :(<>
    {  ( edit ) ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form"]}>
     <NormalInput text={currentText} changeHandler={handleChange} name={"profile image"} type={"url"} />
     <BtnsSubmitAndReject  reject={undo} />
    </form>
  )  :
  ( <>
    {hover && (<BtnEdit onclick={(e) => setEdit(true)}/> )}
    </>
  )
} </>
         )
     }


    </div>
    )
};