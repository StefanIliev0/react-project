import { useState } from "react";
import styles from "./unaprovedLocationCard.module.css";


import { BtnsSubmitAndReject } from "../../../commonComponents/BtnsSubmitAndReject/BtnsSubmitAndReject";


export function UnaprovedLocationCard({data}) {
    const [currentData , setCurrentData] = useState(data)

    function AddPositiveVote(){
        setCurrentData((data) => ({ ...data , votes : {positive : Number(data.votes.positive) + 1 , negative : data.votes.negative } }))
    };
    function AddNegativeVote(){
        setCurrentData((data) => ({ ...data , votes : {positive :  data.votes.positive , negative : Number(data.votes.negative) + 1} }))
    };


    return (
<div className={styles["location-card-div"]}>
<h4>{currentData.title}</h4>
    <BtnsSubmitAndReject submit={AddPositiveVote} reject={AddNegativeVote}/>
</div>
    )
}