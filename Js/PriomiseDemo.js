const getData = (method, url, err, data) => {
    // how to make network request usinmg xmlhttp
    // STEP 1 create request object

    const req = new XMLHttpRequest(); // ready state 0

    // step4 looking for response

    req.addEventListener("readystatechange", () => {
        if (req.readyState === 4 && req.status === 200) {
            data(req.responseText);

        }
        else if (req.readyState === 4) {
            err("there is some error");
        }
    })
    // step 2 open a request

    req.open(method, url); // ready state 1

    // step 3  send a request

    req.send(); // ready state 2

    // ready state 3 => data download or response receiving

    // ready state 4 => response received
}

const myCallbackfunc = (resolve,reject)=>{
    // getData("GET","https://jsonplaceholder.typicode.com/todos/1",reject,resolve);
    let sum = 1;
    try {
        for (let index = 1; index < 100000000; index++) {
        
            sum =index  * hii;
        }
        resolve(sum);
    } catch (error) {
        reject(error)
    }

}

console.log(1);
let myNewPromise = new Promise(myCallbackfunc);

myNewPromise.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err,"i am aman");
})
console.log(2);