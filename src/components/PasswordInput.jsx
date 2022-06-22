import Input from "./Input/Input";
import { useState } from "react";
import "./ErrorItem/ErrorItem.css";
import "./TypedInput.css";
import ErrorItem from "./ErrorItem/ErrorItem";

const PasswordInput = (props) => {
    const [error, setError] = useState();

    const pattern = new RegExp(
        /^(\W[0-9][A-Z])|(.[0-9][A-Z]).*\W.*$/
      );

    const handleBlur = (event) => {
        const value = event.value
        if((value.length < props.length && !pattern.test(value))&&!props.passwordConfirmation)
        {
            setError(`Password pass should have at least ${props.length} characters, include one special character, the second character must be a number and the third an uppercased letter.`)
        }
        else
        {
            setError();
            props.handleBlur(event);
        }
    }
    return (
        <div className="Wrapper">
            <Input type="password" 
            placeholder={props.placeholder} 
            id={props.id}
            handleBlur={handleBlur}
            ></Input>
            <ErrorItem id={`${props.id}Error`} error={error} errors = {props.errors}></ErrorItem>
        </div>
    );
}

export default PasswordInput;