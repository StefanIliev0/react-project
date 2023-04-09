import React from 'react';
import styles from "./errorPage.module.css";

import { CustomLink } from '../commonComponents/CustomLink/CustomLink';


export function ErrorPage(){
    return (
        <section>
            <div className={styles["container"]}>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The Page you are looking for doesn't exist or another error occurred. Go to <CustomLink to={"/"} text={"home"} /></p>
            </div>
        </section>
    )
}