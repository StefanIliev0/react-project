import { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import styles from "./groupComments.module.css";

import { addComment, getComments, deleteComment } from "../../../services/commentService";
import { AuthContext } from "../../../contexts/authContext";

import { AddComment } from './AddComment/AddComment';
import { CommentCard } from './CommentCard/CommentCard';

export function GroupComments({ objectId, owner }) {
    const { user, isAuthenticated } = useContext(AuthContext);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments(objectId).then((value) => {
            setComments(value);
        }).catch((err) => {
            console.log(err);
        })
    });
    const isOwner = owner?.id === user?._id;
    async function addNewComment(text) {
        try {
            const newComment = await addComment(text, user.nickname, objectId);
            setComments((c) => ([...c, newComment]));
        } catch (err) {
            console.log(err);
            return <Navigate to={"/error"}/>
        }
    }
    async function removeComment(commentId) {
        try {
            await deleteComment(commentId); 
            const newComments = comments.filter(c => c.id !== commentId)
            setComments(newComments);
        } catch (err) {
            console.log(err);
            return <Navigate to={"/error"}/>
        }
    }
    return (

        <div className={styles["activity-div"]}>
            {isAuthenticated && <AddComment addNew={addNewComment} />}
            {comments.map(c => (
                <CommentCard
                    author={c.postOwner}
                    text={c.text}
                    key={c.id}
                    commentId={c.id}
                    userNickname={user.nickname}
                    isOwner={isOwner} 
                    remove={removeComment}/>))}
        </div>
    )
}