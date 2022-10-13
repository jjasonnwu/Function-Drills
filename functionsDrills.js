/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

const { is } = require("express/lib/request");

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */ 

/* function sayHello() {
  console.log('hello world')
}
sayHello();

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

/*

function print(message) {
  console.log(message)
}
print('console.log')

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

/*
function printMessage(message) {
  console.log("Today's message is:" + message)
}
print("to not give up")                // not printing 'Today's message is:' 

/*

 * Prompt 4:
 *
 * Fix the following function:        // fixed
 */

/** Starter Code */

/* 
function variableCount(a) {
  return a ** 2
}
const numOfVariables = variableCount(5)
console.log(numOfVariables)

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

/* 
function reverseMessage(message) {        // reversing string with decrementing for loop
  var newMessage = "";
  for (var i = message.length - 1; i >=0; i--) {
    newMessage += message[i];
  }
  return newMessage;
}
reverseMessage('howdy')          // string not printing :s 

/*

 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */

/*
function multiply(a,b) {
  console.log(a * b)
}
multiply(5,7)              


/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */

/*
var makePerson = function (firstname, lastname) {
  return {
firstname: firstname,
lastname: lastname,
wholename: firstname + lastname
}
};

var object = makePerson('Zakk','F')
var object = makePerson('Jimmy','B')
         // stuck, not running :s

/*
 * Prompt 8:                                :SSSSSS
 *
 * Write a function that returns an object. The object can be anything.
 */

/*
function makePerson(name1,age1) {
var name = name;
var age = age;

return {
  name:name,
  age:age
};
}

/*
                 :sssssss
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */

/*                
function arrayFromArgs() {
  return Array.from(arguments);
}

console.log(arrayFromArgs(0,'Z'));

/*

 * Prompt 10: :sssssssssss
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */

/*
function sum() {
let sum = 0;
for(let i = 0;i<arguments.length;i++){
  sum += arguments[i];
}
  return sum;
}
sum(1,2);
sum(2,3);
sum(3,4);
sum(4,5);

/*

 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */

/*
function totalCount(amount) {
  var total = 0;
  for (i = 0; i < amount.length; ++i) {
       total += amount[i];
  }
}

/*

 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */

/*
function getAllWords(str) {

  var array = [];
   for (var i = 0; i < str.length; i++) {
      array.push(str[i]);
    }
    return array;
    }
 
    getAllWords('I cannot wait for the light at the end of the tunnel');

    /*

 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
// testFunc()()

/*
function expression(string) {
    console.log(string)
}
expression('this works!')

/*
 
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */

/*
function add(a, b) {
  return a + b
}
const addition = add(0,2);
console.log(addition)
const addTogether = add(1,3);
console.log(addTogether)

/*

 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

/*
function statement () {
  const a = 'hello';
  return function (b) {
    console.log(a + b)
  }
}

statement()(' world');

*/







