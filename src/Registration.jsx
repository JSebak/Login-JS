import {React,useState} from "react"

const RegistrationComponent = () => {
    const [validForm, setValidForm] = useState(false);
    const [firstNameError, setFirstNameError] = useState([""])
    const [lastNameError, setLastNameError] = useState([""])
    const [emailError, setEmailError] = useState([""])
    const [passwordError, setPasswordError] = useState([""])
    const [phoneError, setPhoneError] = useState([""])
    const [idNumberError, setIdNumberError] = useState([""])
    const [passwordConfirmationError, setPasswordConfirmationError] = useState([""])
    const user = {
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        phone:"",
        idNumber:""
    }
    const getData = (event) => {

        const user = {

        }
    }

    const validateInput = (event) => {
        const field = event.target.id;
        const value = event.target.value;
        switch (field) {
            case "firstName":
                if(value == null | value === "")
                {
                    setFirstNameError([...firstNameError,"The first name is required"]);
                }
                else if (value.length < 3)
                {
                    setFirstNameError([...firstNameError,`The first name should be at least 3 characters length`]);
                }
                else {
                    setFirstNameError([""]);
                }
                
                break;
            case "lastName":
                if(value == null | value === "")
                {
                    setLastNameError([...lastNameError,"The last name is required"]);
                }
                else if (value.length < 3)
                {
                    setLastNameError([...lastNameError,`The last name should be at least 3 characters length`]);
                }
                else {
                    this.user.firstName = value;
                    setLastNameError([""]);
                }
                break;
            case "email":
                if(value == null | value === "")
                {
                    setEmailError(...emailError,"The email is required");
                }
                else if (value.length > 3 && value.includes('@')&& value.includes('.'))
                {
                    setEmailError(...emailError,`The email should be at least 3 characters length, include an @ and a .`);
                }
                else {
                    this.user.lastName = value;
                    setEmailError([""]);
                }
                break;
            case "password":
                if(value == null | value === "")
                {
                    setPasswordError([...emailError,"The password is required"]);
                }
                else if (value.length > 3 )
                {
                    setPasswordError([...emailError,`The password should be at least 3 characters length`]);
                }
                else {
                    this.user.password = value;
                    setPasswordError([""]);
                }
                break;
            case "passwordConfirmation":
                if(value == null | value === "")
                {
                    setPasswordConfirmationError([...emailError,"The password confirmation is required"]);
                }
                else if (value.length != this.user.password )
                {
                    setPasswordConfirmationError([...emailError,`The passwords don't coincide`]);
                }
                else {
                    setPasswordConfirmationError([""]);
                }
                break;
            case "phone":
                if(value == null | value === "")
                {
                    setPhoneError([...phoneError,"The phone is required"]);
                }
                else if (value.length != 10 )
                {
                    setPhoneError([...phoneError,`The phone it's 10 digits`]);
                }
                else {
                    setPhoneError([""]);
                }
                break;
            case "idNumber":
                if(value == null | value === "")
                {
                    setIdNumberError([...idNumberError,"The id is required"]);
                }
                else if (value.length < 10 && isNaN(value) )
                {
                    setIdNumberError([...idNumberError,`The id `]);
                }
                else {
                    setIdNumberError([""]);
                }
                break;
        
            default:
                break;
        }

    }
// separar por componentes cada input y crear uno de input general llamado dentro de los demás
    return (
        <div className="container">
            <h1 className="title">
                <span>
                Create an Account
                </span>  
            </h1>
            <form id="registerForm" action="none">
            <div className="inputForm">
                    <input type="text"
                    id="firstName"
                    autoFocus
                    className="formInput"
                    onBlur={validateInput}
                    placeholder="First Name"/>
                </div>
                <div id="firstNameError" className="inputError">{firstNameError}</div>
                <div className="inputForm">
                    <input type="text"
                    id="lastName"
                    className="formInput"
                    onBlur={validateInput}
                    placeholder="Last Name"/>
                </div>
                <div id="lastNameError" className="inputError">{lastNameError}</div>

                <div className="inputForm">
                    <input type="text"
                    id="email"
                    className="formInput"
                    onBlur={validateInput}
                    placeholder="Email"/>
                </div>
                <div id="emailError" className="inputError">{emailError}</div>

                <div className="inputForm">
                    <input type="password"
                    id="password"
                    className="formInput"
                    onBlur={validateInput}
                    placeholder="Password"/>
                </div>
                <div id="passwordError" className="inputError">{passwordError}</div>

                <div className="inputForm">
                    <input type="password"
                    id="passwordConfirmation"
                    className="formInput"
                    onBlur={validateInput}
                    placeholder="Re-enter your Password"/>
                </div>
                <div id="passwordConfirmationError" className="inputError">{passwordConfirmationError}</div>

                <div className="inputForm">
                    <input type="text"
                    id="phone"
                    className="formInput"
                    onBlur={validateInput}
                    placeholder="Phone Number"/>
                </div>
                <div id="phoneError" className="inputError">{}</div>

                <div className="inputForm">
                    <input type="text"
                    id="idNumber"
                    className="formInput"
                    onBlur={validateInput}
                    placeholder="Id Number"/>
                </div>
                <div id="idNumberError" className="inputError">{}</div>
            </form>
            <button id="registerButton" className="formButton" type="button" disabled={validForm}>Register</button>
        </div>
        
    );
}
export default RegistrationComponent;