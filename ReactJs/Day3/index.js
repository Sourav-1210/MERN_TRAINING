let obj = {
    name : "Sourav",
    role : "developer",
    city : "Bokaro"
}

let data = Object.entries(obj);
console.log(data[0][1]);

let value = Object.values(obj);
console.log(value);

let keys = Object.keys(obj);
console.log(keys);