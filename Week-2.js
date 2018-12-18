// 1. Write an anonymous function that takes one argument of type array and returns the contents of that array in reverse order.

var testCase = ["one", "two", "three", "four"]

var reverseArray = function(list) {
  // ... your code here
  return list.reverse()
}

console.log(reverseArray(testCase))

// expected output: ["four", "three", "two", "one"]

// 2. Given the object below, fill in how to find specific information:

var bicycle = {
  type: "Roadbike",
  gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
  wheels: {
    count: 2,
    specs: ["road tires", "AX-7563", "80-115 PSI"],
    brand: "Trek"
  }
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log just the bell from the list of gear
console.log(bicycle.gear[2])

// Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])

// 3. Write a function that takes two arguments, a string and an individual letter. The function should return a count of how many times the letter appears in the string.
function charCount(str, letter) {
  var letterCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

// examples:

console.log(charCount("Hello World", "l"))
//
// // should return => 3
//
console.log(charCount("Hello World", "z"))
//
// // should return => 0

