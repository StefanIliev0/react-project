import React from 'react' ;
import styles from "./customButton.module.css";


export function CustomButton({text , onclick ,type , disabled}) {

    return (
    <button type={type} title={type} onClick={onclick} className={styles.button} disabled={disabled}>{text}</button>
    )
}