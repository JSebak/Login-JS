import {React,useState,useEffect} from "react"
import { registerUser } from "./user.service";
import TextInput from "../components/TextInput.jsx";
import EmailInput from "../components/EmailInput.jsx";
import PasswordInput from "../components/PasswordInput.jsx"
import NumberInput from "../components/NumberInput.jsx";
import ErrorItem from "../components/ErrorItem/ErrorItem.jsx";

const RegistrationComponent = () => {
    const [validForm, setValidForm] = useState(false);
    const [passwordCoincide, setPasswordCoincide] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [idNumber, setIdNumber] = useState("")
    
    let user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password:password,
        phone:phone,
        idNumber:idNumber
    }

    useEffect(() => {
      let valid = ((firstName !== "" && lastName !== "" 
                    && email !== "" && password !== "" 
                    && phone !== "" && idNumber !== "") 
                    && passwordCoincide === undefined);
      setValidForm(valid)
    }, [firstName, lastName, email, password, phone, idNumber, passwordCoincide])
    
    const getData = (event) => {

        const user = {

        }
    }

    const register = () => {
        const success = registerUser(user)
        console.log(success)
    }

    const handleBlur = (event) => {
        if(event)
        {
            const id = event.id.replace("Input","")
            const value = event.value
            switch (id) {
                case "firstName":
                    setFirstName(value);
                break;

                case "lastName":
                    setLastName(value)
                break;

                case "email":
                    setEmail(value)
                break;

                case "password":
                    setPassword(value)
                break;

                case "phone":
                    setPhone(value)
                break;

                case "id":
                    setIdNumber(value)
                break;
            }
        }
        else
        {
            setValidForm(false)
        }
    }
    const verifyPassword = (event) => {
        if(user.password == null || user.password !== event.value)
        {
            setPasswordCoincide("The password should match.")
        }
        else
        {
            setPasswordCoincide()
        }
    }

    return (
        <div className="container">
            <h1 className="title">
                <span>
                    Create an Account
                </span>  
            </h1>
            <form id="registerForm" action="none">
                <TextInput handleBlur={handleBlur} id="firstNameInput" placeholder="First Name" name="first name" length={10}></TextInput>
                <TextInput handleBlur={handleBlur} id="lastNameInput" placeholder="Last Name" name="last name" length={10}></TextInput>
                <EmailInput handleBlur={handleBlur} id="emailInput"></EmailInput>
                <PasswordInput handleBlur={handleBlur} id="passwordInput" placeholder="Password" length={10} passwordConfirmation = {false}></PasswordInput>
                <PasswordInput handleBlur={verifyPassword} id="confirmationInput" placeholder="Confirm your Password" length={10} passwordConfirmation = {true}></PasswordInput>
                <ErrorItem id="confirmationInputError" error={passwordCoincide}></ErrorItem>
                <NumberInput handleBlur={handleBlur} id="phoneInput" placeholder="Phone" length={10} ></NumberInput>
                <NumberInput handleBlur={handleBlur} id="idInput" placeholder="Id Number" length={10} ></NumberInput>
            </form>
            <button id="registerButton" className="formButton" type="button" disabled={!validForm} onClick={register}>Register</button>
        </div>
        
    );
}
export default RegistrationComponent;