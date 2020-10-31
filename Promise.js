// let completed = true;

// let PracticeJS = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(completed){
//             resolve("I have completed JavaScript.");
//         } else{
//             reject("I haven't completed learning JS yet.");
//         };
        
//     }, 3 * 1000);
// });
// console.log("Result: ", PracticeJS);

// // Result: Check in browser console 

// function makePromise(completed){
//     return new Promise(function(resolve, reject){
//         setTimeout(() => {
//             if(completed){
//                 resolve("I have completed learning JavaScript.");
//             } else {
//                 reject("I haven't completed learning JavaScript yet.");
//             };
//         }, 3 * 1000);
//     });
// };

// let learnJavaScript = makePromise(true);

// learnJavaScript.then(
//     success => console.log(success),
//     reason => console.log(reason)
// );

// // Result: I have completed Learning JavaScript.

// const createApp = (completed) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(completed){
//                 resolve("I have completed learning JavaScript.");
//             } else {
//                 reject("I haven't completed learning JavaScript yet.");
//             };
//         }, 3 * 1000);
//     });
// };

// let learnJavaScript = createApp(true);

// learnJavaScript
//     .then(success => console.log(success))
//     .catch(reason => console.log(reason))
//     .finally(() => createApp());
// // Result: I have completed Learning JavaScript.



function load(url) {
    return new Promise(function(resolve, reject){
        const request = new XMLHttpRequest();
        
        request.onreadystatechange = function(e){
            if (this.readyState === 4) {
                if(this.status === 200){
                    resolve(this.response);
                } else {
                    reject(this.status);
                }
            }
        }
        request.open("GET", url, true);
        request.send();
    });
};

const btn = document.querySelector("#btnGet");
const msg= document.querySelector("#message");
btn.onclick = function(){
    load("https://www.javascripttutorial.net/sample/promise/api.json")
    .then(
        response => {
            const result = JSON.parse(response);
            msg.innerHTML = result.message;
        },
        error => msg.innerHTML = `Error getting the message, HTTP status: ${error}`
    );
};