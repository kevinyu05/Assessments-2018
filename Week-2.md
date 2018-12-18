### Week 2 Assessment

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. How do you link a css file to your html page?
 
 //Your Answer
 import './App.css';
 
 //Googled Answer
  import './App.css';
 
 #### 2. What is a css class? How do you use declare one in html? When should you use an id instead of a class?
 
 //Your Answer:
A css class is used to select elements defined by class. .class. ID is used to select one specific element whereas a class used to to select many elements
 
 //Googled Answer
The css class selects elements with a specific class attribute. To select elements with a specific class, write a period (.) character, followed by the name of the class. An id selector can only be used once on a page, a class selector can be used multiple times. 
 
 
#### 3. The class "heading-box" exists in our html file - write the css code that would:

##### 1) align this box to the center of its container, 
##### 2) give it a black border that is 5px wide,
##### 3) make its text appear in the center of the box

.heading-box { 
  margin: auto; 
  width: 50%; 
  border: 5px solid #000000; 
  text-align: center; 
}

#### 4. What is Bootstrap? Explain a few reasons that you might choose to use it in a project?
 
 //Your Answer
 Bootstrap is a buff version of CSS containing built-in styles. Very convenient way to add styling for websites. 
 
 //Googled Answer
Bootstrap is a free and open-source front-end framework for developing websites and web applications. It contains HTML- and CSS-based    design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Bootstrap gives you the ability to easily create responsive designs, is a free front-end framework for faster and easier web development, is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.
 
 
#### 5. Name 4 semantic html tags. <nav>, <header>, <footer>, <table>

#### 6. What is block scope that became available in ES6? Include how it differs from javascript's local and global scope, and what variables are block scoped. 
 
 //Your Answer
 Blocked scope can only be accessed locally inside of a function that is nested inside of a function. 
 
 //Googled Answer
In block scope, any block will be a scope. This will give a more consistent behaviour. In ES6, let and const were introduced as   alternative ways of declaring variables — both being blocked scoped. For example, variables blocked inside of a function using Let or Const can only be accessed within the function even if the outer scoped variable has the same variable name. 
 
 #### 7. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?
 
 //Your Answer
Front-end web development is when the user can see and interact with a website or mobile application.
 
 //Googled Answer
Front-end web development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript
 
 #### 8. Choose one of the new ES6 concepts we learned about this week (namely: block scope, classes, and string interpolation) and write example code that demonstrates the concept, with comments to explain what is going on. 
 let name = 'Paul';

if (true) {
  let name = 'Kevin';
  console.log(name); // 'Kevin'
}

This is an example of a blocked scope. Although both variable names are equal, the let name initialized inside of the if statement scope will be logged to the console because it is blocked within the if statement. 
 
 #### 9. What is the difference between a div and a span? 
 
 
 //Your Answer
 Div is used to to group larger portions and span is to group smaller portions 
 
 
 //Googled Answer
The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.
   
#### 10. How would you explain the idea of "inheritance" in object oriented programming?
 
 
 //Your Answer
 Inheritance is way to pass properties through methods.
 
 //Googled Answer
 It is a mechanism where you can drive a class from another class for hierarchy of classes that share a set of attributes and methods.
 
