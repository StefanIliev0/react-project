import styles from "./commentCard.module.css";


export function CommentCard({author , text }) {
    return (
<article className={styles["article"]}>
<h4 className={styles["author"]}>{author} :</h4>
<p className={styles["text-comment"]}>{text}</p>
</article>
    )
}