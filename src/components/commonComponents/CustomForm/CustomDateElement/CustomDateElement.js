import { useState } from "react";
import styles from "./customDateElement.module.css";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalDate } from "./NormalDate/NormalDate";



export function CustomDateElement({text, name, generalEdit, saveData}) {
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);
    const [currentText, setCurrentText] = useState(text);
    const [oneDayAct, setOneDayAct] = useState(true);
    const [error , setError] = useState("");

    const onSubmit =(e) => {
        if(e){
            e.preventDefault();
        }
        if(oneDayAct){
            setCurrentText((currentText) => ({from : currentText.from}))
        }
        saveData(name , currentText);
        setEdit(false) ; 
    }
 
    function handleChange(e){
        const dateTitle = e.target.name ;
        const dateValue = e.target.value ;
        setCurrentText( (currentText) => ({...currentText ,  [dateTitle] : dateValue}));

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
    <div className={styles["input-container-long"]} >
    {generalEdit ?(
    <NormalDate 
    text={currentText} 
    changeHandler={handleChange} 
    oneDay={oneDayAct} 
    changeDays={ () => setOneDayAct(!oneDayAct)}
    error={error}/>
) : 
    (<>
    { edit ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form-long"]}>

    <NormalDate 
    text={currentText} 
    changeHandler={handleChange} 
    oneDay={oneDayAct} 
    changeDays={() => setOneDayAct(!oneDayAct)}/>

    <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-div-long"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3"]} >{`Planned date${currentText.to ?"s" : ""}. From: ${new Date(currentText.from).toDateString()}` + (currentText.to ? ` To: ${new Date(currentText.to).toDateString()}` : ``)}</h3>
 {hover && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>)
}
    </>)}

    </div>
    )
};