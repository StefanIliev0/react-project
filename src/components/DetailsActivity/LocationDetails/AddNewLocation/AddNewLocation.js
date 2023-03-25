import { useState } from "react";
import styles from "./addNewLocation.module.css";
import {AiOutlineDoubleRight, AiOutlinePlus} from "react-icons/ai"

import { CustomButton } from "../../../commonComponents/CustomButton/CustomButton";



export function AddNewLocation({hoverr }) {
    const [hover , setHover ] = useState(hoverr)

    function addLocation (){
        //write 
    }


    return (
<div className={styles["add-location-card-div"]} onMouseEnter={()=> setHover(true)} onMouseLeave = {()=> setHover(false)}>
{ hover? (<CustomButton text={<AiOutlinePlus className={styles["btn-icon"]}/>} onclick={addLocation} />) :
(
    <AiOutlineDoubleRight className={styles["icon"]}/>
) }
</div>
    )
}