import { useState, useEffect } from "react";
import styles from "./groupComments.module.css";

import { getComments } from "../../../services/commentService";

import { AddComment } from './AddComment/AddComment';
import { CommentCard } from './CommentCard/CommentCard';

export function GroupComments( {objectId}){
    const [comments , setComments] = useState([]); 
    useEffect(()=>{
        getComments(objectId).then((value)=>{
            setComments(value); 
        }).catch((err)=>{
            console.log(err);
        })
    })

    return (

<div className={styles["activity-div"]}>
    <AddComment />
    {comments.map(c => <CommentCard author={c.postOwner} text={c.text} key={c.id}/>)
    }
</div>
    )
}