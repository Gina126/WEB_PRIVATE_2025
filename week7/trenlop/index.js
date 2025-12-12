// let person = { name: "john" };
// console.log(person);

// let colors = ["red", "green", "blue"];
// console.log(colors);

// function greet() {
//   console.log("Hello!");
// }
// greet();

// let nums = [1, 2, 3];
// nums[0] = 10;
// console.log(nums);

// let nums = [1, 2, 3];
// let numbers = [1, 2, 3];

// console.log(nums == numbers); // false

// let name = "Alice";
// console.log(typeof name); //kiem tra kieu du lieu

// var x=5;
// let y=6;
// const z=7; //khai bao const phai gan gtri luon

// // var có phạm vi function
// if (true) {
//   var x = 5;
// }
// console.log(x); // 5

// // let có phạm vi block
// if (true) {
//   let y = 10;
// }
// console.log(y); // Lỗi: y is not defined

// // const không cho phép thay đổi giá trị
// const z = 20;
// z = 30; // Lỗi: Assignment to constant variable

// let a = 5;
// let b=6;
// let c=7;
// console.log(a+b+c);

// let d;
// console.log(d);
// d = 5;


// //chuoi string
// let str1 = "Hello";

// let str1 = "Hello";
// let str2 = "World";
// let space = " ";

// let fullStr = str1 + space + str2; // nối hai chuối với nhau
// console.log(fullStr); // Hello World

// let js = "JavaScript";
// console.log(js.length); // 10

//template literial (chuoi mau)
let name = "Giang";
let age = 25;
let message = `My name is ${name} and I am ${age} years old.`; //phai dung dau `
console.log(message); // "My name is John and I am 25 years old." 

//chuyen kieu du lieu string sang number
let num = "10";
let numInt = parseInt(num); //same let numInt = Number(num); | let numInt = +num;
console.log(numInt); // 10
console.log(typeof numInt); // cho ra kieu number
//chuyen thap phan sang so nguyen
let num1 = 9.81;
let numInt1 = parseInt(num1);

console.log(numInt1); // 9

//toan tu
let a=5;
let b=6;
console.log(`ket qua: ${a+b}`); //ket qua: 11

//toan tu so sanh
let x=5;
let y=`5`;
console.log(x==y); //true vi chi ss gia tri
console.log(x===y); //false vi khac kieu du lieu

//switch case
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Đây là chuối.");
    break;
  case "apple":
    console.log("Đây là táo.");
    break;
  default:
    console.log("Trái cây không xác định.");
}

//if else
let age1 = 20;
if (age1 < 15) {
  console.log("Bạn chưa đủ tuổi.");
} else if (age1 >= 15 && age1 <= 18) {
  console.log("Bạn vừa đủ tuổi.");
} else {
  console.log("Bạn đủ tuổi.");
}

//for of loop
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

//propmt() input
let name1 = prompt("Nhập tên của bạn:");

//alert() dua ttin ra man hinh
alert("Chào mừng bạn đến với JavaScript!");