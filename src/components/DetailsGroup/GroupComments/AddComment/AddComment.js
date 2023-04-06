import { useState } from "react";
import styles from "./addComment.module.css";

import { CustomButton } from "../../../commonComponents/CustomButton/CustomButton";


export function AddComment() {
    const [currentText , setCurrentText] = useState('');

    function addNewComment(){

    }
    function hanleChange (e){
        setCurrentText(e.target.value);
    }

    return (
        <form className={styles["form"]} onSubmit={addNewComment}>
            <label className={styles["label"]} htmlFor="comment">Add your comment <CustomButton type={"submit"} text={"Add"} /></label>
            <textarea className={styles["textarea"]} name="comment" id="comment" value={currentText} onChange={hanleChange}></textarea>
            
        </form>
    )
}