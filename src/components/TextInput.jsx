import Input from "./Input/Input";
import { useState } from "react";
import "./ErrorItem/ErrorItem.css";
import ErrorItem from "./ErrorItem/ErrorItem";

const TextInput = (props) => {
    const [error, setError] = useState()
    const handleBlur = (event) => {
        const value = event.value
        if(value.length < props.length)
        {
            setError(`${props.name} should be at least ${props.length} long.`)
        }
        else
        {
            setError();
            props.handleBlur(event);
        }
    }
    return (
        <div className="Wrapper">
            <Input type="text" 
            placeholder={props.placeholder} 
            id={props.id}
            handleBlur={handleBlur}
            ></Input>
            <ErrorItem id={`${props.id}Error`} error={error}></ErrorItem>
        </div>
    );
}

export default TextInput;