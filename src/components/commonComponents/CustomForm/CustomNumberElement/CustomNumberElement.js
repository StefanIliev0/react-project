
import styles from "./customNumberElement.module.css";


export function CustomNumberElement({name, number}) {
    return (
       <div className={styles["input-container"]} >
   <div className={styles["input-text-div"]}>
     <h3 className={styles["h3"]} >{`${name[0].toUpperCase()}${name.substring(1)} : ${number}`}</h3>
   </div>
   </div>
       )
   };