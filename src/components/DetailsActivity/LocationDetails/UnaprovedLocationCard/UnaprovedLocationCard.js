import styles from "./unaprovedLocationCard.module.css";


import { BtnsSubmitAndReject } from "../../../commonComponents/BtnsSubmitAndReject/BtnsSubmitAndReject";


export function UnaprovedLocationCard({data, userId, numOfMembers, aproveLocation, removeLocation , incrementVotes, decrementVotes, index}) {
    let allreadyVoted = !!data.voted.find((v)=> v === userId) ;

    if(numOfMembers === data.voted.length){
        if(data.votes.positive >= data.votes.negative){
        aproveLocation( index , { location : data.location , country : data.country , aproved : true });
    }else{
        removeLocation(index);
    }}


    function AddPositiveVote(){
    incrementVotes(index);
     allreadyVoted = true ;
   
   };


    function AddNegativeVote(){
        decrementVotes(index);
    allreadyVoted = true ; 
    if(numOfMembers === data.voted.length){
    removeLocation(index);
    }
    }


    return (
<div className={styles["location-card-div"]}>
<h4>{`${data.location}, ${data.country}`}</h4>
  { !allreadyVoted && <BtnsSubmitAndReject submit={AddPositiveVote} reject={AddNegativeVote}/>}
</div>
    )
}