export default class UI{
    constructor(){
        this.employees = document.getElementById("employees");

        this.name = document.getElementById("empName");
        this.surname = document.getElementById("surname");
        this.email = document.getElementById("email");
        this.firmName = document.getElementById("firmName");
        this.department = document.getElementById("department");
        this.salary = document.getElementById("salary");
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
    
    deleteEmployeFromUI(data){
        data.remove();
    }
}