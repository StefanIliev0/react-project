import styles from "./normalInput.module.css"

export function NormalInput( {name , changeHandler , text ,type}){
    return (
<>
    <label htmlFor={name} className={styles["label"]}>{`${name[0].toUpperCase()}${name.substring(1)} :`}</label>
        <input
             id={name}
             className={styles["input"]} 
             name= {name} 
             type={type} 
             value={text} 
             onChange={changeHandler} />
        </>
    )
}