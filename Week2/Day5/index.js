// console.log(this);

// function show(){
//     console.log(this);
// }
// show();

// const user = {
//     name : "Partik",
//     greet(){
//         console.log(this.name);
//     }
// }

// user.greet();

// const obj = {
//     name : "Sourav",
//     show(){
//         console.log(this.name);
//         function inner(){
//             console.log(this);
//         }
//         inner();
//     }
// }

// obj.show();

const obj = {
    name : "Alex",
    show (){
        const inner = () => {
            console.log(this);
        }
        inner();
    }
}

obj.show();