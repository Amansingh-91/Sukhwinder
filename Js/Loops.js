// let startPoint = prompt("From where you want me to start counting");
// let endPoint = prompt("Where you want me to stop counting");
// 1 to 10
// console.log("number "+1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(startpoint;end cond;inc/dec){
//  code to be repeated
// }
// if(startPoint >= endPoint){
//     for(let i = startPoint; i >= endPoint ;i--){
//         console.log("number " + i);
//     }
// }
// else{
//     for(let i = startPoint; i <= endPoint ;i++){
//         console.log("number " + i);
//     }
// }

// entry point 

// for(let i = 1; i <= 5 ;i++){    // sp = 1  => 1 <=5 => number 1 => i++ => 2
//     console.log("number " + i); // sp = 2  => 2 <=5 => number 2 => i++ => 3
// }                               // sp = 3  => 3 <=5 => number 3 => i++ => 4
                                // sp = 4  => 4 <=5 => number 4 => i++ => 5
                                // sp = 5  => 5 <=5 => number 5 => i++ => 6
                                // sp = 6  => 6 <=5 => exit

// while loop syntax
// 
// startpoint
// while (end condition) {
        // code
        // inc/dec
// }

// let start = "yes";

// while(start === "yes"){
//     console.log("i am running");

//     start = prompt("should I continue Running");
// }

// Do while loop  ==> exit point loop

// start 
// do{
    // code
    // inc/dec
// }while(condition);

// for => where we know how many times we have repeat the task (fixed range/no. of times)
// while => when we know task is repetive but we don't know how many times we have repeat it
// do while => when you have to repeat task atleast once
// let start = "no";
// do{
//     console.log("is running");
//     start = prompt("should I continue Running");
    
// }while (start == "yes")
// aman:
// while(true){
//     let language = prompt(`press 1 for english\npress 2 for hindi`);
//     switch(Number(language)){
//         case 1:
//             alert("english selected");
//             let nextOption = prompt(`press 1 for balance\npress 2 for data \npress 3 for customer Care `);
//             i++;
//             switch (Number(nextOption)) {
//                 case 1:
//                     alert("your balance is rs 50.")
//                     break;
//                 case 2:
//                         alert("your balance is 50 MB.")
//                         break; 
//                 case 3:
//                     alert("Connecting to customer care ")
//                     break;       
//                 default:
//                     i--;
//                     alert("Wrong choice");
//                     break;
//             }
//             break;
//         case 2:
//             i++;
//             alert("hindi selected");
//             nextOption = prompt(`press 1 for balance\npress 2 for data \npress 3 for customer Care `);
//             switch (Number(nextOption)) {
//                 case 1:
//                     alert("your balance is rs 50.")
//                     break;
//                 case 2:
//                         alert("your balance is 50 MB.")
//                         break;        
//                 default:
//                     i--;
//                     alert("Wrong choice");
//                     break;
//             }
//             break;
//         default:
//                 alert("Wrong choice");
//                 // labeled break
//                 break aman;
//     }

// }

// Jump statements
// break => switch case and loop
// continue => loops
// return

// Dry Run\\
// aman:
// for (let index = 0; index <5; index++) {
//     for(let j = 0 ; j <5 ;j++){
//         console.log(j);
//         break aman;
//     }
//     console.log("inner");
// }

for (let index = 0; index < 5; index++) {
    if(index === 3){
        continue;
    }
    console.log(index);
    
}