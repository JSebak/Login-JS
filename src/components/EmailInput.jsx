import { useState } from "react";
import ErrorItem from "./ErrorItem/ErrorItem";
import Input from "./Input/Input";


const EmailInput = (props) => {
    const [error, setError] = useState()
    const handleBlur = (event) => {
        const value = event.value
        if(!(value.includes("@") && value.includes(".") && value.length > 5))
        {
            setError("The email should include '@', '.' and should be at least 6 characters long.")
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
            placeholder="Email" 
            id={props.id}
            handleBlur={handleBlur}
            ></Input>
            <ErrorItem id={`${props.id}Error`} error={error}></ErrorItem>
        </div>
    );
}

export default EmailInput;