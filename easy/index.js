// console.log("hello world");
//************************************************************************************
// 1. Print all even numbers from 1 – 10
//*************************************************************************************
// for(let i=1; i<=10; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//************************************************************************************
// 2. Print a table containing multiplication tables
//************************************************************************************
//   const tableOf = 5;
//   for (let i = 1; i <= 10; i++) {
//     let multiplication = `${tableOf} * ${i} = ${tableOf * i}`;
//     console.log(multiplication);
//   }

//************************************************************************************
// 3. Calculate the sum of numbers within an array
//************************************************************************************

//   const array = [2, 3, 4, 5, 6, 7, 8, 9];
//   let sum = 0;
//   for (let i = 0; i <= array.length - 1; i++) {
//     // console.log(array[i]);
//     sum = sum + array[i];
//   }
//   console.log(sum);

//************************************************************************************
//4. Create a function that reverses an array
//************************************************************************************
//   const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   function reversesArray() {
//     for (let i = array.length; i >= 0; i--) {
//       console.log(array[i]);
//     }
//   }
//   reversesArray();

//************************************************************************************
// 5. Return a Boolean if a number is divisible by 10
//************************************************************************************

// const number = prompt("enter a number");
// if (number % 10 == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//************************************************************************************
// 6. Return the number of vowels in a string
//************************************************************************************
// const myName="my name is rupali sharma"
// const vowels=/[aeiou]/g;
// console.log(myName.match(vowels).length);

//************************************************************************************
// 7. Create a function that filters out negative numbers from an array
//************************************************************************************

// function filterOutNagative(array) {
//   for (i = 0; i <= array.length - 1; i++) {
//     if (array[i] > 0) {
//       console.log(array[i]);
//     }
//   }
// }
// filterOutNagative((array = [3, 4, 6, 7, -4, 6, -2, -83]));

//************************************************************************************
//8. Remove the spaces found in a string
//************************************************************************************

// const str = "hello            world";

// console.log(str.split(" ").join(""));

// let newStr = "";
// for (i = 0; i <= str.length - 1; i++) {
//   if (str[i] !== " ") {
//     newStr = newStr + str[i];
//   }
// }
// console.log(newStr);

//************************************************************************************
//9. Calculate the sum of numbers from 1 to 10
//************************************************************************************

// let sum=0;
// let sumOfNumber=5
// for(i=0; i<=sumOfNumber; i++){
//   sum=sum+i;
// }
// console.log(sum);

//************************************************************************************
//10. Calculate the sum of odd numbers greater than 10 and less than 30
//************************************************************************************
// const num = 30;
// let sum = 0;
// for (i = 11; i < num; i++) {
//   if (i % 2 !== 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

//************************************************************************************
//11. Create a function that will convert from Celsius to Fahrenheit
//************************************************************************************

// function Celsius(c) {
//   const Fahrenheit = c * (9 / 5) + 32;
//   console.log(Fahrenheit);
// }
// Celsius(3);

//************************************************************************************
//12. Reverse a string
//************************************************************************************

// const str = "hello world";
// console.log(str.split('').reverse().join(''));
// let reverseStr = "";
// for (i = str.length - 1; i >= 0; i--) {
//   reverseStr = reverseStr + str[i];
// }
// console.log(reverseStr);

//************************************************************************************
//13. Remove duplicate item from an array
//************************************************************************************

// let array = [112, 876, 112, 2, 2, 44, 55, 55, 44];
// console.log(array);
// console.log(...new Set(array));

// let uniqueArray = array.filter(
//   (item, index) => array.indexOf(item) === index
// );

// console.log(uniqueArray);

//************************************************************************************
//14. Create a converter function for  centimetre to metre
//************************************************************************************

// function centimetre(cm){
//      return cm/100
// }
// console.log(`cm = ${centimetre(2)}`);

//************************************************************************************
// 15. Create a length converter function
//************************************************************************************

//************************************************************************************
//16. Convert Minutes into Seconds
//************************************************************************************

// function hello(minutes) {
//   return second = minutes * 60;
// }
// hello(2);
// console.log(second);

//************************************************************************************
//17. Return the Next Number from the Integer Passed
//************************************************************************************

// function number(num) {
//   return num + 1;
// }
// console.log(number(3));
// console.log(number(9));
// console.log(number(-3));

//************************************************************************************
//18. Area of a Triangle
//************************************************************************************

// function areaOfTriangle(h, b) {
//   return (h * b) / 2;
// }
// console.log(areaOfTriangle(7, 7));

//************************************************************************************
//19. Maximum and minimum of an array
//************************************************************************************
// let array = [3, 2, 1, 666, -4, -666];
// let min = Infinity;
// let max = -Infinity;
// for (ele of array) {
//   if (ele < min) {
//     min = ele;
//   } else if (ele > max) {
//     max = ele;
//   }
// }
// console.log(min);
// console.log(max);

//************************************************************************************
//20. find whether the age of a person lies between 10 and 20
//************************************************************************************

// const age = prompt("enter your age");
// if (age > 10 && age < 20) {
//   console.log("your age lies between 10 and 20");
// } else {
//   console.log("your age doesnt lies between 10 and 20");
// }

//************************************************************************************
//21. switch statement
//************************************************************************************

// const age = prompt("enter your age");
// switch (age) {
//   case "12":
//     console.log("your age is 12");
//     break;
//   case "25":
//     console.log("your age is 25");
//     break;
//   case "50":
//     console.log("your age is 50");
//     break;
//   default:
//     console.log("your age is not spacial");
// }

//************************************************************************************
//22. ternary oprator
//************************************************************************************

// const age = prompt("enter your age");
// age > 18
//   ? console.log("you can able to drive")
//   : console.log("you can not able to drive");
// let a = age > 18 ? "you can able to drive" : "you can not able to drive";
// console.log(a);

//************************************************************************************
//23. How Much is True?
//************************************************************************************

// const array = [true, false, false, true, false, true];
// let count = 0;
// for (ele of array) {
//   if (ele == true) {
//     count++;
//   }
// }

//************************************************************************************
//24. Function Factory
//************************************************************************************

// function mobile(modal_no) {
//   return {
//     modal: modal_no,
//     price: function () {
//       return "price is 3000";
//     },
//   };
// }
// var sumsung = mobile("galaxy");
// let nokia = mobile("3310");
// console.log(sumsung.modal, sumsung.price());
// console.log(nokia.modal, nokia.price());

//************************************************************************************
//25. sum of positive
//************************************************************************************

// let array = [1, 2, 3, 2, 2, -1, -5];
// let sumOfPositive = 0;
// for (i = 0; i <= array.length - 1; i++) {
//   // console.log(array[i]);
//   if (array[i] > 0) {
//     sumOfPositive = sumOfPositive + array[i];
//   }
// }
// console.log(sumOfPositive);
