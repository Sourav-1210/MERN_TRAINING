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
// let user = {
//     firstName : "Sourav",
//     lastName : "Sharma"
// }

// let {firstName,lastName} = user;
// console.log(`${firstName} ${lastName}`);

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8];

// let arr3 = [...arr1,...arr2];
// console.log(arr3);

// let [one,two,three] = arr2;
// console.log(one,two,three);

// let person = {
//     name : "Sourav",
//     age : "21",
//     city: "Bokaro",
//     profile : [{designation:"software enginner",degree:"B.Tech"},{role:"Frontend Developer"}]
// }

// let {profile} = person;
// let [obj1,obj2] = profile;
// let {designation,degree} = obj1;

// console.log(degree);


// let user = {
//     firstName : "Sourav",
//     lastName : "Sharma",
//     age : 21,
//     posts : [
//         {title:"Post 1",comment: 10},
//         {title:"Post 2",comment: 11},
//     ],
// }

// let {posts} = user;
// let [obj1,obj2] = posts;
// let {title,comment} = obj1;

// console.log(comment);

// const user1 = {
//     id:339,
//     name:"John",
//     age:42,
//     subjects: ["HTML","CSS","Javascripts"],
//     education :{
//         degree:{
//             name:"BCA"
//         }
//     }
// }

// let {education} = user1;
// let {degree} = education;
// let {name} = degree;

// console.log(name);

// for(let i in user1){
//     console.log(i);
// }

// function Greet(name,hobby1,hobby2,hobby3){
//     return `Hi, I am ${name} and my hobbies are ${hobby1},${hobby2} and ${hobby3}`;
// }

// let ans = Greet("Sourav","sleeping","Watching web-series","travelling");
// console.log(ans);

// function Greet(...rest){
//     let [name,hobby1,hobby2,hobby3] = rest;
//     return `Hi, I am ${name} and my hobbies are ${hobby1},${hobby2} and ${hobby3}`;
// }

// let ans = Greet("Sourav","sleeping","Watching web-series","travelling");
// console.log(ans);

// let user = {
//     name: "Sourav",
//     age : 21,
//     city : "Bokaro",
//     email : "sourav@gmail.com"
// }

// let {age,...rest} = user;
// console.log(rest);


//Optional Chaining
// let person = {
//     name : "John",
//     address : {
//         city : "New York",
//         street : "123 Main St"
//     }
// }

// console.log(person?.addres?.city);

// let person = {
//     name: "Sourav",
//     // age : 21
//     city : "Bokaro"
// }

// console.log(person?.age?person.age:0);

let product = {
    name : "Laptop",
    price : 80000
}

let value = product?.price;
if(value){
    console.log(value - (0.1*value));
}else{
    console.log("Price not present");
}
