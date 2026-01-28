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

let arr = [1,2,1,3,3,5,"Hii","Hello",1,1];
function counter(arr){
    let freq = {};
    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]]++;
        }else{
            freq[arr[i]] = 1;
        }
    }
    return freq;

}

let result = counter(arr);
console.log(result);