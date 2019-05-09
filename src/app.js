import Request from "./requests";
import UI from "./ui";

const request = new Request();
const ui = new UI();

const form = document.getElementById("employee-form");
const updateHidden = document.getElementById("update");

eventlisteners();


function eventlisteners(){
    form.addEventListener("submit",submitInformations);
    document.addEventListener("DOMContentLoaded",uploadAllEmployees)
}

function uploadAllEmployees(e){
  request.get()
    .then(data => ui.writeAllEmployeeToUI(data[0]))
    .catch(error => console.log(error));
}

function submitInformations(e){
    
    e.preventDefault();
}