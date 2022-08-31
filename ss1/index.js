//1. Thế nào là cơ chế hoisting trong Javascript:
//  Hoisting là cơ chế mặc định của JavaScript để di chuyển tất cả
//  các biến và hàm khi khai báo lên đầu scope trước khi chúng được thực thi.

// 2. Một file Javascript khi chạy trải qua mấy giai đoạn?Các giai đoạn đó là giai đoạn gì?

// Js khi chạy trải qua 2 giai đoạn : Khởi tạo và thực thi

// 4.Không chạy đoạn code sau, phán đoạn output của các câu lệnh console.log()

// console.log(`1. ${age}`); //undefined ( var có giá trị khởi tạo là undefined)
// var age = 20;
// console.log(`2. ${age}`); // 20 (giá trị khởi tạo var age = 20;)
// let firstName = "Peter";
// let lastName = "Parker";
// const yearOfBirth = "1995";
// console.log(`3. ${calAge(yearOfBirth)}`); // 27 (chuyền giá trị khởi tạo yearOfBirth vào thay year =>> return trả về 2022-1995 =27)
// // Function declaration
// function calAge(year) {
//   return 2022 - year;
// }
// console.log(`4. ${calAge(yearOfBirth)}`); // 27 (Đã được thực thi ở trên)

// console.log(`5. ${getFullName(firstName, lastName)}`); // error (let const trong global không có giá trị khởi tạo  => error)
// // Function expression
// var getFullName = function (firstName, lastName) {
//   return `${firstName} ${lastName}`;
// };
// console.log(`6. ${getFullName(firstName, lastName)}`); // comfin 5 => Perter Parker (Vì giá trị khởi tạo var getFullName = function )

// 5. Không chạy đoạn code sau, phán đoạn output của các câu lệnh console.log()

// console.log(age); // error (  không có giá trị khởi tạo  ở trên nên ko thực thi được)

// let age = 27;

// console.log(age); // 27 (Đã có giá trị khởi tạo ở trên nên được thực thi)

// {
//   console.log(firstName); // error ( let Không có giá trị khởi tạo ở trên)
//   console.log(age); //error (let Không có giá trị khởi tạo ở trên)
//   console.log(age); // error (const Không có giá trị khởi tạo ở trên)

//   let firstName = "Peter";
//   let lastName = "Parker";
//   const job = "Spider man";

//   console.log(firstName); // => Peter (Đã có giá trị khởi tạo ở trên nên được thực thi)
//   console.log(lastName); // => Parker  (Đã có giá trị khởi tạo ở trên nên được thực thi)
//   console.log(job); // => Spirder man (Đã có giá trị khởi tạo ở trên nên được thực thi)
// }

// 6. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()

// a = 2;
// var a;
// console.log(a); // => 2 ( vì ở trên ta đã gán cho a có giá trị = 2)

// 7. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()

// console.log(a); // Undefined (Giá trị khởi tạo var chưa được gán ở trên => undefined)
// var a = 2;

// 8. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()

// var a = 10;
// function foo() {
//   var a;
//   console.log(a); //=> underfine ( Giá trị khởi tạo trong function var chưa có giá trị => undefined)
//   a = 2;
// }
// foo();

// 9. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()

// foo();
// var foo();
// function foo() {
//   console.log(1);
// }
// foo = function () {
//   console.log(2);
// };
// ==>> error
//10. Không chạy đoạn code sau, phán đoán output của các câu lệnh console.log()

//  var foo();
// function foo() {
//     console.log(1);
//     }
//     foo = function() {
//     console.log(2);
//     }
// foo();
//==>> error

// 11. Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array

// function removeEnd(arr, n) {
//   // logic code
//   for (let i = 0; i < n; i++) {
//     arr.pop();
//   }
//   return arr;
// }
// console.log(removeEnd([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

// 12. Viết 1 chương trình trả về n phần tử đầu tiên có trong 1 array

// function first(arr, n) {
//   // logic code

//   arr.splice(n, arr.length - n);

//   return arr;
// }
// console.log(first([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

// 13. Cho một mảng
// const users = [
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",

//     age: 100,
//   },
// ];

// // // // Sử dụng phương thức map() của array, tạo một array mới với các phần tử con ở trong
// // // // có name nằm trong các thẻ h1, age nằm trong các thẻ h2

// var newUserH1 = users.map(function (Username) {
//   return (users.name = `<h1>${Username.name}</h1>`);
// });
// console.log(newUserH1);
// var newUserH2 = users.map(function (userage) {
//   return (users.age = `<h2>${userage.age}</h2>`);
// });

// 14 .Vẫn sử dụng mảng cho sẵn ở bài 13, sử dụng phương thức map() của array, tạo ra một
//      mảng mới chỉ chưa tên của các phần tử object con nằm trong mảng lớn.

// const users = [
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",

//     age: 100,
//   },
// ];

// var newName = users.map(function (newName) {
//   return newName.name;
// });
// console.log(newName);

// var newAge = users.map(function (newAge) {
//   return newAge.name;
// });
// console.log(newAge);

//15 .Viết một hàm triple() trả về một số đã được nhân 3
// Sử dụng phương thức map của array, viết hàm multiply() nhận vào một mảng và
//  trả về mảng mới với các số đã được nhân 3. Sử dụng hàm triple để nhân 3 các số đó.

// function triple(number) {
//   return number * 3;
// }
// let arr = [1, 3, 2, 4, 5, 6, 7, 8, 9];
// var newArr = arr.map(function multiply(arr) {
//   return triple(arr);
// });
// console.log(newArr);

// 16. Sử dụng hàm filter của array. Viết một hàm nhận vào một mảng số ngẫu nhiên, hàm đó
// trả về một mảng mới chỉ chứa các phần tử lớn hơn 5

// var number = [1, 2, 4, 6, 7, 8, , 9, 45, 64, 34, 75];
// var newNumber = number.filter(function (newNumber) {
//   return newNumber > 5;
// });
// console.log(newNumber);

// // 17. Cho mảng sau

// var members = [
//   { name: "Lan", gender: "female" },
//   { name: "Linh", gender: "female" },
//   { name: "Trung", gender: "male" },
//   { name: "Peter", gender: "gay" },
// ];

// // Viết một hàm nhận đầu vào là mảng trên, sử dụng phương thức filter của array, trả về
// // một mảng mới chỉ chữa những phần tử object có gender là female

// var members_gender = members.filter(function (members) {
//   return members.gender == "female";
// });
// console.log(members_gender);

//18.18. Viết một hàm nhận vào một mảng số tự nhiên, sử dụng find method của array trả về số
//      chẵn đầu tiên của mảng đó, nếu không tìm thấy trả về undefined

// number = [1, 2, 3, 4, 5, 6, 7, 8];
// var arrr = number.find((element) => element % 2 == 0);
// console.log(arrr);

// 19.Viết một hàm nhận vào 2 tham số, tham số đầu tiên là một mảng số tự nhiên, tham số
// thứ 2 là số cần chia hết. Sử dụng find method của array, trả về số đầu tiên trong mảng
// đầu vào chia hết cho tham số thứ 2. Nếu không tìm thấy trả về undefined

// function findDivisibleNum(array, x) {
//   // logic code

//   return array.find((array) => array % x == 0);
// }

// console.log(findDivisibleNum([1, 3, 4, 5, 6, 7, 8, 9], 2));

//20.
// Viết một hàm nhận vào một mảng ngẫu nhiên. Sử dụng phương thức reduce của array,
// trả về object mới với các phần tử trong mảng là key, và value sẽ là số
// lần xuất hiện của chúng ở trong mảng

// Input:
// countOccurrences(['a', 'b', 'c', 'b', 'a'])
// Expected output:
// { a: 2, b: 2, c: 1 };

// const arr = ["a", "b", "c", "d", "e", "a", "b"];

// 21. Viết một hàm nhận vào một mảng 2 chiều, sử dụng phương thức reduce và trả về một mảng một chiều chứa toàn bộ những phần tử con trong các mảng con

// Input:
// flatternArr([['a', 'b'], ['c', 'b', 'a']])
// Expected output:
//  ['a', 'b', 'c', 'b', 'a']

// 22. Viết một hàm nhận vào một mảng số gồm 2 số. Tính tổng của các số tự nhiên trong khoảng 2 số đó

// Input:
// sum([1, 4])
// Expected output:
// 10
// Input:
// sum([4, 1])
// Expected output:
// 10

function tongSoTuNhien(arrr) {
  for (let i = arrr[0]; i < arrr[1]; i++) {
    i = i + i;
  }
}
console.log(tongSoTuNhien([2, 5]));
