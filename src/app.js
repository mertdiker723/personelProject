import Request from "./requests";
import UI from "./ui";

const request = new Request();
const ui = new UI();

//texts
const name = $("input[name=empName]");
const surname = $("input[name=surname]");
const email = $("input[name=email]");
const firstName = $("input[name=firmName]");
const department = $("input[name=department]");
const salary = $("input[name=salary]");

const form = document.getElementById("employee-form");
const updateHidden = document.getElementById("update");

eventlisteners();


function eventlisteners(){
    form.addEventListener("submit",submitInformations);
    document.addEventListener("DOMContentLoaded",uploadAllEmployees)
}

function uploadAllEmployees(e){    
  request.get()
    .then(data => {     
        ui.writeAllEmployeeToUI(data);
    })
    .catch(error => console.error(error));
}

function submitInformations(e){
    
    e.preventDefault();
}