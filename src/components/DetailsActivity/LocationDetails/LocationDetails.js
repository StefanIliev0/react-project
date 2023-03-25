
import { AddNewLocation } from "./AddNewLocation/AddNewLocation";
import { AprovedLocationCard } from "./AprovedLocationCard/AprovedLocationCard";
import styles from "./locationDetails.module.css";

import { UnaprovedLocationCard } from "./UnaprovedLocationCard/UnaprovedLocationCard";


const initialData = [{
    title : "Varna" ,
    aproved : true ,
    votes : {
        positive : 5 ,
        negative : 3 , 
    } ,
    votedUsers : ["1345657453" ,"123455342" ,"fd12343432424234"]
} ,


]
export function LocationDetails({data = initialData}) {




    return (
<div className={styles["locations-div"]}>
    <UnaprovedLocationCard data={data[0]}/>
    <AddNewLocation hoverr={false}/>
    <AprovedLocationCard data={data[0]}/>
    <AddNewLocation hoverr={true}/>

</div> 

)}
