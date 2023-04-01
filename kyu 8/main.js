//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.

//monday march 13 2023
function findAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  else {
    const sum = numbers.reduce((total, num) => total + num);
    return sum / numbers.length;
  }
}

// tuesday march 14 2023
// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
   }




   //create a function to make a number return to the negative number
//wednesday 15 2023
   function opposite(number) {
    return -1 * number
   
  }

// array list with sheeps
// make a function count and a four loop to call the action everytime until stops at 17
//make a varible declaration to declare the number is equal 0
//thursday 17 march

function countSheeps(arrayOfSheep) {
  let count = 0
  for(let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) count += 1
  }
  return count
}

// multiply a function
//make the function return to call the multiplicstion everytime we call it
// friday 17 march

function multiply(a, b){


  return a * b 
    }


   // monday 20 march

   function evenOrOdd(number) {
    if(number%2 ===0) {
      return "Even";
    } else {
      return "Odd";
      
       }
    
  }


// monday 20 march 2023 
//Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

//[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
  return x.reduce((a, b)=> a * b, 1);
  }

// tuesday 21 march 2023
// debugging 

var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient'
    }
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water'
    }
  }
}


//wednesday 22 march 2023
//Given an array of integers, return a new array with each value doubled.

function maps(x){
  return x.map(n => n * 2);
}

//thursday 23 march 2023
//dot notation
//n javascript, Object is one of basic data types. Define an Object can use var obj=new Object() or var obj={}
//You can define the object attributes during initialization, like this:


function animal(obj){

 return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


//friday 24 march 2023 
function basicOp(operation, value1, value2)
{
  if (operation === '+') {
      return value1 + value2;
    } else if(operation === '-') {
      return value1 - value2;
    }  else if(operation === '*') {
      return value1 * value2;
    } else if(operation === '/'){
      return value1/value2;
    }
  }

  // monday march 27 2023
  //Complete the solution so that it reverses the string passed into it.
//'world'  =>  'dlrow'
//'word'   =>  'drow'
  function solution(str){
    return str.split('').reverse().join(''); 
  }

//tuesday march 28 2023
//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.


function removeChar(str){
  return str.slice(1, -1);
  
  };

  //Wed March 29 2023
  // makeuppercase
  //make a function with call makeuppercase
  // return that function into a method using dot notation

  function makeUpperCase(str) {
    return str.toUpperCase()
    }

  
  // Thu Mar 30 
  //Write a function that removes the spaces from the string, then return the resultant string.
  //Using split() and join() Method.
function noSpace(x){
return x.split(" ").join("")
}

//Friday 31  March 2023
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
//Array can contain numbers or strings. X can be either.
//Return true if the array contains the value, false if not.
function check(a,x){
  return a.includes(x);
};

//saturday 1 march 2023
//Implement a function which convert the given boolean value into its string representation.
//create a method that makes a bolean to a string
function booleanToString(b){
 return b.toString();
  }