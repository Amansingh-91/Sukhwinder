
const counter = ()=>{
    let count =0;
    const inc = ()=>{
        count = count + 1;
        console.log(count);
    }
    console.log("counter ended");
    return inc;
}

const inc = counter();

inc();
inc();
inc();
inc();





