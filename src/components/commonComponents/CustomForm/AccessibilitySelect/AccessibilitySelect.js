import styles from "./accessibilitySelect.module.css"
import { useState } from "react"

export function AccessibilitySelect( {groups , saveData }){
    const [currentText , setCurrentText] = useState("all");

    function handleChange(e){
        e.preventDefault();
        setCurrentText(e.target.value);
    };

    return (
        <div className={styles["input-container"]} >
        <label htmlFor="accessibility" className={styles["label"]}>{`Available for :`}</label>
             <select id="accessibility" name={"accessibility"} value={currentText} onChange={handleChange} className={styles["select"]}>
                     <option value="all" >All</option>
                     {
                        groups.map( (group) => <option key={group._id} value={group._id}>{group.name}</option>)
                     }

                 </select>
        </div>
    )
}