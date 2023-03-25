import styles from "./btnsSubmitAndReject.module.css";

import {AiOutlineCheck , AiOutlineClose } from "react-icons/ai"
import { CustomButton } from "../CustomButton/CustomButton" 


export function  BtnsSubmitAndReject({submit, reject}){

    return (
        <div  className={styles["btn-div"]}>
        <CustomButton type = "submit" text={<AiOutlineCheck className={styles["icon"]} onclick ={submit}/> }   /> 
        <CustomButton text={<AiOutlineClose className={styles["icon"]}/>} onclick={reject} />
    </div>
    )
}