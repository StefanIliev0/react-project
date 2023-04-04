import { useState } from "react";
import styles from "./addNewLocation.module.css";
import {AiOutlineDoubleRight, AiOutlinePlus} from "react-icons/ai"

import { CustomButton } from "../../../commonComponents/CustomButton/CustomButton";
import { BtnsSubmitAndReject } from "../../../commonComponents/BtnsSubmitAndReject/BtnsSubmitAndReject";



export function AddNewLocation({addLocation , index}) {
    const [hover , setHover ] = useState(false);
    const [addLocationMode , setAddLocationMode] = useState(false); 
    const [newLocation , setNewLocation] = useState({location : "" , country : ""})

    function setAddLocation (){
        setAddLocationMode(true) ;
    }

    function handeChange(e){
        e.preventDefault();
        setNewLocation((l)=> ({...l , [e.target.name] : e.target.value}))
    }

    function formSubmit(e){
        e.preventDefault();
        addLocation(index , newLocation) ;
        setNewLocation({location : "" , country : ""});
        setAddLocationMode(false) ; 
    }; 
    function rejectNewLocation(){
        setAddLocationMode(false) ;
    }


    return (<>
{addLocationMode ? (
    <div className={styles["location-card-div"]}>
<form  onSubmit={formSubmit}>
<label>Location: <input type="text" name="location" value={newLocation.location} onChange={handeChange}/></label>

<label>Country: <input type="text" name="country" value={newLocation.country} onChange={handeChange} /> </label>

 <BtnsSubmitAndReject  reject={rejectNewLocation}/>
</form>
</div>
 ) :(      
<div className={styles["add-location-card-div"]} onMouseEnter={()=> setHover(true)} onMouseLeave = {()=> setHover(false)}>
{ hover? (<CustomButton text={<AiOutlinePlus className={styles["btn-icon"]}/>} onclick={setAddLocation} />) :
(
    <AiOutlineDoubleRight className={styles["icon"]}/>
) }
</div>
   ) }
   </>)
}