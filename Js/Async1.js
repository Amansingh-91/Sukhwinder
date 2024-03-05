// syncronas
console.log("Asyncronas demo");


console.log(1);
console.log(2);
                                            setTimeout(()=>{
                                                for(let i = 0; i < 50000;i++){
                                                    console.log("hello");
                                                }
                                            },5000);
                                            setTimeout(()=>{
                                                for(let i = 0; i < 50000;i++){
                                                    console.log("hey");
                                                }
                                            },5000);
console.log(3);
console.log(4);
// callback
