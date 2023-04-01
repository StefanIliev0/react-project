import styles from "./normalTextarea.module.css"
import { useState } from "react"

export function NormalTextarea( {name , changeHandler , text , error }){
    const [showError , setShowError] = useState(false)
    return (
        <>
                 {(error && showError)  &&  (<div className={styles["err-div"]}>
                <p className={styles["err-p"]} >
                    {error}
                </p>
            </div>)}
        <label  className={styles["label-newLine"]}>{`${name[0].toUpperCase()}${name.substring(1)} :`}</label>
        <textarea onBlur={() => setShowError(true)} onFocus={() => setShowError(false)}
             className={styles["textarea"]} 
             name= {name} 
             type="text" 
             value={text} 
             onChange={changeHandler}></textarea>
        </>
    )
}