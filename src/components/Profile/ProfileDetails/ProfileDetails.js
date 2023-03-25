import { useState } from 'react';
import styles from "./profileDetails.module.css";

import { CustomForm } from '../../commonComponents/CustomForm/CustomForm';
import { CustomInputElement } from '../../commonComponents/CustomForm/CustomInputElement/CustomInputElement';
import { CustomLocationElement } from '../../commonComponents/CustomForm/CustomLocationElement/CustomLocationElement';
import { CustomTextAreaElement } from '../../commonComponents/CustomForm/CustomTextAreaElement/CustomTextAreaElement';
import { CustomProfilePic } from '../../commonComponents/CustomForm/CustomProfilePic/CustomProfilePic';

const initialData = {
    nickname : "Gosho" ,
    age : "16",
    location : {location : "Varna" , country : "Bulgaria"} ,
    interests : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis tempora optio, voluptates qui facilis ratione repudiandae. Odit quod reprehenderit laudantium eligendi consequatur numquam nesciunt sint illum aut, totam ut doloremque mollitia dolorum necessitatibus. Eum provident dolorem perspiciatis quae sed eligendi facere ducimus odit vitae exercitationem fugit delectus minima id accusantium, maxime cumque obcaecati voluptas vero sit aperiam dolore assumenda. Quasi enim voluptatum pariatur sequi officiis, laborum et assumenda corporis eius animi ad iste totam numquam, voluptate cumque eligendi earum. Cupiditate ducimus, vero quae, nesciunt beatae voluptate excepturi laboriosam laudantium accusantium unde nostrum inventore, ipsam doloremque explicabo blanditiis esse! Dignissimos, quo et nam eum aspernatur sint dolorem at quis vel impedit itaque culpa dolor modi quaerat magnam veniam dicta nisi ullam sunt vero quia fuga beatae! Similique rerum expedita odio corporis doloremque, ipsum velit nihil cumque atque labore, id voluptates eligendi adipisci quidem vero autem aliquam explicabo architecto? Ipsam aliquam quas dolores eligendi aut ad quisquam repudiandae amet natus voluptatum? Culpa, ducimus repellat blanditiis voluptatum temporibus optio pariatur vero, corporis molestiae consequuntur sint ratione, maxime non dicta laborum. Minus quis labore iusto itaque, doloremque accusamus inventore, similique libero provident vel ullam, dolorem quidem! Iusto saepe maxime ab modi rerum dolores voluptate quidem adipisci unde nam molestias velit, accusamus natus quis, ipsum nisi provident eaque. Expedita sapiente nam laboriosam vel, nisi libero ducimus impedit dolorum! Nesciunt voluptatibus saepe aliquam distinctio beatae velit placeat ducimus laborum aspernatur obcaecati id, in vero optio non. Nostrum autem molestias aliquid ipsam amet, dignissimos veniam distinctio maxime accusamus incidunt animi vero expedita ipsum omnis optio explicabo rem consequuntur libero corrupti fugit ab nisi earum? Sunt, totam quaerat! Placeat dignissimos molestias distinctio sint dolores molestiae. Quas, aperiam odit sequi debitis non magni accusamus sunt architecto incidunt earum tempora, laudantium repellendus sint vitae soluta esse reprehenderit voluptates aspernatur quaerat." ,
    imgUrl : ""
}

export function ProfileDetails({data = initialData}) {
    const [generalEdit , setGeneralEdit] = useState(false);
    const [savedData , setSavedData] = useState(data);
    const [save , setSave] = useState(false);
    const [saveCount , setSaveCount] = useState(0);
    
    function setGeneralSave(){
        setSave(true)
    }
    function setEdit(state){
        setGeneralEdit(state) ; 
    } ; 
 function addCauntSave(){
    setSaveCount(saveCount + 1)
     if(saveCount >= 5){
    setSave(false);
    setSaveCount(0);
    setGeneralEdit(false); 
 }
 }
    function saveData(name , value ){
        setSavedData((currentData) => ({...currentData , [name] : value}))
    } 
    function reject (){
        setGeneralEdit(false)
    }
    return (
<div className={styles["details-div"]}>
<CustomForm  generalEdit={generalEdit} setGeneralEdit={setEdit} reject={reject} setGeneralSave={setGeneralSave}>
<CustomProfilePic  text={savedData.imgUrl} generalEdit={generalEdit}  saveData = {saveData} addCauntSave={addCauntSave} save = {save}/>
<CustomInputElement name={"nickname"} type={"text"} text={savedData.nickname} generalEdit={generalEdit}  saveData = {saveData} addCauntSave={addCauntSave} save = {save}/>
<CustomInputElement name={"age"} type={"number"} text={savedData.age} generalEdit={generalEdit}  saveData = {saveData} addCauntSave={addCauntSave} save = {save}/>
<CustomLocationElement name={"location"} text={savedData.location} generalEdit={generalEdit}  saveData = {saveData} addCauntSave={addCauntSave} save = {save}/>
<CustomTextAreaElement name={"interests"} text={savedData.interests} generalEdit={generalEdit}  saveData = {saveData} addCauntSave={addCauntSave} save = {save}/>
</CustomForm>
</div>
)}
