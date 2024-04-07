// PRIMITIVE DATA TYPES

//String, number, boolean, BigInt, Null, undefined, Symbol 

let = 'Crystal';
let num = 12;
let isSubscribed = true;
let outTemperature = null ;
let name;

const Id = Symbol('123');
const deptId  = Symbol('123');

// console.log(Id === deptId); // considers it as unique values so outpt is false

let bigNum = 324235246546346463n;

// NON PRIMITIVE DATA TYPES (REFERENCE DATA TYPES)

// Arrays, objects , function

const arr = ['value1', 'value2', 'value3'];

let myObject ={
    name : 'Crystal',
    age : 22
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof arr); // object
console.log(typeof myObject); //object
console.log(typeof myFunction); // function

console.log(typeof Id); // symbol
console.log(typeof bigNum); // bigInt
 