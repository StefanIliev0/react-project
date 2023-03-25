import { useState  } from "react";
import styles from "./customTextAreaElement.module.css";


import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalTextarea } from "./NormalTextarea/NormalTextarea";

export function CustomTextAreaElement({text , name , generalEdit, saveData , addCauntSave , save}) {
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
    <div className={styles["input-container-area"]} >
        {generalEdit ?(<NormalTextarea changeHandler={handleChange} name={name} text={currentText}/>) : (
        <>
        { edit ? (
    <form action="submit" onSubmit={formSubmit} className={styles["form-area"]}>
            <NormalTextarea changeHandler={handleChange} name={name} text={currentText}/>
          <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-textarea-div"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3-textarea"]} >{`${name[0].toUpperCase()}${name.substring(1)} :`}</h3>
  <p className={styles["textarea"]}>{currentText}</p>
  {hover && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>)
}
        </>)}
    </div>
    )
};