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