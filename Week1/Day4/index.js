// function area(width,height){
//     const ans = width*height;
//     console.log(ans);
// }

// area(5,4)

// function check(n){
//     if(n%2==0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }

// check(5);

// function greet(){
//     console.log("Hello");
// }

// greet();

// function sum(number){
//     let ans = 0;
//     for(let i=0;i<number.length;i++){
//         ans+=number[i];
//     }
//     console.log(ans);
// }

// sum([1,2,3,4,5]);

// function findType(x) {

//     if (x === null) {
//         return "null";
//     }

//     if (x === undefined) {
//         return "undefined";
//     }

//     if (x === true || x === false) {
//         return "boolean";
//     }

//     if (x !== x) {   // NaN is the only value not equal to itself
//         return "number (NaN)";
//     }

//     if (x + 1 === x) {
//         return "number";
//     }

//     if (x + "" === x) {
//         return "string";
//     }

//     if (x instanceof Array) {
//         return "array";
//     }

//     if (x instanceof Object) {
//         return "object";
//     }

//     return "unknown";
// }

// function detectType(array){
//     let newArray = [];
//     for(let i=0;i<array.length;i++){
//         newArray.push(typeof(array[i]));
//     }
//     console.log(newArray);
// }

// detectType([1,"hello",true]);

// function checkObject(x){
//     if(x instanceof Object){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(checkObject(3));
