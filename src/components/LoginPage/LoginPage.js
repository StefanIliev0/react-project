import styles from "./loginPage.module.css";
import { useState } from "react";
import { CustomButton } from "../commonComponents/CustomButton/CustomButton";


export function LoginPage() {
    const [currentData , setCurrentData] = useState({});

    function formSubmit(e){
            e.preventDefault()
            console.log(currentData)
        // return datas !!!!!!!!!
    }

    function changeHandler(e){
        setCurrentData((currentData) => ({...currentData , [e.target.name] : e.target.value}))
    }
    
    return (
        <div  className={styles["container-div"]}>
            <form onSubmit={formSubmit} className={styles["form"]}>
            <label htmlFor="email"  className={styles["label"]}>{`Email :`}</label>
        <input
             id="email"
             className={styles["input"]} 
             name= "email"
             type="email" 
             value={currentData?.email} 
             onChange={changeHandler} />
    <label htmlFor="password"  className={styles["label"]}>{`Password :`}</label>
        <input
             id="password"
             className={styles["input"]} 
             name= "password" 
             type="password" 
             value={currentData?.password} 
             onChange={changeHandler} />
        <div className={styles["inline-div"]}>
        <CustomButton text={"Login"} type="submit" />
        </div>
            </form>
        </div>
    )
}