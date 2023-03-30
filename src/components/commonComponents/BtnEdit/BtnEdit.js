import styles from "./btnEdit.module.css";
import { CustomButton } from "../CustomButton/CustomButton";


import { AiOutlineEdit} from "react-icons/ai"


export function BtnEdit({onclick}) {
    return (
        <div className={styles["edit-div"]}>
  <CustomButton text={<AiOutlineEdit className={styles["icon"]}/>} onclick = {onclick} type= "button"/>
    </div>
    )
}