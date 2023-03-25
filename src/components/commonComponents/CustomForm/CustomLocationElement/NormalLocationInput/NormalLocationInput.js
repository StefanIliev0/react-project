import styles from "./normalLocationInput.module.css"

export function NormalLocationInput ( {changeHandler , text }){
    return (
        <>
        <label  className={styles["label"]}>{`Location :`}</label>
                <input
                     className={styles["input-long"]} 
                     name= "location"
                     type="text" 
                     value={text.location} 
                     onChange={changeHandler} />
        <label  className={styles["label"]}>{`Country :`}</label>
                <input
                     className={styles["input-long"]} 
                     name= "country" 
                     type="text" 
                     value={text.country} 
                     onChange={changeHandler} />
        </>
    )
}