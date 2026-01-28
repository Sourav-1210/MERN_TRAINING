// let a = {};
// let b = "pk";
// let c = NaN;

// let z = a||b||c;
// console.log(z);

// let a = 0;
// let b = "";
// let c = false;

// let ans = a||b||c;
// console.log(ans);
// let res = (null && "A") || ("" || (5 && "Hi"));
// console.log(res);

// let res = !("" ||0) && (NaN||"JS");
// console.log(res);

// let res = (undefined || ("" && 5))||(NaN && "OK") || "Final";
// console.log(res);

//Write a function named isTruthy that takes in three boolean arguments a,b,c.
//The function should return true if at one of the argument is truthy, and false other wise

// function isTruthy(a,b,c){
//     if(a ||b || c){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isTruthy("PK",0,true));

// let x = "120px";
// console.log(parseInt(x));

// console.log(true+false);
// console.log(10*"abc");

function checker(x){
    if(x === null){
        console.log("This is a null");
    }else if(x === "object"){
        console.log("This is a object");
    }else if(Array.isArray(x)){
        console.log("This is a null");
    }else{
        console.log(typeof x);
    }
}
checker(1);