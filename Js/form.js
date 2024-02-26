console.log("in form");

// select form

const myForm = document.querySelector("form");
const password = document.querySelector("#password");

console.log(myForm);

const handleSubmitForm = (e)=>{
    e.preventDefault();
    // console.log("Handeling form submit");\
    const email = e.target[0].value;
    const password = e.target[1].value
    console.log(email);
    console.log(password);
    

    // backend 

    if(email === "aman@123.com" && password === "123456789a"){
        console.log("Successfully logged in");
    }
    else{
        console.log("invalid username or password");
    }

}

myForm.addEventListener("submit",handleSubmitForm);

const handleValidation = (e)=>{
    
    if(e.target.value.length  <8){
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
    }
    else{
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
    }
}

password.addEventListener("keyup",handleValidation)