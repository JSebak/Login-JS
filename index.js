
document.addEventListener("DOMContentLoaded",() =>{
    const createAccountForm = document.querySelector("#registerForm");
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const fnError  = document.getElementById('firstNameError');
    const lnError = document.getElementById('lastNameError')
    firstName.addEventListener("blur",(event)=>
        {
            Validate(firstName, fnError);
        }
    );

    lastName.addEventListener("blur",(event)=>
        {
            Validate(lastName, lnError);
        }
    )
})
function Validate(element, errorElement) {
    if (!validateNames({ name: element.innerHTML })) {
        setInputError(errorElement, "This field must be at least 10 characters in length");
    }
    else {
        removeInputError(errorElement);
    }
}

function validateInput(){

}
function validateNames ({name}){
    if(name.length > 10)
    {
        return true;
    }
    return false;
}
function setInputError(element, message){
    element.innerHTML = `${message}`;
}
function removeInputError(element){
    element.innerHTML = ""
}