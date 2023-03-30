import styles from "./normalDate.module.css"


export function NormalDate( { changeHandler, text, oneDay, changeDays, error}){

    return (
<>  {error !== "" && <p className={styles["error"]}>{error}</p>}
        <label  className={styles["label"]}>From :</label>
        <input
            className={styles["input-long"]} 
            name="from" 
            type="date" 
            value={text.from} 
            onChange={changeHandler}
         />
         {!oneDay && (<>
          <label  className={styles["label"]}>To :</label>
        <input
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
    checked= {oneDay} 
    onChange={changeDays}/>
    </div>
    </>
    )
}