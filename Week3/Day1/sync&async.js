//Synchronous
//Synchronous code runs step by step and waits for each task to finish;

//Asynchronous
//Asynchronous code runs tasks in background without stopping main program

// console.log("A");
// console.log("B");

// for(let i = 0;i<1000000000;i++){
//     if(i===999999999){
//         console.log("I am taking longer time");
//     }
// }

// console.log("C");

// console.log("A");
// setTimeout(()=>{
//     console.log("B");
// },0)
// console.log("C");

// while(true){
//     console.log("I am running");
// }

// console.log("Hello");

// setTimeout(()=>{
//     console.log("Loading Done")
// },3000);
// console.log("User can work")/
// let i = 0;
// const intervalID = setInterval(()=>{
//     console.log(i);
//     i++;
//     if(i>5){
//         clearInterval(intervalID);
//     }
// },1000)

// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

function runAfterStackClear(callback) {
  setTimeout(callback, 0);
}

console.log("Start");

runAfterStackClear(() => {
  console.log("Callback executed after call stack is clear");
});

console.log("End");



