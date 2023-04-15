/* eslint-disable */
import { useState ,useContext ,useEffect} from "react" ;
import styles from "./accessibilitySelect.module.css" ;

import { formContext } from "../../../../contexts/formContext";

export function AccessibilitySelect({name}){
    const { savedData , saveData , generalEdit , groups} = useContext(formContext);
    const [currentText , setCurrentText] = useState(savedData[name]);
    useEffect(() => {
        onEditSubmit();}
    , [currentText]);

    function onEditSubmit(){
        if(generalEdit){
            saveData(name ,currentText );
        }};
    

    function handleChange(e){
        e.preventDefault();
        setCurrentText(e.target.value);
    };

    return (
        <div className={styles["input-container"]} >
        <label htmlFor="accessibility" className={styles["label"]}>{`Available for :`}</label>
             <select id="accessibility" name={"accessibility"} value={currentText} onChange={handleChange} className={styles["select"]}>
                     <option value="all" >All</option>
                     {
                      groups &&  groups.map( (group) => <option key={group.id} value={group.id}>{group.name}</option>)
                     }

                 </select>
        </div>
    )
}