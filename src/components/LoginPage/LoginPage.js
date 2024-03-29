import styles from "./loginPage.module.css";
import { useContext, useState } from "react";
import { CustomButton } from "../commonComponents/CustomButton/CustomButton";
import { AuthContext } from "../../contexts/authContext";


export function LoginPage() {
    const [currentData, setCurrentData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState([]);
    const { onLogin } = useContext(AuthContext);

   async function formSubmit(e) {
        e.preventDefault();
        try {
          await  onLogin(currentData);
        } catch (error) {
            setErrors([error]);
        }
    }

    function changeHandler(e) {
        setCurrentData((currentData) => ({ ...currentData, [e.target.name]: e.target.value }))
    }

    return (
        <div className={styles["container-div"]}>
            {errors.length > 0 && (
                <div className={styles["error-div"]}>
                    {errors.map((err) => <p key={err.message}>{err.message}</p>)}
                </div>
            )}
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
                <div className={styles["inline-div"]}>
                    <CustomButton text={"Login"} type="submit" />
                </div>
            </form>
        </div>
    )
}