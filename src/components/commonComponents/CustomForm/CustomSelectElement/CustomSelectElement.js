import { useState  } from "react";
import styles from "./customSelectElement.module.css";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalSelect } from "./NormalSelect/NormalSelect";

export function CustomSelectElement({text , name ,generalEdit , saveData, addCauntSave , save}) {
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState(text);

    if(save){
        saveData(name , currentText); 
        addCauntSave()
    }

    function formSubmit(e){
        e.preventDefault();
        saveData(name , currentText);
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
        {generalEdit ? (<NormalSelect text={currentText} changeHandler={handleChange} name={name} />): 
        (
            <>
            { edit ? (
    <form action="submit" onSubmit={formSubmit} className={styles["form"]}>
            <NormalSelect text={currentText} changeHandler={handleChange} name={name} />    
            <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-text-div"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3"]} >{`${name[0].toUpperCase()}${name.substring(1)} : ${currentText[0].toUpperCase()}${currentText.substring(1)}`}</h3>
  {hover && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>)
}
            </>
        )}

    </div>
    )
};