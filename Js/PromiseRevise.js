// console.log("task 1");
// console.log("task 2");
// let marks = Math.round(Math.random() * 100);
// if (marks > 60) {
//     console.log("lets go and buy cycle");
// }
// else {
//     console.log("you can not go for playing with friends anymore");
// }
// console.log("task 4");
// console.log("task 5");

// using promise
console.log("task 1");
console.log("task 2");
const task3Promise = new Promise((resolve, reject) => {
    let marks = Math.round(Math.random() * 100);
    if (marks > 60) {
        resolve(marks);
    }
    else {
        reject("repeat class");
    }

});

// task3Promise.then((response) => {
//     console.log(response);
//     let collegePromise = new Promise((resolve, reject) => {
//         let cutOffMarks = Math.round(Math.random() * 100);
//         if (response > cutOffMarks) {
//             resolve(response);
//         }
//         else {
//             reject("apply in some other college");
//         }
//     })

//     collegePromise.then((data) => {
//         console.log(data);
//         let scholarshipPromise = new Promise((resolve, reject) => {
//             let cutOffScholarship = Math.round(90);
//             if (data > cutOffScholarship) {
//                 resolve("will get scholarship");
//             }
//             else {
//                 reject("no scholarship for you");
//             }
//         })

//         scholarshipPromise.then(data=>{
//             console.log(data);
//         }).catch(err=>{
//             console.log(err);
//         })
//     }).catch(err => {
//         console.log(err);
//     })

// }).catch((err) => {
//     console.log(err);
// })


task3Promise
    .then((response) => {
        console.log(response);
        return new Promise((resolve, reject) => {
            let cutOffMarks = Math.round(Math.random() * 100);
            if (response > cutOffMarks) {
                resolve(response);
            }
            else {
                reject("apply in some other college");
            }
        });
    })
    .then((data => {

        console.log(data);
        return new Promise((resolve, reject) => {
            let cutOffScholarship = Math.round(90);
            if (data > cutOffScholarship) {
                resolve("will get scholarship");
            }
            else {
                reject("no scholarship for you");
            }
        })
    }))
    .then(data => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
console.log("task 4");
console.log("task 5");

