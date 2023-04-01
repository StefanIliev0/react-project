import styles from "./normalInput.module.css"
import { useState } from "react"

export function NormalInput({ name, changeHandler, text, type, error }) {
    const [showError , setShowError] = useState(false)


    return (
        <>
         {(error && showError)  &&  (<div className={styles["err-div"]}>
                <p className={styles["err-p"]} >
                    {error}
                </p>
            </div>)}
            <label htmlFor={name} className={styles["label"]}>{`${name[0].toUpperCase()}${name.substring(1)} :`}</label>

            <input onBlur={() => setShowError(true)} onFocus={() => setShowError(false)}
                id={name}
                className={styles["input"]}
                name={name}
                type={type}
                value={text}
                onChange={changeHandler} />
        </>
    )
}