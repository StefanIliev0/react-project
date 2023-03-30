import { useState  } from "react";
import styles from "./customInputElement.module.css";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalInput } from "./NormalInput/NormalInput";


export function CustomInputElement({type,  text , name , generalEdit , saveData , setSave}) {
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState(text);
        
    
    const onSubmit = (e) => {
        saveData(name , currentText);
        if(setEdit){
        setEdit(false) ;
     }
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
    <div className={styles["input-container"]} >
{generalEdit ? ( <NormalInput text={currentText} changeHandler={handleChange} name={name}  type = {type}/> ): 
(<>
    { edit ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form"]}>
     <NormalInput text={currentText} changeHandler={handleChange} name={name} type = {type}/>
     <BtnsSubmitAndReject  reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-text-div"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3"]} >{`${name[0].toUpperCase()}${name.substring(1)} : ${currentText}`}</h3>
  {hover && (<BtnEdit onclick={(e) => setEdit(true)}/> )}
    </div>)
}
    </>
)}
    </div>
    )
};