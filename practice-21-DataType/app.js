/**
 * ## Numbers
 */

// const billionOld = 1000000000;
// const msOld = 0.000001;

// const billion = 1e9;
// const ms = 1e-6;

// const a = 0b11111111; // binary form of 255
// const b = 0o377; // octal form of 255

// /* Please note that two dots in 123456..toString(36) is not a typo. If we want
// to call a method directly on a number, like toString in the example above,
// then we need to place two dots .. after it. */
// console.log(123456.0.toString(36)); // 2n9c

// console.log(a);
// console.log(b);
// console.log(billion);
// console.log(ms);

// console.log(Math.floor(3.6), Math.ceil(3.6), Math.trunc(3.6), Math.round(3.6));
// console.log(Math.floor(-1.6), Math.ceil(-1.6), Math.trunc(-1.6), Math.round(-1.6));

// const num = 1.23456;

// console.log(Math.floor(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// console.log(num.toFixed(1)); // "12.3"

// alert(1e500); // Infinity

// alert(0.1 + 0.2 == 0.3); // false

// alert(0.1 + 0.2); // 0.30000000000000004

// // Hello! I'm a self-increasing number!
// alert(9999999999999999); // shows 10000000000000000

// alert(isNaN(NaN)); // true
// alert(isNaN('str')); // true

/**
 * ## Strings
 */

// let str = '';

// for (let i = 65; i <= 220; i += 1) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);

/**
 * ## Arrays
 */
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

const user = users.find((item) => item.id === 1);

alert(user.name); // John
