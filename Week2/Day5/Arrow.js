//Pass by Value & Pass by reference

//Primivite
// let a = 20;
// console.log(a);
// let b = a;
// console.log(b);
// b = 30;
// console.log(b);
// console.log(a);

//Non-Primivitive
// let arr = [1,2,3,4];
// let arr1 = arr;
// arr1.push(5);
// console.log(arr);

//Arrow Function
// function greet(name){
//     return `Greeting from ${name}`;
// }

// console.log(greet("Sourav"));

// let greet = (name) => {
//     return `Greeting from ${name}`;
// }

// console.log(greet("Sourav"));

// let evenNumbers = (arr) => {
//     let newArray = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// console.log(evenNumbers([23,26,12,65]));

//Spread and Rest
let user = {
    firstName : "Sourav",
    lastName : "Sharma"
}

let {firstName,lastName} = user;
console.log(`${firstName} ${lastName}`);

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8];

let arr3 = [...arr1,...arr2];
console.log(arr3);

let [one,two,three] = arr2;
console.log(one,two,three);

let person = {
    name : "Sourav",
    age : "21",
    city: "Bokaro",
    profile : [{designation:"software enginner"},{degree:"B.Tech"},{role:"Frontend Developer"}]
}

let {}