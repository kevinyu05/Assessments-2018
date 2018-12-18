### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer
  boolean(primitive), string(primitive), number(primitive)
  
  //Googled Answer
  boolean, null, undefined, number, string, symbol

#### 2. Look at this Javascript and try to predict, what will the browser's console show? 

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: outside


Then, past the code in your console and explain why you were right/wrong. 
I was wrong because the console logged undefined. It is undefined because the logIt function does not have a parameter set for an argument to be passed through to be logged. 
#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  To be brutally honest I only know that JSON stands for Javascript Object Notation
  
  //Googled Answer
  Format for storing and transporting data. The JSON format is syntactically identical to the code for creating JavaScript objects.      Thus, a JavaScript program can easily convert JSON data into native JavaScript objects.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  Unfortunately and to be brutally honest again, I do not know and had to resort to googling it. 
  
  //Googled Answer
  A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
 Assign a value, compare values, strictly equal the value 
  
  //Googled Answer
  Assign a value, equal to a value, equal to the value and type  
