import Request from "./requests";
import UI from "./ui";

const request = new Request();
const ui = new UI();

//texts
const name = document.getElementById("empName");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const firstName = document.getElementById("firmName");
const department = document.getElementById("department");
const salary = document.getElementById("salary");

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
    console.log(name);
    e.preventDefault();
}