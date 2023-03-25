import styles from "./customForm.module.css";
import { AiOutlineDelete } from "react-icons/ai"
import { CustomButton } from "../CustomButton/CustomButton";

import { BtnsSubmitAndReject } from "../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { BtnEdit } from "../BtnEdit/BtnEdit";







export function CustomForm({ children, generalEdit, setGeneralEdit, setGeneralSave, reject }) {
    function askForDelete(e) {
        e.preventDefault();
        if (window.confirm('Delete this activity ?')) {
            deleteActivity("id");
        }
    }
    function deleteActivity() {
        ///delete item 
    }
    function saveAllData(e) {
        e.preventDefault();
        setGeneralSave();
        setGeneralEdit(false);
    }

    return (
        <>
            {generalEdit ? (
                <form onSubmit={saveAllData}>
                    <div className={styles["edit-div"]}>
                        <BtnsSubmitAndReject reject={reject} />
                    </div>
                    {children}
                </form>
            ) : (<>
                <div className={styles["edit-div"]}>
                    <CustomButton text={<AiOutlineDelete className={styles["icon"]} />} onclick={askForDelete} />
                </div>
                <BtnEdit onclick={() => setGeneralEdit(true)} />
                {children}
            </>
            )}
        </>)
}
