console.log("hello world!")

//function to add
function add(a,b){
    return a+b;

}

console.log(add(9,9));
//taking input via process.argv function in javascript
var args=process.argv.slice(2);

console.log(args);
console.log(add(parseInt(args[0]),parseInt(args[1])));
