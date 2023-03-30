import { useState} from "react";
import styles from "./customLocationElement.module.css";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalLocationInput } from "./NormalLocationInput/NormalLocationInput";


export function CustomLocationElement({text, name, generalEdit, saveData}) {
    const [hover , setHover] = useState(false);
    const [edit , setEdit] = useState(false);
    const [currentText , setCurrentText] = useState(text);

    const index = Number(name.split(`-`)[1]);

    const onSubmit = (e) => {
        saveData( currentText , index);
        setEdit(false) ; 
     }


    function handleChange(e){
        const locationTitle = e.target.name ;
        const locationValue = e.target.value ;
        setCurrentText( (currentText) => ({...currentText ,  [locationTitle] : locationValue}));
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
{generalEdit ? (<NormalLocationInput changeHandler={handleChange} text={currentText} name= {name}/>) : (
<>
{ edit ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form-long"]}>
    <NormalLocationInput changeHandler={handleChange} text={currentText} name= {name}/>  
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