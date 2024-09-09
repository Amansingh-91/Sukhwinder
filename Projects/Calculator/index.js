// const allBtn = document.querySelectorAll(".btn");

// allBtn.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         e.preventDefault();
//         e.stopPropagation();
//         console.log(e.target.value);

//     })
// })

const cal = document.querySelector(".cal");
const result = document.querySelector("#result");
const eq = document.querySelector("#eq");
// console.log(result.value);
let fistInp = null;
let optr = null;
let secondInp = null;
cal.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log(e);

    if (e.target.tagName === "INPUT" && e.target.classList.contains("btn")) {
        // console.log(e);

        if (e.target.classList.contains("operation")) {
            eq.textContent += result.value + e.target.value;
            console.log(fistInp);

            if (fistInp != null  && result.value != "0") {
                secondInp = result.value;
                console.log(secondInp);

                switch (optr) {
                    case "+":
                        result.value = Number(fistInp) + Number(secondInp);
                        eq.textContent = result.value + e.target.value;
                        optr = e.target.value;
                        fistInp = result.value;
                        break;
                    case "-":
                        result.value = Number(fistInp) - Number(secondInp);
                        eq.textContent = result.value + e.target.value;
                        optr = e.target.value;
                        fistInp = result.value;
                        break;
                    case "*":
                        result.value = Number(fistInp) * Number(secondInp);
                        eq.textContent = result.value + e.target.value;
                        optr = e.target.value;
                        fistInp = result.value;
                        break;
                    case "/":
                        result.value = Number(fistInp) / Number(secondInp);
                        eq.textContent = result.value + e.target.value;
                        optr = e.target.value;
                        fistInp = result.value;
                        break;
                    case "C":
                        result.value = 0;
                        eq.textContent = "";
                        optr = null;
                        fistInp = null;
                        secondInp = null;
                        break;
                    default:
                        break;
                }
                if(e.target.value === "="){
                    fistInp = null;
                    optr = null;
                    secondInp=null;

                }
            }
            else if(fistInp != null){
                optr = e.target.value;
                eq.textContent = fistInp + optr;
            }
            else {
                console.log("in here");

                fistInp = result.value;
                optr = e.target.value;
                result.value = 0;
            }

        }
        
        else {

            if (result.value === "0") {
                result.value = e.target.value;
            }
            else {
                result.value += e.target.value;
            }
        }

    }
})

// const calculate = ()=>{

//     const operators = ['+',"-",'*',"/",'=',"C"];

//     const

// }
