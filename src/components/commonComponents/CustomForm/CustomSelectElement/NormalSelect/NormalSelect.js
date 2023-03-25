import styles from "./normalSelect.module.css"

export function NormalSelect( {name , changeHandler , text }){
    return (
        <>
        <label  className={styles["label"]}>{`${name[0].toUpperCase()}${name.substring(1)} :`}</label>
             <select name={name} value={text} onChange={changeHandler} className={styles["select"]}>
                     <option value="sport" {...text === "sport" && "selected"}>Sport</option>
                     <option value="relax" {...text === "relax" && "selected"}>Relax</option>
                     <option value="holiday" {...text === "holiday" && "selected"}>Holiday</option>
                     <option value="meeting" {...text === "meeting" && "selected"}>Meeting</option>
                     <option value="party" {...text === "party" && "selected"}>Party</option>
                     <option value="trip" {...text === "trip" && "selected"}>Trip</option>
                 </select>
                 </>
    )
}