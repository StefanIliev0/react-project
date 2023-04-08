import { useState } from "react";
import styles from "./addComment.module.css";

import { CustomButton } from "../../../commonComponents/CustomButton/CustomButton";


export function AddComment({addNew}) {
    const [currentText , setCurrentText] = useState('');

   async function addNewComment(e){
        e.preventDefault(); 
      await  addNew(currentText);
      setCurrentText("")
    }
    function hanleChange (e){
        setCurrentText(e.target.value);
    }

    return (
        <form className={styles["form"]} onSubmit={addNewComment}>
            <label className={styles["label"]} htmlFor="comment">Add your comment <CustomButton type={"submit"} text={"Post"} /></label>
            <textarea className={styles["textarea"]} name="comment" id="comment" value={currentText} onChange={hanleChange}></textarea>
            
        </form>
    )
}