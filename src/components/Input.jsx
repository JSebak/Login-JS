import {React, useState} from "react";

const Input = (props) => {
    const [value, setValue] = useState()

    const handleBlur = (event) => {
        setValue(event.target.value)
        props.handleBlur(event.target.value)
    }

    return(
        <div>
            <input type={props.type} 
            placeholder={props.placeholder} 
            id={props.id}
            className={props.class}
            onBlur={handleBlur}
            />
            <div id={`${props.id}Error`} className="inputError">{}</div>
        </div>
        
    );
}
export default Input;