import { useState  } from "react";
import styles from "./customInputElement.module.css";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalInput } from "./NormalInput/NormalInput";


export function CustomInputElement({type,  text , name , generalEdit , saveData , addCauntSave , save}) {
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState(text);

    if(save){
        saveData(name , currentText); 
        addCauntSave()
    }

    function formSubmit(e){
        saveData(name , currentText)
        setEdit(false) ; 
        // return datas !!!!!!!!!
    }
    function handleChange(e){
        e.preventDefault();
        setCurrentText(e.target.value);
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
    <form action="submit" onSubmit={formSubmit} className={styles["form"]}>
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