// let a = 20;
// function value(){
//     console.log(a);
// }

// value();

// function value(){
//     let a = 20;
//     console.log(a);
// }

// value();
// console.log(a);

// if(true){
//     let a = 20;
//     console.log(a);
// }

// console.log(a);

// for(let i=0;i<5;i++){
//     console.log(i);
// }
// console.log(i);

// console.log(a);
// function Print(){
//     var a = 20;
//     console.log(a);
// }
// Print();
// console.log(a);

// for(var i = 0;i<5;i++){
//     console.log(i);
// }
// console.log(i);

// for(var i = 0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }

// for(let i = 0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }

let a = "Gobal";
function Test(){
    let b = "functional value";
    if(true){
        let c = "Block scope";
        console.log(a);
        console.log(b);
        console.log(c);
    }
}

Test();