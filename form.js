let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let facilitator = document.getElementById("facilitator");

let pattern1=/^[A-Za-z]+$/;
let faclist=["Josh","Chris","Fazil","Christian","josh","chris","fazil","christian"];

function validateForm(){

    let returnvalue=true;

    if (firstName.value.length <2 || lastName.value.length <2){
        document.getElementById("errorMessage").innerText="Sorry: First name and last name must contain at least two (2) characters."
        returnvalue=false;
    }

    
    else if (!(pattern1.test(firstName.value) && pattern1.test(lastName.value))){
        document.getElementById("errorMessage").innerText="Sorry: First name and last name must only contain alpha characters (A-Z and a-z)."
        returnvalue=false;
    }

    
    else if (!(faclist.includes(facilitator.value))){
        document.getElementById("errorMessage").innerText="Please input a valid facilitator name."
        returnvalue=false;
    }
    
    return returnvalue;
}