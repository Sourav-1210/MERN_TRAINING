// var name = "Sourav";//using double quotes
// var subject = 'Coding';//using single quotes
// var val = `Hii`; // using template literal

// let firstName ="Sourav";
// let lastName = "Sharma";

// let fullName = firstName+" "+lastName;
// console.log(fullName);

// function concat(first,last){
//     // console.log("I am "+first+" "+last+" and I am from Bokaro");
//     console.log(`I am ${first} ${last} and I am from bokaro`);
// }

// console.log(concat("Sourav","Sharma"));

// let ans = 90;
// let val = 2.9999;
// console.log(typeof(ans),typeof(val));

//Array all methods like push , pop,shift,unshift,slice,splice,includes,index of

// let array = [1,2,3,"sourav",null,Boolean,{name:"Milee"}];

// array.push("Kareena");
// console.log(array);
// array.pop();
// array.pop();

// let value = 20;
// array.unshift(value);
// console.log(array);

// for(let i=0;i<array.length;i++){
//     if(array.includes(3)){
//         console.log("true");
//         break;
//     }else{
//         console.log("false");
//     }
// }

// let result = array.slice(2,5);
// console.log(result);

// array.splice(2,5);
// console.log(array);

// let object = {
//     name : "Sourav",
//     email : "sourav@gmail.com",
//     age : 21,
//     city : "Bokaro"

// }

// console.log(object,typeof(object));
// console.log(object.city);

// object.email = "sourav9142@gmail.com"
// console.log(object);

// object["skill"] = "coding";
// console.log(object);

// console.log(object["skill"]);

// delete object.email;

// console.log(object);

// let string = "sourav";
// for(let i=string.length;i>=0;i--){
//     console.log(string[i]);
// }

// let a;
// console.log(a,typeof a);

// let b = null;
// console.log(b,typeof b);

// let obj = {name : "john"};
// console.log(obj, typeof obj);

// function checkUndefined(x){
//     if(x === undefined){
//         return true;
//     }else{
//         return false;
//     }
// }
// let x = null;
// console.log(checkUndefined(x));

// console.log(!null);

let obj = {name: "Sourav"}
let x = null;

function check(x){
    if(x === null){
        console.log("This is null variable");
    }else if (x instanceof Object){
        console.log("This is a object");
    }else{
        console.log("Invalid");
    }
}

check(x);
check(obj);