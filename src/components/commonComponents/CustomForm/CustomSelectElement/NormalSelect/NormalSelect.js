import styles from "./normalSelect.module.css"

export function NormalSelect( {name , changeHandler , text }){
    return (
        <>
        <label htmlFor={name}  className={styles["label"]}>{`${name[0].toUpperCase()}${name.substring(1)} :`}</label>
             <select id={name} name={name} value={text} onChange={changeHandler} className={styles["select"]}>
                     <option value="sport"  >Sport</option>
                     <option value="relax" >Relax</option>
                     <option value="holiday" >Holiday</option>
                     <option value="meeting" >Meeting</option>
                     <option value="party" >Party</option>
                     <option value="trip" >Trip</option>
                     <option value="other" >Other</option>
                 </select>
                 </>
    )
}