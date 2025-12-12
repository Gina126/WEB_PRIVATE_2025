// //b1
// let userName = prompt(`Nhap ten cua ban: `);
// let userAge = prompt(`Nhap tuoi cua ban: `);
// let userAge1 = +userAge;
// console.log(typeof userAge1);
// let nextAge = userAge1 + 1;
// alert(
//   `Chào mừng ${userName.toUpperCase()}! Ten cua ban that dep, no co ${userName.length} ky tu. Nam sau ban se ${nextAge} tuoi `);

// //b2
// let ns = prompt(`Nam sinh cua ban: `);
// let date = +ns;
// let age = 2025 - date;
// if(age < 18){
//     alert(`Ban chua du tuoi`);
// }else if(age === 18){
//     alert(`Ban vua du tuoi lai xe, hay can than.`);
// }else{
//     alert(`Ban da du tuoi lai xe.`);
// }

//b3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 10; i++) {
  if (numbers[i] % 2 != 0) {
    continue;
  }
  console.log(numbers[i]);
}
