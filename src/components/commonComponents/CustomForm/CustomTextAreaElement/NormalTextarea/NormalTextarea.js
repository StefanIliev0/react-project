import styles from "./normalTextarea.module.css"

export function NormalTextarea( {name , changeHandler , text }){
    return (
        <>
        <label  className={styles["label-newLine"]}>{`${name[0].toUpperCase()}${name.substring(1)} :`}</label>
        <textarea
             className={styles["textarea"]} 
             name= {name} 
             type="text" 
             value={text} 
             onChange={changeHandler}></textarea>
        </>
    )
}