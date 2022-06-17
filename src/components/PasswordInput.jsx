import Input from "./Input/Input";
import { useState } from "react";
import "./ErrorItem/ErrorItem.css";
import ErrorItem from "./ErrorItem/ErrorItem";

const PasswordInput = (props) => {
    const [error, setError] = useState();

    const pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
      );

    const handleBlur = (event) => {
        const value = event.value
        if((value.length < props.length && !pattern.test(value))&&!props.passwordConfirmation)
        {
            setError(`Password should be at least ${props.length} characters long, include a special character, a number and a Uppercase letter.`)
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
            <ErrorItem id={`${props.id}Error`} error={error}></ErrorItem>
        </div>
    );
}

export default PasswordInput;