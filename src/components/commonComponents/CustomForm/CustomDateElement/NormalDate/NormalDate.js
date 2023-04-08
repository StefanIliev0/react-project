import styles from "./normalDate.module.css"
import { useState } from "react"


export function NormalDate({ changeHandler, text, oneDay, changeDays, error }) {
    const [showError , setShowError] = useState(false); 
    return (
        <>
            {(error && showError) && (<div className={styles["err-div"]}>
                <p className={styles["err-p"]} >
                    {error}
                </p>
            </div>)}
            <label className={styles["label"]}>From :</label>
            <input onBlur={() => setShowError(true)} onFocus={() => setShowError(false)}
                className={styles["input-long"]}
                name="from"
                type="date"
                value={text.from}
                onChange={changeHandler}
            />
            {!oneDay && (<>
                <label className={styles["label"]}>To :</label>
                <input onBlur={() => setShowError(true)} onFocus={() => setShowError(false)}
                    className={styles["input-long"]}
                    name="to"
                    type="date"
                    value={text.to}
                    onChange={changeHandler}
                />
            </>)}
            <div className={styles["check-div"]}>
                <label htmlFor="checkbox">One day activity</label>
                <input
                    className={styles["checkbox"]}
                    type="checkbox"
                    id="checkbox"
                    checked={oneDay}
                    onChange={changeDays} />
            </div>
        </>
    )
}