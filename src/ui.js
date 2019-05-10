export default class UI{
    constructor(){
        this.employees = document.getElementById("employees");
        this.update = document.getElementById("update");

        this.name = document.getElementById("empName");
        this.surname = document.getElementById("surname");
        this.email = document.getElementById("email");
        this.firmName = document.getElementById("firmName");
        this.department = document.getElementById("department");
        this.salary = document.getElementById("salary");

        this.gender = document.getElementById("gender");
    }


    writeAllEmployeeToUI(data){
        
        let html = "";
        data.forEach((item) => {
            html +=`
            <tr>                
                <td>${item.empName}</td>
                <td>${item.surname}</td>
                <td>${item.email}</td>
                <td>${item.firmName}</td>
                <td>${item.department}</td>
                <td>${item.salary}</td>
                <td>${item.gender}</td>
                <td>${item.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-success">Update</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
            </tr>
            `;
        })

        this.employees.innerHTML = html;
    }
    writeAnEmployeeToUI(data){
        this.employees.innerHTML += `
        <tr>                
            <td>${data.empName}</td>
            <td>${data.surname}</td>
            <td>${data.email}</td>
            <td>${data.firmName}</td>
            <td>${data.department}</td>
            <td>${data.salary}</td>
            <td>${data.gender}</td>
            <td>${data.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-success">Update</a></td>
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
        </tr>
        `;
    }
    cleatInputs(){
        this.name.value ="";
        this.surname.value = "";
        this.email.value = "";
        this.firmName.value = "";
        this.department.value ="";
        this.salary.value = "";
    }

    updateButtonDisplayBlok(data){
        if(this.update.style.display === "none"){
            this.update.style.display = "block";
           this.addAllRowValueIntoInputs(data);
        }
        else if(this.update.style.display === "block"){
            this.update.style.display = "none";

            this.cleatInputs();
        }
    }
    
    addAllRowValueIntoInputs(data){
        const children = data.children; //htmlCollection olarak aldık

        this.name.value = children[0].textContent;
        this.surname.value = children[1].textContent;
        this.email.value = children[2].textContent;
        this.firmName.value = children[3].textContent;
        this.department.value =children[4].textContent;
        this.salary.value = children[5].textContent;
        this.gender.value = children[6].textContent;
    }

    updateEmployeeInUI(updatedEmp,value){

        value.innerHTML =
        `<tr>                
            <td>${updatedEmp.empName}</td>
            <td>${updatedEmp.surname}</td>
            <td>${updatedEmp.email}</td>
            <td>${updatedEmp.firmName}</td>
            <td>${updatedEmp.department}</td>
            <td>${updatedEmp.salary}</td>
            <td>${updatedEmp.gender}</td>
            <td>${updatedEmp.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-success">Update</a></td>
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Delete</a></td>
        </tr>`;
        this.cleatInputs();
    }

    deleteEmployeFromUI(data){
        data.remove();
    }
}