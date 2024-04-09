// // Grouping Words by Length:

// // Given an array of strings, group the words together based on their lengths.
// // Example:
// // Input: ["apple", "banana", "grape", "orange", "pear", "kiwi"]
// // Output: [[apple], [grape, pear, kiwi], [banana, orange]]
// function group(words) {
//   let myObject = {};
//   for (let word of words) {
//     let len = word.length;
//     if (!myObject[len]) {
//       myObject[len] = [word];
//     } else {
//       myObject[len].push(word);
//     }
//   }
//   return Object.values(myObject);
// }
// let level = ["apple", "banana", "grape", "orange", "pear", "kiwi"];
// console.log(group(level));

// Find the intersection of two arrays: Given two arrays,
// find the elements that are common to both arrays.
//  For example, if the two arrays are [1, 2, 3, 4, 5] and [2, 3, 5, 6, 7],
// the intersection would be [2, 3, 5].

// function common(arr1, arr2) {
//   let myarr = arr1.filter((element) => arr2.includes(element));
//   return myarr;
// }
// let x = [1, 2, 3, 4, 5];
// let y = [2, 3, 5, 6, 7];
// console.log(common(x, y));

// Find the union of two arrays: Given two arrays, find the elements that are in either of the arrays, or in both arrays. For example, if the two arrays are [1, 2, 3, 4, 5] and [2, 3, 5, 6, 7], the union would be [1, 2, 3, 4, 5, 6, 7].

// Find the difference of two arrays: Given two arrays,
// find the elements that are in the first array, but not in the second array.
//  For example, if the two arrays are [1, 2, 3, 4, 5] and [2, 3, 5, 6, 7],
//  the difference would be [1, 4].

// function difference(a, b) {
//   return a.filter((e) => !b.includes(e));
// }
// console.log(difference([1, 2, 3, 4, 5], [2, 3, 5, 6, 7]));
