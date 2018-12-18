// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
var x = function (num) {
  if(num % 3 === 0) {
    console.log("is divisible by three");
  } else {
    console.log("is not divisible by three");
  }
}

var z = x(2)

// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

var kevin = {
  favoriteSport: "basketball",
  myHobby: "hiking",
  myCar: "honda accord"
}

console.log(kevin);

// 3. Create an array with at least 4 items inside it. Show how to access two values from the array in two different ways.

var myArray = ['CODING TIME', 4, 'LONG LIVE CODE', 7]
console.log(myArray[2]);
console.log(myArray.indexOf('CODING TIME'))


// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter.

// Input:"hooplah"
// Output:"ahhloop"

function alphabetSoup(str) {

    // your code goes here

	return str.split('').sort().join('');
}




// keep this function call here

console.log(alphabetSoup('hooplah'))

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"

function array (arr1, arr2) {
  arr1.forEach(function(value, index) {
    console.log(arr1[index], arr2[index]);
  })
}



array(nums, nouns)
