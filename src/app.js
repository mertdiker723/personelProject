import Request from "./requests";
import UI from "./ui";

const request = new Request();
const ui = new UI();

let array;
//texts
const name = document.getElementById("empName");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const firmName = document.getElementById("firmName");
const department = document.getElementById("department");
const salary = document.getElementById("salary");

let gender = document.getElementById("gender").onchange = valueBelirle;

function valueBelirle(e){
    console.log(e.target.value);
}




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
  
    if(name.value === "" || surname.value === "" || email.value === "" || firmName.value === "" || department.value === "" || salary.value === ""){
        window.alert("Lütfen Alanları Doldurunuz..!");
    }
    else{
        request.post({
            empName:name.value,
            surname:surname.value,
            email:email.value,
            firmName:firmName.value,
            department:department.value,
            salary:Number(salary.value),
            gender:gender
        })
        .then(data => ui.writeAnEmployeeToUI(data))
        .catch(error => console.error(error));
    }
    
    e.preventDefault();
}