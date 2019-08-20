// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



        // GIVEN THIS PROBLEM:

        function firstItem(arr, cb) {
          // firstItem passes the first item of the given array to the callback function.
        }

        // SOLUTION:

        function firstItem(arr, cb) {
          return cb(arr[0]);
        }

        // NOTES ON THE SOLUTION:

        // firstItem is a higher order function.
        // It expects a callback (referred to as `cb`) as its second argument.
        // To test our solution, we will use the given `items` array and a variety of callbacks.
        // Note how callbacks can be declared separately, or inlined.

        // TEST 1 (inlined callback):

        firstItem(items, item => console.log(`I love my ${item}!`));
        // "I love my Pencil!"

        // TEST 2 (declaring callback before hand):

        function logExorbitantPrice(article) {
          console.log(`this ${article} is worth a million dollars!`);
        };

        firstItem(items, logExorbitantPrice);
        // "this Pencil is worth a million dollars!"



function getLength(arr, cb) {
  return cb(arr.length)
  // getLength passes the length of the array into the callback.
}
getLength(items, arrayLength => console.log(`array length is ${arrayLength}`));

getLength([1, 2, 3], length=> console.log(`Length is ${length}`));

function last(arr, cb) {
  return cb(arr[arr.length-1])
  // last passes the last item of the array into the callback.
}
last(items, lastItem => console.log(`last array item is ${lastItem}`));

function sumNums(x, y, cb) {
  return cb(x+y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
sumNums(3, 4, sum => console.log(`sum is ${sum}`));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y)
}
multiplyNums(3, 4, multiple => console.log(`multiple is ${multiple}`))

function contains(item, list, cb) {
  return cb(list.includes(item))
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
contains("Pencil", items, foundIt => console.log(foundIt))
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
