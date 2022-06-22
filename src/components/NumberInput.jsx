import Input from "./Input/Input";
import { useState } from "react";
import "./ErrorItem/ErrorItem.css";
import "./TypedInput.css";
import ErrorItem from "./ErrorItem/ErrorItem";

const NumberInput = (props) => {
    const [error, setError] = useState();

    const handleBlur = (event) => {
        const value = event.value
        if((value.length < props.length || isNaN(value)))
        {
            setError(`Phone should be at least ${props.length} characters long and contains only numbers.`)
        }
        else
        {
            setError();
            props.handleBlur(event);
        }
    }
    return (
        <div className="Wrapper">
            <Input type="tel" 
            placeholder={props.placeholder} 
            id={props.id}
            errors={props.errors}
            handleBlur={handleBlur}
            ></Input>
           <ErrorItem id={`${props.id}Error`} error={error} errors = {props.errors}></ErrorItem>
        </div>
    );
}

export default NumberInput;