import styles from "./normalLocationInput.module.css"
import { useState } from "react"

export function NormalLocationInput ( {changeHandler, text, name , error }){
    const [showError , setShowError] = useState(false)
    return (
        <>
                 {(error && showError)  &&  (<div className={styles["err-div"]}>
                <p className={styles["err-p"]} >
                    {error}
                </p>
            </div>)}
        <label htmlFor={`${name}_location`} className={styles["label"]}>{`Location :`}</label>
                <input onBlur={() => setShowError(true)} onFocus={() => setShowError(false)}
                id={`${name}_location`}
                     className={styles["input-long"]} 
                     name= "location"
                     type="text" 
                     value={text.location} 
                     onChange={ changeHandler} />
        <label htmlFor={`${name}_conutry`} className={styles["label"]}>{`Country :`}</label>
                <input onBlur={() => setShowError(true)} onFocus={() => setShowError(false)}
                id={`${name}_conutry`}
                     className={styles["input-long"]} 
                     name= "country" 
                     type="text" 
                     value={text.country} 
                     onChange={changeHandler} />
        </>
    )
}