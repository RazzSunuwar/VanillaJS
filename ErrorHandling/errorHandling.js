// Error handling
/* if a promise resolves normally, then await promise returns. But in the case of a rejection, it throws
the error, just as if there were a throw statement at that line. */

// async function f() {
//     await Promise.reject(new Error("Whoops!"));
// }

// ...is the same as this:

// async function f() {
//     throw new Error("Whoops!");
// }

/* In the situations, the promise may take some time before it rejects. In that case
there will be a delay before await throws an error.
We can catch that error using try...catch, the same way as a regualar throw: */

/* In real situations, the promise may take some time before it rejects. In that case 
there will be a delay before await thows an error.
We can catch that error using try..catch, the same why as a regular throw: */

// async function f() {
//     try {
//         let response = await fetch('http://no-such-url');
//     } catch(err){
//         alert(err); //TypeError: failed to fetch
//     }
// }
// f();

// In case of an error, the control jumps to the catch block. We can also wrap multiple lines:
// async function f() {

//     try {
//         let response = await fetch('/no-user-here');
//         let user = await response.json();
//     }catch(err){
//         // catches errors both in fetch and response.json
//         alert(err);
//     }
// }
// f();

/* If we don't have try...catch, then the promise generated by the call of the 
async function() becomes rejected. We can append  .catch to handle it: */


// async function f() {
//     let response = await fetch('http://no-such-url');
// }
// // f() becomes a rejected promise
// f().catch(alert); //TypeError: failed to fetch // (*)
// /*If we forget to add .catch there, then we get an unhandled promise error (viewable in the console). 
// We can catch such errors using a global unhandledrejection event handler. */
