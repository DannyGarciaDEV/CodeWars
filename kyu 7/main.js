//april20
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
//nput: 42145 Output: 54421
//Input: 145263 Output: 654321
//Input: 123456789 Output: 987654321
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

  //april24 
//The code provided is supposed return a person's Full Name given their first and last names.
//But it's not working properly.
//The first and/or last names are never null, but may be empty.
//Task
//Fix the bug so we can all go home early.
class Dinglemouse{

  constructor( firstName, lastName ){
    this._firstName=firstName;
    this._lastName=lastName;
  }
  
  getFullName(){
    return `${this._firstName} ${this._lastName}`.trim();
  }
  
}

//april 26 
//Remove all exclamation marks from sentence but ensure a exclamation mark at the end
 //of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//  remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"


//   // Join all the substrings in the array back into a single string.
//   split('!')

//   // Append an exclamation mark to the end of the array `sArray`.
// push('!')

//   // Join all the substrings in the array back into a single string.
//   join('')
function remove(s){
  return  s.split('!').join('').filter('Hi!');
}


//april 27
let greet = function(name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};
  // Get the first letter of the input `name`, convert it to uppercase, and append it to the string "Hello ".
 

  // Get the rest of the input `name` starting from the second letter, convert it to lowercase, and append it to the `greeting`.
 

  // Append an exclamation mark to the end of the `greeting`.


  // Return the resulting greeting string.
//may2
//Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists 
// many boat related items. If any of these items 
// are "Fire" you must spring into action. Change any instance 
// of "Fire" into "~~". Then return the string.
function fireFight(s){
  return s.split("Fire").join('~~')
}

// may 3
//
//In this game, there are 21 sticks lying in a pile. Players take turns taking 1, 2, or 3 sticks. The last person to take a stick wins. For example:
function makeMove(sticks) {
  if (sticks === 21){
    return 1;
  } else {
    return sticks % 4;
  } 
  
}

//may 4 be with you 
// Should be easy, begin by looking at the code. Debug the code and the functions should work.

// There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)

function multi(arr) {
  return arr * arr;
}
function add(arr) {
  return arr + arr;
}
function reverse(str) {
  return str.reverse();
}



//answer 
function multi(arr) {
  return arr.reduce((a, b) => a * b)
}
function add(arr) {
  return arr.reduce((a, b) => a + b)
}
function reverse(str) {
  return str.split('').reverse().join('')
}


//may 5 
// diff represents the difference between finish and start,
//  and floor is a function that rounds down to the nearest integer. The expression floor(difff / 3)
//   computes the number of times the cat can jump three shelves, and the expression def % 3 computes the
//  number of remaining jumps that the cat can make, either one or two shelves at a time.
//hello:D
function solution(start, finish){
  const diff =  finish - start 
  return  Math.floor(diff / 3) + diff % 3
}

//may 8

function repeats(arr){
  // first filter the array to only get the items occuring once, aka filter for items where indexOf values = lastIndexOf value
   return arr
   .filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
  //  then reduce to get the sum of the two numbers
   .reduce((a, b) => a + b);
};