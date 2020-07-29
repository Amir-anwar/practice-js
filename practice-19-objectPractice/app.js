// const student = {
//   name: 'David Rayy',
//   sclass: 'VI',
//   rollno: 12,
// };

// let length = 0;

// for (const key in student) {
//   if (student.hasOwnProperty(key)) {
//     length++;
//   }
// }
// console.log(length);


// for (const key in student) {
//   if (student.hasOwnProperty(key)) {
//     console.log(key + ' ' + student[key]);
//   }
// }

// delete student.rollno;

// for (const key in student) {
//   if (student.hasOwnProperty(key)) {
//     console.log(key + ' ' + student[key]);
//   }
// }

// const library = [
//   {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true,
//   },
//   {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true,
//   },
//   {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false,
//   }];


// function showBooks(arr) {
//   arr.forEach((book) => {
//     let bookInfo = ``;
//     for (const key in book) {
//       if (book.hasOwnProperty(key)) {
//         bookInfo += `${key} => ${book[key]} , \n`;
//       }
//     }
//     console.log(bookInfo);
//   });
// };

// showBooks(library);

const sorted = Array(...new Set([7, -6, 6, 6, 0, -2].sort().reverse()));


console.log(sorted);
