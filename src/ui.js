export default class UI{
    constructor(){
        this.employees = document.getElementById("employees");
    }


    writeAllEmployeeToUI(data){
        
        let html = "";
        data.forEach((item) => {
            html +=`
            <tr>                
                <td>${item.name}</td>
                <td>${item.surname}</td>
                <td>${item.email}</td>
                <td>${item.firmName}</td>
                <td>${item.department}</td>
                <td>${item.salary}</td>
                <td>${item.gender}</td>
                <td>${item.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `;
        })

        this.employees.innerHTML = html;
    }
}