import { useState  } from "react";
import styles from "./customLocationElement.module.css";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalLocationInput } from "./NormalLocationInput/NormalLocationInput";


export function CustomLocationElement({text , name ,generalEdit , saveData, addCauntSave , save}) {
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState(text);

    const index = Number(name.split(`-`)[1]);

    if(save){
        saveData(name , currentText); 
        addCauntSave()
    }

    function formSubmit(e){
        e.preventDefault();
        saveData( currentText , index);
        setEdit(false) ; 
        // return datas !!!!!!!!!
    }
    function handleChange(e){
        e.preventDefault();
        const locationTitle = e.target.name ;
        const locationValue = e.target.value ;
        setCurrentText( (currentText) => ({...currentText ,  [locationTitle] : locationValue}));
    };
    function undo(e){
        e.preventDefault();
        setCurrentText(text);
        setEdit(false) ; 
    };
    return (
    <div className={styles["input-container-long"]} >
{generalEdit ? (<NormalLocationInput changeHandler={handleChange} text={currentText}/>) : (
<>
{ edit ? (
    <form action="submit" onSubmit={formSubmit} className={styles["form-long"]}>
    <NormalLocationInput changeHandler={handleChange} text={currentText}/>  
          <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-text-div"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3"]} >{`${name[0].toUpperCase()}${name.substring(1)} : ${currentText.location} , ${currentText.country}`}</h3>
  {hover && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>) }
</>)}

    </div>
    )
};