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