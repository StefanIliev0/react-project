import styles from "./normalLocationInput.module.css"

export function NormalLocationInput ( {changeHandler, text, name }){
    return (
        <>
        <label htmlFor={`${name}_location`} className={styles["label"]}>{`Location :`}</label>
                <input
                id={`${name}_location`}
                     className={styles["input-long"]} 
                     name= "location"
                     type="text" 
                     value={text.location} 
                     onChange={ changeHandler} />
        <label htmlFor={`${name}_conutry`} className={styles["label"]}>{`Country :`}</label>
                <input
                id={`${name}_conutry`}
                     className={styles["input-long"]} 
                     name= "country" 
                     type="text" 
                     value={text.country} 
                     onChange={changeHandler} />
        </>
    )
}