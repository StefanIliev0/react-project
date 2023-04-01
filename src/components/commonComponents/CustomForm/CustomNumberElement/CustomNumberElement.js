import { useContext } from "react";
import styles from "./customNumberElement.module.css";
import { formContext } from "../../../../contexts/formContext";


export function CustomNumberElement({name}) {
  const {savedData} = useContext(formContext) ;
    return (
       <div className={styles["input-container"]} >
   <div className={styles["input-text-div"]}>
     <h3 className={styles["h3"]} >{`${name[0].toUpperCase()}${name.substring(1)} : ${savedData[name]}`}</h3>
   </div>
   </div>
       )
   };