// let arr = [
//     {
//         name:"Sourav",
//         age: 21
//     },
//     {
//         name: "Shivang",
//         age:22
//     },
//     {
//         name : "Tanishk",
//         age : 21
//     }
// ]

// arr.forEach((key,value)=>{
//     console.log(key.name,key.age);
// })

// let arr = [1,2,3,4];
// let newArray = arr.map((num) => num*2);
// console.log(newArray);

// let names = ["sourav","shivang","tanishk"];
// let newNames = names.map((name)=>name.toUpperCase());
// console.log(newNames);

// let arr = [1,2,3,4];
// let newArray = arr.map((num) => num+10);
// console.log(newArray);

// let arr = ["1","2","3"];
// let newArray = arr.map((str)=> parseInt(str));
// console.log(newArray);

// let arr = [2,5,88,4];
// let newArray = arr.map((num)=>{
//     if(num%2==0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// })

// console.log(newArray);

// let arr = [1,2,1,3,3,5,"Hii","Hello",1,1];
// function counter(arr){
//     let freq = {};
//     for(let i=0;i<arr.length;i++){
//         if(freq[arr[i]]){
//             freq[arr[i]]++;
//         }else{
//             freq[arr[i]] = 1;
//         }
//     }
//     return freq;

// }

// let result = counter(arr);
// console.log(result);

// let arr = ["hello world","good day"];
// let newArray = arr.map(str =>
//     str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join("")
// )
// console.log(newArray);

// let names = ["sourav","shivang","tanishk"];
// let array = names.map(name=>name[0].toUpperCase() + name.slice(1));
// console.log(array);

// let arr = [1,5,2,88,4];
// let newArray = arr.filter(num => num%2==0);
// console.log(newArray);/

// let str = ["sourav"," ","Tanishk","      "];
// str = str.filter(name=>name.trim().length!==0);
// console.log(str);

// let users = [
//     {name : "Aman",age :"16"},
//     {name : "Riya",age :"21"},
//     {name : "Kunal",age :"17"},
//     {name : "Neha",age:"25"}
// ]

// let arr = users.filter(value => value.age>18)

// console.log(arr);

// let words = ["Hello","world","JavaScript","map","Code"];
// let arr = words.filter(str => str[0] === str[0].toUpperCase());
// console.log(arr);

// let arr = [1,2,3,4];
// let sum = arr.reduce((acc,curr) => acc+curr);
// console.log(sum);

// let arr = [1,2,3,4];
// let prod = arr.reduce((acc,curr) => acc*curr,1);
// console.log(prod);

// let arr = ["apple","banana","apple","orange","banana","apple"];
// let freq = arr.reduce((acc,curr)=>{
//     acc[curr] = (acc[curr]||0)+1;
//     return acc;
// },{});
// console.log(freq);






