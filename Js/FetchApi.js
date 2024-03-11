
// GET
fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => {
    console.log(response);
    return response.json();
})
    .then(data => {
        console.log(data);
        return fetch("https://jsonplaceholder.typicode.com/todos/2");
    })
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        return fetch("https://jsonplaceholder.typicode.com/todos/3");
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

// async await


const myFirstAsync = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // console.log(response);
    const data = await response.json();
    console.log(data);

    if(data){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    }

}

myFirstAsync();