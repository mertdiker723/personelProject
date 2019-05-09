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
                <td>${item.FirmName}</td>
                <td>${item.department}</td>
                <td>${item.Salary}</td>
                <td>${item.Gender}</td>
                <td>${item.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
            `;
        })

        this.employees.innerHTML = html;
    }
}