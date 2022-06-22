import {React,useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';
import { registerUser } from "./user.service";
import TextInput from "../components/TextInput.jsx";
import EmailInput from "../components/EmailInput.jsx";
import PasswordInput from "../components/PasswordInput.jsx"
import NumberInput from "../components/NumberInput.jsx";
import ErrorItem from "../components/ErrorItem/ErrorItem.jsx";
import "./Registration.css"

const RegistrationComponent = () => {
    const [registered, setRegistered] = useState(false)
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phone:'',
        id:''
    })
    const [formErrors, setFormErrors] = useState([])
    const [validForm, setValidForm] = useState(false);
    const [passwordCoincide, setPasswordCoincide] = useState("");
    const required = ["firstName","lastName","email","password","phone","id"]
    let navigate = useNavigate();

    useEffect(() => {
      let valid = (required.every(key=> user[key] !== "") 
                    && passwordCoincide === undefined);
      setValidForm(valid)
    }, [user, passwordCoincide])

    const register = () => {
        // const mock = [
        // {"target":{"id":"1094945667","email":"seb-zab@hotmail.com","first_name":"Juan","last_name":"Gaitan","password":"p4S$word","phone_number":"3217103928"},"value":"1094945667","property":"id","children":[],"constraints":{"isIdAlreadyExist":"Id 1094945667 already exists."}},
        // {"target":{"id":"1094945667","email":"seb-zab@hotmail.com","first_name":"Juan","last_name":"Gaitan","password":"p4S$word","phone_number":"3217103928"},"value":"seb-zab@hotmail.com","property":"email","children":[],"constraints":{"isEmailAlreadyExist":"Email seb-zab@hotmail.com already exists. Choose another email."}}
        // ]
        // setFormErrors(mock);

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
            setPasswordCoincide("The passwords should match.")
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
                <TextInput handleBlur={handleBlur} id="firstName" placeholder="First Name" name="first name" errors={formErrors} length={3}></TextInput>
                <TextInput handleBlur={handleBlur} id="lastName" placeholder="Last Name" name="last name" errors={formErrors} length={3}></TextInput>
                <EmailInput handleBlur={handleBlur} id="email" errors={formErrors} ></EmailInput>
                <PasswordInput handleBlur={handleBlur} id="password" placeholder="Password" length={8} passwordConfirmation = {false} errors={formErrors} ></PasswordInput>
                <PasswordInput handleBlur={verifyPassword} id="confirmation" placeholder="Confirm your Password" length={8} errors={formErrors} passwordConfirmation = {true}></PasswordInput>
                <ErrorItem id="confirmationError" error={passwordCoincide}></ErrorItem>
                <NumberInput handleBlur={handleBlur} id="phone" placeholder="Phone" length={10} errors={formErrors} ></NumberInput>
                <NumberInput handleBlur={handleBlur} id="id" placeholder="Id Number" length={10} errors={formErrors} ></NumberInput>
            </form>
            <button id="registerButton" className="formButton" type="button" disabled={!validForm} onClick={register}>Register</button>
        </div>

    );
}
export default RegistrationComponent;