import styles from "./registerPage.module.css";
import { useState ,useContext} from "react";

import { CustomButton } from "../commonComponents/CustomButton/CustomButton";
import { AuthContext } from "../../contexts/authContext";




export function RegisterPage() {
    const [currentData, setCurrentData] = useState({ 
        username :'' , 
        password : "" ,
        repeatPassword : "" , 
        nickname : "" ,
        age : '' ,
     });
    const [termsIsRead, setTermsIsRead] = useState(false);
    const [errors, setErrors] = useState([]);
    const { onRegister } = useContext(AuthContext)

    const termOfUse = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nulla qui sunt modi culpa animi dolores optio quo beatae ut officia nisi cum quisquam, quibusdam accusantium quas aspernatur quasi. Odio culpa ea veritatis adipisci doloremque eius suscipit quidem delectus rem recusandae cum nesciunt et, unde cumque hic blanditiis, aliquid velit quibusdam sapiente nobis molestiae dolorem repellat amet? Deleniti hic voluptas facere quam nihil veritatis libero id aperiam in accusantium molestiae harum dicta tenetur porro possimus, corrupti qui officia laboriosam inventore, aut magni quos tempore eos dolores. Ab ullam facere, totam id veritatis illum. Repellendus nobis adipisci magni voluptatibus, libero quas atque iusto fugiat ex id illum, incidunt excepturi nesciunt voluptatem obcaecati deserunt eligendi maiores consectetur maxime iure temporibus quia veniam soluta officiis! Odit, beatae? Molestias sed animi illo quibusdam eum? Suscipit quisquam, est corporis placeat id nostrum eligendi accusantium. Deserunt nostrum obcaecati, quod qui ad repellendus nesciunt libero. Illo fugiat, neque eligendi, cumque aut obcaecati sit recusandae exercitationem non sed reiciendis quod nam labore impedit autem consequuntur dolores quisquam quia, culpa ipsum. Harum nobis asperiores doloribus minus voluptatem accusantium dolorem corrupti molestias consequuntur dolorum. Dolorum qui, fugit hic molestiae dolores, voluptatem reprehenderit ipsum quo magnam sit doloribus corrupti consectetur asperiores!";

    async function formSubmit(e) {
        e.preventDefault();
        try {
           await onRegister(currentData) ;
        } catch (error) {
            setErrors(error) ;
        }
    }

    function changeHandler(e) {
        setCurrentData((currentData) => ({ ...currentData, [e.target.name]: e.target.value }));
    };

    function onScroll(e) {
        const { scrollTop, clientHeight, scrollHeight } = e.target;

        if (Math.floor((scrollTop + clientHeight)/100) === Math.floor(scrollHeight/100) ){
            setTermsIsRead(true)
        }
    }

    return (
        <div className={styles["container-div"]}>

            <form onSubmit={formSubmit} className={styles["form"]}>
                <label htmlFor="username" className={styles["label"]}>{`Username :`}</label>
                <input
                    id="username"
                    className={styles["input"]}
                    name="username"
                    type="text"
                    value={currentData.username}
                    onChange={changeHandler} />
                <label htmlFor="password" className={styles["label"]}>{`Password :`}</label>
                <input
                    id="password"
                    className={styles["input"]}
                    name="password"
                    type="password"
                    value={currentData.password}
                    onChange={changeHandler} />
                <label htmlFor="repeat-password" className={styles["label"]}>{`Reapeat password :`}</label>
                <input
                    id="repeat-password"
                    className={styles["input"]}
                    name="repeatPassword"
                    type="password"
                    value={currentData.repeatPassword}
                    onChange={changeHandler} />
                <label htmlFor="nickname" className={styles["label"]}>{`Nickname :`}</label>
                <input
                    id="nickname"
                    className={styles["input"]}
                    name="nickname"
                    type="text"
                    value={currentData.nickname}
                    onChange={changeHandler} />
                <label htmlFor="age" className={styles["label"]}>{`Age :`}</label>
                <input
                    id="age"
                    className={styles["input"]}
                    name="age"
                    type="number"
                    value={currentData.age}
                    onChange={changeHandler} />
                <label htmlFor="terms" className={styles["label"]}>{`Terms of use:`}</label>
                <textarea onScroll={onScroll}
                    disabled
                    id="terms"
                    className={styles["textarea"]}
                    value={termOfUse}
                    name="terms"></textarea>
                {errors.length > 0 && (
                <div className={styles["error-div"]}>
                    {errors.map((err) => <p key={err.message}>{err.message}</p>)}
                </div>
            )}

                <div className={styles["inline-div"]} >
                    <CustomButton text={"Register"} type="submit" disabled={!termsIsRead} />
                </div>
            </form>
        </div>
    )
}