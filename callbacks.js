// coding with my instructor
// High order function - function that take another function as parameter
// callback function - function that we pass HOF as argument

// function add(num1, num2) {
//   return num1 + num2;
// }
// console.log(add(3,4))
// higher order function
function calc(num1, num2, cb){
  return cb(num1, num2);
}

// const add = (num1, num2) => num1 + num2; // this is a callback function
// const sub = (num1, num2) => num1 - num2; // this is a callback function
// const multi = (num1, num2) => num1 * num2; // this is a callback function
// const divid = (num1, num2) => num1 / num2; // this is a callback function

// console.log(calc(4, 3, add));
// console.log(calc(4, 3, sub));
// console.log(calc(4, 3, divid));

// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const result = x + y;
  cb(result);
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const result = x * y;
  cb(result);
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item) === true) {
    cb(true);
  } else {
    cb(false);
  }
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) {
      newArr.push(array[i]);
    }
  }
  cb(newArr);
}