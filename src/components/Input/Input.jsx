import {React, useState} from "react";
import ErrorItem from "../ErrorItem/ErrorItem";
import "./Input.css";

const Input = (props) => {
    const [error, setError] = useState([])  

    const handleBlur = (event) => {
        const value = event.target.value
        if(value == null || value === "")
        {
            setError("This field can't be empty.")
        }
        else 
        {
            setError();
            props.handleBlur(event.target);
        }  
    }

    return(
        <div className="wrapper">
            <input type={props.type} 
            placeholder={props.placeholder} 
            id={props.id}
            className="inputField"
            onBlur={handleBlur}
            defaultValue={props.defaultValue}
            />
            <ErrorItem id={`${props.id}Error`} error={error}></ErrorItem> 
        </div>
        
    );
}
export default Input;