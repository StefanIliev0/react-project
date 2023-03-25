import { useState } from 'react';
import styles from "./activityDetail.module.css";

import { CustomForm } from '../../commonComponents/CustomForm/CustomForm';
import { CustomInputElement } from "../../commonComponents/CustomForm/CustomInputElement/CustomInputElement";
import { CustomLocationElement } from "../../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement";
import { CustomDateElement } from "../../commonComponents/CustomForm/CustomDateElement/CustomDateElement";
import { CustomSelectElement } from "../../commonComponents/CustomForm/CustomSelectElement/CustomSelectElement";
import { CustomTextAreaElement } from "../../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement";


const initialData = {
    title: "Holydays",
    type: "relax",
    date: { from: "2023-09-12" },
    location: { location: "Varna", country: "Bulgaria" },
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis tempora optio, voluptates qui facilis ratione repudiandae. Odit quod reprehenderit laudantium eligendi consequatur numquam nesciunt sint illum aut, totam ut doloremque mollitia dolorum necessitatibus. Eum provident dolorem perspiciatis quae sed eligendi facere ducimus odit vitae exercitationem fugit delectus minima id accusantium, maxime cumque obcaecati voluptas vero sit aperiam dolore assumenda. Quasi enim voluptatum pariatur sequi officiis, laborum et assumenda corporis eius animi ad iste totam numquam, voluptate cumque eligendi earum. Cupiditate ducimus, vero quae, nesciunt beatae voluptate excepturi laboriosam laudantium accusantium unde nostrum inventore, ipsam doloremque explicabo blanditiis esse! Dignissimos, quo et nam eum aspernatur sint dolorem at quis vel impedit itaque culpa dolor modi quaerat magnam veniam dicta nisi ullam sunt vero quia fuga beatae! Similique rerum expedita odio corporis doloremque, ipsum velit nihil cumque atque labore, id voluptates eligendi adipisci quidem vero autem aliquam explicabo architecto? Ipsam aliquam quas dolores eligendi aut ad quisquam repudiandae amet natus voluptatum? Culpa, ducimus repellat blanditiis voluptatum temporibus optio pariatur vero, corporis molestiae consequuntur sint ratione, maxime non dicta laborum. Minus quis labore iusto itaque, doloremque accusamus inventore, similique libero provident vel ullam, dolorem quidem! Iusto saepe maxime ab modi rerum dolores voluptate quidem adipisci unde nam molestias velit, accusamus natus quis, ipsum nisi provident eaque. Expedita sapiente nam laboriosam vel, nisi libero ducimus impedit dolorum! Nesciunt voluptatibus saepe aliquam distinctio beatae velit placeat ducimus laborum aspernatur obcaecati id, in vero optio non. Nostrum autem molestias aliquid ipsam amet, dignissimos veniam distinctio maxime accusamus incidunt animi vero expedita ipsum omnis optio explicabo rem consequuntur libero corrupti fugit ab nisi earum? Sunt, totam quaerat! Placeat dignissimos molestias distinctio sint dolores molestiae. Quas, aperiam odit sequi debitis non magni accusamus sunt architecto incidunt earum tempora, laudantium repellendus sint vitae soluta esse reprehenderit voluptates aspernatur quaerat."

}

export function ActivityDetail({ data = initialData }) {
    const [generalEdit, setGeneralEdit] = useState(false);
    const [savedData, setSavedData] = useState(data);
    const [save, setSave] = useState(false);
    const [saveCount, setSaveCount] = useState(0);

    function setGeneralSave() {
        setSave(true)
    }
    function setEdit(state) {
        setGeneralEdit(state);
    };
    function addCauntSave() {
        setSaveCount(saveCount + 1)
        if (saveCount >= 5) {
            setSave(false);
            setSaveCount(0);
            setGeneralEdit(false);
        };
    }
    function reject() {
        setGeneralEdit(false)
    }

    function saveData(name, value) {
        setSavedData((currentData) => ({ ...currentData, [name]: value }))
    }
    return (
        <div className={styles["details-div"]}>
            <CustomForm generalEdit={generalEdit} setGeneralEdit={setEdit} reject={reject} setGeneralSave={setGeneralSave}>
                <CustomInputElement name={"title"} type={"text"} text={savedData.title} generalEdit={generalEdit} saveData={saveData} addCauntSave={addCauntSave} save={save} />
                <CustomSelectElement name={"type"} text={savedData.type} generalEdit={generalEdit} saveData={saveData} addCauntSave={addCauntSave} save={save} />
                <CustomDateElement name={"date"} text={savedData.date} generalEdit={generalEdit} saveData={saveData} addCauntSave={addCauntSave} save={save} />
                <CustomLocationElement name={"starting location"} text={savedData.location} generalEdit={generalEdit} saveData={saveData} addCauntSave={addCauntSave} save={save} />
                <CustomTextAreaElement name={"description"} text={savedData.description} generalEdit={generalEdit} saveData={saveData} addCauntSave={addCauntSave} save={save} />
            </CustomForm>
        </div>
    )
}
