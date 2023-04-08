/* eslint-disable */
import { useState ,useContext ,useEffect} from "react";
import styles from "./customDateElement.module.css";


import { formContext } from "../../../../contexts/formContext";

import { checkInput } from "../../../../utils/checkInputs";

import { BtnEdit } from "../../BtnEdit/BtnEdit";
import { BtnsSubmitAndReject } from "../../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { NormalDate } from "./NormalDate/NormalDate";




export function CustomDateElement({name}) {
    const {saveData , generalEdit , savedData , isOwner} = useContext(formContext)
    const [hover, setHover] = useState(false);
    const [edit, setEdit] = useState(false);
    const [currentText , setCurrentText] = useState({ text : savedData[name] , error : "" });
    const [oneDayAct, setOneDayAct] = useState(true);
    useEffect(()=>{
        if(!generalEdit){
        setCurrentText({ text : savedData[name] , error : "" })}
    }, [savedData])
    useEffect(() => {
        onEditSubmit();

    }
    , [currentText]);

    function onEditSubmit(){
        if(generalEdit){
        onSubmit();}
    }
    

    const onSubmit = (e) => {
        if(e){
            e.preventDefault(e) ;}
        if(generalEdit) {
        saveData(name , currentText.text , currentText.error);
        }else{
        if(!currentText.error){
        saveData(name , currentText.text);
        if(setEdit){
        setEdit(false) ;
    }}}}
 
    function handleChange(e){
        const dateTitle = e.target.name ;
        const dateValue = e.target.value ;
        setCurrentText( (currentText) =>  ( {text :{...currentText.text ,  [dateTitle] : dateValue} , error :checkInput[name](e.target.value)}));
    };
    function undo(e){
        e.preventDefault();
        setCurrentText({text : savedData[name] , error : ""});
        setEdit(false) ; 
    };
    return (
    <div className={styles["input-container-long"]} >
    {generalEdit ?(
    <NormalDate 
    text={currentText.text} 
    changeHandler={handleChange} 
    oneDay={oneDayAct} 
    changeDays={ () => setOneDayAct(!oneDayAct)}
    error={currentText.error}/>
) : 
    (<>
    { (edit && isOwner) ? (
    <form action="submit" onSubmit={onSubmit} className={styles["form-long"]}>

    <NormalDate 
    text={currentText.text} 
    changeHandler={handleChange} 
    oneDay={oneDayAct} 
    changeDays={() => setOneDayAct(!oneDayAct)}
    error={currentText.error}/>

    <BtnsSubmitAndReject reject={undo} />
    </form>
  )  :
  ( <div className={styles["input-div-long"]} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
  <h3 className={styles["h3"]} >{`Planned date${currentText?.text?.to ?"s" : ""}. From: ${new Date(currentText?.text?.from).toDateString()}` + (currentText?.text?.to ? ` To: ${new Date(currentText.text.to).toDateString()}` : ``)}</h3>
 {(hover && isOwner) && (<BtnEdit onclick={(e) => setEdit(true)} />)}
    </div>)
}
    </>)}

    </div>
    )
};