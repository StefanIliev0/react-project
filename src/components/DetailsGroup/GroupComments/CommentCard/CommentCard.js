import styles from "./commentCard.module.css";

import { CustomButton } from "../../../commonComponents/CustomButton/CustomButton";


export function CommentCard({author , text , userNickname , commentId ,isOwner, remove }) {
    return (
<article className={styles["article"]}>
<h4 className={styles["author"]}>{((userNickname === author) || isOwner )  && <CustomButton text={"remove"} onclick={() => remove(commentId)}/>} {author} :</h4>
<p className={styles["text-comment"]}>{text}</p>
</article>
    )
}