import {React,useState,useEffect} from "react"
import { registerUser } from "./user.service";
import TextInput from "../components/TextInput.jsx";
import EmailInput from "../components/EmailInput.jsx";
import PasswordInput from "../components/PasswordInput.jsx"
import NumberInput from "../components/NumberInput.jsx";
import ErrorItem from "../components/ErrorItem/ErrorItem.jsx";

const RegistrationComponent = () => {
    const [registered, setRegistered] = useState(false)
    const [formErrors, setFormErrors] = useState([])
    const [validForm, setValidForm] = useState(false);
    const [passwordCoincide, setPasswordCoincide] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [idNumber, setIdNumber] = useState("")
    
    let user = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password:password,
        phone_number:phone,
        id:idNumber
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
        registerUser(user).then(result => {
            // if (result.state === 201)
            // {
            //     setRegistered(true);
            //     console.log(result.result)
            // }
            // else 
            // {
                const errors = result.map(error => Object.values(error.constraints))
                setFormErrors(errors)
            // }
        })
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

    const back = (event) => {
        setRegistered(false)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setPhone("")
        setIdNumber("")
    }

    return (
        <div>
            { registered  &&
            <div> 
                <h2>
                    User Registered!
                </h2>
                <button onClick={back}>
                    Back
                </button>
            </div>
        }
        {!registered && 
        <div className="container">  
            <h1 className="title">
                <span>
                    Create an Account
                </span>  
            </h1>
            <form id="registerForm" action="none">
                <TextInput handleBlur={handleBlur} id="firstNameInput" placeholder="First Name" name="first name" length={3}></TextInput>
                <TextInput handleBlur={handleBlur} id="lastNameInput" placeholder="Last Name" name="last name" length={3}></TextInput>
                <EmailInput handleBlur={handleBlur} id="emailInput"></EmailInput>
                <PasswordInput handleBlur={handleBlur} id="passwordInput" placeholder="Password" length={8} passwordConfirmation = {false}></PasswordInput>
                <PasswordInput handleBlur={verifyPassword} id="confirmationInput" placeholder="Confirm your Password" length={8} passwordConfirmation = {true}></PasswordInput>
                <ErrorItem id="confirmationInputError" error={passwordCoincide}></ErrorItem>
                <NumberInput handleBlur={handleBlur} id="phoneInput" placeholder="Phone" length={10} ></NumberInput>
                <NumberInput handleBlur={handleBlur} id="idInput" placeholder="Id Number" length={10} ></NumberInput>
            </form>
            <button id="registerButton" className="formButton" type="button" disabled={!validForm} onClick={register}>Register</button>
            {formErrors.map((error, index)=> <ErrorItem id={index} error={error}></ErrorItem>)}
        </div>
        }
        </div>
    );
}
export default RegistrationComponent;