export default class Request{
    constructor(){
        this.url = "http://localhost:3000/employees";

    }

    get(){
        return new Promise((resolve,reject) => {
            fetch(`${this.url}`)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error)); 
        })
    }

    post(data){
        return new Promise((resolve,reject) => {
            fetch(`${this.url}`,{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));            
        })
    }

    // delete(id){
    //     const deleteApi = await fetch(`${this.url}/${id}`,{
    //         method:"DELETE"
    //     });
    //     const deleteJson = await deleteApi.json();

    //     return "Silme İşlemi Başarılı..";

    // }
}