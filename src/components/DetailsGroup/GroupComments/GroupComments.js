import { CommentCard } from './CommentCard/CommentCard';
import styles from "./groupComments.module.css";

export function GroupComments() {
    return (

<div className={styles["activity-div"]}>
 <CommentCard author={"nqkoi"} text={"nqkakyv text"} />
 <CommentCard author={"nqkoi"} text={"nqkakyv text"} />
 <CommentCard author={"nqkoi"} text={"nqkakyv text"} />
 <CommentCard author={"nqkoi"} text={"nqkakyv text"} />
 <CommentCard author={"nqkoi"} text={"nqkakyv text"} />
</div>
    )
}