import styles from "./customForm.module.css";
import { useContext } from "react";

import { AiOutlineDelete } from "react-icons/ai"
import { CustomButton } from "../CustomButton/CustomButton";

import { BtnsSubmitAndReject } from "../BtnsSubmitAndReject/BtnsSubmitAndReject";
import { BtnEdit } from "../BtnEdit/BtnEdit";
import { formContext } from "../../../contexts/formContext";







export function CustomForm({ children, reject }) {
    const { generalEdit, submitForm, setGeneralEdit, err } = useContext(formContext);
    function askForDelete(e) {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this item??')) {
            deleteItem("id");
        }
    }
    function deleteItem() {
        ///delete item 
    }
    function saveAllData(e) {
        e.preventDefault();
        if (err.size() === 0) {
            submitForm();
        }
        if (setGeneralEdit) {
            setGeneralEdit(false);
        }
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
