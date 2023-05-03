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