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

console.log(1);
getData("GET", "https://jsonplaceholder.typicode.com/todos/1", (err) => {
    console.log(err);
}, (data) => {
    const result = JSON.parse(data);
    console.log(result);
});
console.log(2);

getData("GET", "https://jsonplaceholder.typicode.com/todos/2", (err) => {
    console.log(err);
}, (data) => {
    const result = JSON.parse(data);
    console.log(result);
});
console.log(3);

getData("GET", "https://jsonplaceholder.typicode.com/todos/3", (err) => {
    console.log(err);
}, (data) => {
    const result = JSON.parse(data);
    console.log(result);
});
// getData("GET","https://jsonplaceholder.typicode.com/todos/2");
// getData("GET","https://jsonplaceholder.typicode.com/todos/3");
