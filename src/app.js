import Request from "./requests";
import UI from "./ui";

const request = new Request();
const ui = new UI();

var self = this;
let updateState = null;
//texts
const name = document.getElementById("empName");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const firmName = document.getElementById("firmName");
const department = document.getElementById("department");
const salary = document.getElementById("salary");

document.getElementById("gender").onchange = valueBelirle;

const genderDisplay = document.getElementById("genderDataDisplay");


function valueBelirle(e){
    genderDisplay.innerHTML = e.target.value;
}

const form = document.getElementById("employee-form");
const updateHidden = document.getElementById("update");

const employeesTbody = document.getElementById("employees");

eventlisteners();


function eventlisteners(){
    form.addEventListener("submit",submitInformations);
    document.addEventListener("DOMContentLoaded",uploadAllEmployees);
    employeesTbody.addEventListener("click",deleteAndUpdate);
    updateHidden.addEventListener("click",updateOneValue);

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
            gender:genderDisplay.textContent
        })
        .then(data => ui.writeAnEmployeeToUI(data))
        .catch(error => console.error(error));
    }
    ui.cleatInputs();
    e.preventDefault();
}

function deleteAndUpdate(e){
    if(e.target.id === "delete-employee"){
        request.delete(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        .then(data => {          
            ui.deleteEmployeFromUI(e.target.parentElement.parentElement); // !!
        })
        .catch(error => console.log(error));
    }
    else if(e.target.id = "update-employee"){        

        ui.updateButtonDisplayBlok(e.target.parentElement.parentElement); // update Employee  button ına basınca kaybolsun toogle gibi olmasın
        
        
        if(updateState === null){
            updateState = {
                updateId: e.target.parentElement.previousElementSibling.textContent,
                updateParent:e.target.parentElement.parentElement
            }            
        }
        else{
            updateState = null;
        }
    }
}


function updateOneValue(e){
    const data = {
        empName:name.value,
        surname:surname.value,
        email:email.value,
        firmName:firmName.value,
        department:department.value,
        salary:Number(salary.value),
        gender:genderDisplay.textContent
    };
    request.put(updateState.updateId,data)
    .then(updatedEmp => {
        ui.updateEmployeeInUI(updatedEmp,updateState.updateParent);
        // console.log(updatedEmp);
    })
    .catch(error => console.log(error));
    
}
