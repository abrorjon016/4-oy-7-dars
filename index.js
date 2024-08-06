
// 1-misol

// function sum(num) {
//     if (num < 0) {
//         return "Musbat son kiriting"; 
//     }
//     return Math.sqrt(num);
// }
// let res = sum(5)
// console.log(res);


//! 2-misol

// function sum(a, b) {
//     let min = a - b;
//     return min;
// }
// let res = sum(5, 4);
// console.log(res);


//* 3-misol

// function sum(str, num) {
//     let res = "";
//     for (let i = 0; i < num; i++) {
//         res += str;
//     }
//     return res;
// }
// let max = sum(5, 4);
// console.log(max);


//! 4-misol

// function sum(a) {
//     let max = a ** 3;
//     return max;
// }
// let res = sum(2);
// console.log(res);


// 5-misol

// function sum(a, b) {
//     return Math.trunc(a / b);
// }
// let res = sum(4, 2);
// console.log(res);


// 6-misol

// function sum(year) {
//     let cent = Math.trunc((year - 1) / 100) + 1;
//     return cent + "asr";
// }
// let res = sum(4051);
// console.log(res);

//* 9-misol

// function sum(str, num) {
//     if (num > str.length) {
//         return str;
//     }
//     return str.slice(0, str.length - num);
// }
// let res =sum();
// console.log(res);

// 10-misol

// function sum(str) {
//     for (let i = 0; i < str.length; i++) {
//         let num = str[i];
//         if (num < '0' || num > '9') {
//             return false;
//         }
//     }
//     return true;
// }
// let res = sum(1545);
// console.log(res);


// 11-misol

// function sum(a, b) {
//     let max = a ** b;
//     return max;
// }
// let res = sum(2, 3);
// console.log(res);


// 12-misol

// function sum(str) {
//     let num = "";
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             num += str[i];
//         }
//     }
//     return num;
// }
// let res = sum('salo m');
// console.log(res);


// 13-misol

// function sum(str1, str2) {
//     let num = str1.concat(str2)
//     return num;
// }
// let res = sum('salom', 'hayr');
// console.log(res);


// 14-misol

// function sum(str) {
//     let word = str.split(" ");
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > 0) {
//             word[i] = word[i][0].toUpperCase() + word[i].slice(1);
//         }
//     }
//     return word.join(" ");
// }
// let res = sum('salom')
// console.log(res);


// Massivlar

// 1-misol

// let arr = [1, 2, 3, 4];
// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
// console.log(sum);


// 2-misol

// let arr = [1, 2, 3, 6, 5];
// let max = arr[0];

// for (const iterator of arr) {
//     if(max < iterator){
//         max = iterator
//     }
// }
// console.log(max);


// 3-misol

// let arr = [1, 2, 3, 4, 5];
// let res = [];

// for (const iterator of arr) {
//     res.unshift(iterator)
// }
// console.log(res);


// 4-misol

// let arr = [1, -2, 3, -4, 5];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         res.push(arr[i]);
//     }
// }
// console.log(res);


// 5-misol

// let arr = [1, 2, 3, 4, 5];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] * arr[i]);
// }
// console.log(res);


// 6-misol

// let arr = [1, 2, 3, 1, 2, 3, 4, 5];
// let res = [];
// let sum = {};

// for (let i = 0; i < arr.length; i++) {
//     if (!sum[arr[i]]) {
//         res.push(arr[i]);
//         sum[arr[i]] = true;
//     }
// }
// console.log(res);


// 7-misol

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let res = arr1.concat(arr2);
// console.log(res);


// 8-misol

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for(let i = 0; i < arr.length; i++ ){
//     if(arr[i] % 2 == 1){
//         sum += 1;
//     }
// }
// console.log(sum);


// 9-misol

// let arr = [1, 2, 3, 4, 5];
// let num = 3;
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i] + num);
// }
// console.log(res);


// 10-misol

// let arr = [1, 2, 3, 6, 5];
// let max = arr[0];

// for (const iterator of arr) {
//     if(max > iterator){
//         max = iterator
//     }
// }
// console.log(max);