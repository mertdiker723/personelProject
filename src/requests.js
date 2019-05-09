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
}