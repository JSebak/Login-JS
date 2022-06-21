import {React,useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import { registerUser } from "./user.service";
import TextInput from "../components/TextInput.jsx";
import EmailInput from "../components/EmailInput.jsx";
import PasswordInput from "../components/PasswordInput.jsx"
import NumberInput from "../components/NumberInput.jsx";
import ErrorItem from "../components/ErrorItem/ErrorItem.jsx";

const RegistrationComponent = () => {
    const [registered, setRegistered] = useState(false)
    const [user, setUser] = useState({})
    const [formErrors, setFormErrors] = useState([])
    const [validForm, setValidForm] = useState(false);
    const [passwordCoincide, setPasswordCoincide] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [idNumber, setIdNumber] = useState("")
    const required = ["firstName","lastName","email","password","phone","id"]
    let navigate = useNavigate();

    useEffect(() => {
      let valid = (required.some(key=> user[key] !== "") 
                    && passwordCoincide === undefined);
      setValidForm(valid)
    }, [user, passwordCoincide])
    
    const getData = (event) => {

        const user = {

        }
    }

    const register = () => {

        registerUser(user)
            .then(result =>
            {
                console.log("success",result);
                navigate("/success-user");
            })
            .catch((errors => {
                console.log("errors", errors)
                setFormErrors(errors)
            }))
            .finally(()=>{
                //change loading state
            })
        //Mixed
        // registerUser(user).then(result => {
        //     if (result.state === 201)
        //     {
        //         setRegistered(true);
        //         console.log(result.result)
        //     }
        //     else 
        //     {
        //         const errors = result.result.map(error => 
        //         {
        //             return {field: error.property,
        //             errors: Object.values(error.constraints)}
        //         })
        //         setFormErrors(errors)
        //     }
        // })
    }

    // const handleErrors = (errors) => {
    //     errors.map(error => {
    //         switch (error.field) {
    //             case "id":
    //                 set
    //                 break;

    //         }
    //     })
    // }

    const handleBlur = (event) => {
        if(event)
        {
            const id = event.id
            const value = event.value

            const editedUser = {
                ...user,
                [id]: value
            }
            setUser(editedUser)
            
            // switch (id) {
            //     case "firstName":
            //         setFirstName(value);
            //     break;

            //     case "lastName":
            //         setLastName(value)
            //     break;

            //     case "email":
            //         setEmail(value)
            //     break;

            //     case "password":
            //         setPassword(value)
            //     break;

            //     case "phone":
            //         setPhone(value)
            //     break;

            //     case "id":
            //         setIdNumber(value)
            //     break;
            // }
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

    const showError = (field) =>{
        const element = formErrors.find(item => item.property === field);
        if(!element)
        {
            return;
        }
        return Object.values(element.constraints).join(", ");
    }

    const back = (event) => {
        setRegistered(false)
        setUser({})
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
                <TextInput handleBlur={handleBlur} id="firstName" placeholder="First Name" name="first name" length={3}></TextInput>
                <ErrorItem id="confirmationError" error={showError("first_name")}></ErrorItem>
                <TextInput handleBlur={handleBlur} id="lastName" placeholder="Last Name" name="last name" length={3}></TextInput>
                <ErrorItem id="confirmationError" error={showError("lastName")}></ErrorItem>
                <EmailInput handleBlur={handleBlur} id="email"></EmailInput>
                <PasswordInput handleBlur={handleBlur} id="password" placeholder="Password" length={8} passwordConfirmation = {false}></PasswordInput>
                <PasswordInput handleBlur={verifyPassword} id="confirmation" placeholder="Confirm your Password" length={8} passwordConfirmation = {true}></PasswordInput>
                <ErrorItem id="confirmationError" error={passwordCoincide}></ErrorItem>
                <NumberInput handleBlur={handleBlur} id="phone" placeholder="Phone" length={10} ></NumberInput>
                <NumberInput handleBlur={handleBlur} id="id" placeholder="Id Number" length={10} ></NumberInput>
            </form>
            <button id="registerButton" className="formButton" type="button" disabled={!validForm} onClick={register}>Register</button>
            {/* {formErrors.map((error, index)=> <ErrorItem id={index} error={error}></ErrorItem>)} */}
        </div>
        }
        </div>
    );
}
export default RegistrationComponent;