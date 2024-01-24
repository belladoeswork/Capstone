const questions = [
  {
    id: 1,
    sprite: "rock",
    type: "multiple-choice",
    question:
      "What is the correct syntax for declaring a variable in JavaScript?",
    isAnswered: false,
    options: [
      "var name = 'value';",
      "variable name = 'value';",
      "var: name = 'value';",
    ],
    answer: "var name = 'value';",
    hint: "The correct syntax uses the keyword 'var' followed by the variable name and assignment operator.",
    resultMessage: {
      correct:
        "Correct! 'var name = 'value';' is the right way to declare a variable in JavaScript.",
      wrong:
        "Wrong! Remember, variables in JavaScript are declared using the 'var' keyword.",
    },
  },
  {
    id: 2,
    type: "multiple-choice",
    sprite: "rockTwo",
    question: "Which of these is a boolean data type?",
    isAnswered: false,
    options: ["'true'", "true", "1"],
    answer: "true",
    hint: "A boolean data type represents one of two values: true or false.",
    resultMessage: {
      correct: "Correct! 'true' is a boolean data type.",
      wrong:
        "Wrong! 'true' without quotes is the boolean data type, not 'true' with quotes or '1'.",
    },
  },
  {
    id: 3,
    type: "multiple-choice",
    sprite: "HiveOne",
    question: "How do you create a function in JavaScript?",
    isAnswered: false,
    options: [
      "function: myFunction()",
      "function myFunction()",
      "function = myFunction()",
    ],
    answer: "function myFunction()",
    hint: "In JavaScript, a function is defined with the 'function' keyword, followed by a name, followed by parentheses ().",
    resultMessage: {
      correct:
        "Correct! 'function myFunction()' is the proper syntax to declare a function.",
      wrong:
        "Wrong! Functions are declared with the syntax 'function myFunction()'.",
    },
  },
  {
    id: 4,
    type: "multiple-choice",
    sprite: "worm2",
    question: "What does the following code return: console.log(10 == '10');?",
    isAnswered: false,
    options: ["true", "false", "SyntaxError"],
    answer: "true",
    hint: "Consider how JavaScript handles type coercion with the '==' operator.",
    resultMessage: {
      correct:
        "Correct! The '==' operator performs type coercion, treating 10 and '10' as equal.",
      wrong:
        "Wrong! The '==' operator in JavaScript does type coercion, so 10 and '10' are considered equal and it returns true.",
    },
  },
  {
    id: 5,
    type: "multiple-choice",
    sprite: "cat",
    question: "How can you add a comment in a JavaScript file?",
    isAnswered: false,
    options: [
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "// This is a comment",
    ],
    answer: "// This is a comment",
    hint: "In JavaScript, single-line comments are created using two forward slashes.",
    resultMessage: {
      correct:
        "Correct! '// This is a comment' is how you add a single-line comment in JavaScript.",
      wrong:
        "Wrong! Remember, single-line comments in JavaScript use two forward slashes.",
    },
  },
  {
    id: 6,
    type: "message",
    sprite: "worm",
    question:
      "Show you're wise, not feeble or meek,Not as dumb as the item you seek",
    isAnswered: false,
    options: ["Ready"],
    answer: " ",
    hint: "In JavaScript, single-line comments are created using two forward slashes.",
    resultMessage: {
      correct:
        "Correct! '// This is a comment' is how you add a single-line comment in JavaScript.",
      wrong:
        "Wrong! Remember, single-line comments in JavaScript use two forward slashes.",
    },
  },

  //   {
  //     id: 6,
  //     type: "multiple-choice",
  //     question: "Which JavaScript function finds the largest number in an array?",
  //     options: [
  //       "array.max()",
  //       "Math.max(...array)",
  //       "array.sort().pop()",
  //       "array.findMax()",
  //     ],
  //     answer: "Math.max(...array)",
  //     hint: "There's a built-in object in JavaScript that deals with mathematical operations.",
  //     resultMessage: {
  //       correct:
  //         "Correct! 'Math.max(...array)' is used to find the largest number in an array.",
  //       wrong: "Wrong! Use 'Math.max(...array)' to find the largest number.",
  //     },
  //   },
  //   {
  //     id: 7,
  //     type: "multiple-choice",
  //     question: "How do you reverse a string in JavaScript?",
  //     options: [
  //       "string.reverse()",
  //       "string.split('').reverse().join('')",
  //       "Array.reverse(string)",
  //       "string.split().reverse()",
  //     ],
  //     answer: "string.split('').reverse().join('')",
  //     hint: "Think about splitting the string into an array of characters, reversing the array, and then joining the characters back together.",
  //     resultMessage: {
  //       correct:
  //         "Correct! 'string.split('').reverse().join('')' reverses a string.",
  //       wrong:
  //         "Wrong! To reverse a string, use 'string.split('').reverse().join('')'.",
  //     },
  //   },
  //   {
  //     id: 8,
  //     type: "multiple-choice",
  //     question:
  //       "Which of the following functions correctly checks if a string is a palindrome?",
  //     options: [
  //       "function isPalindrome(str) { return str === str.reverse(); }",
  //       "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
  //       "function isPalindrome(str) { return str.split(' ').reverse().join(' ') === str; }",
  //       "function isPalindrome(str) { return Array.reverse(str) === str; }",
  //     ],
  //     answer:
  //       "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
  //     hint: "A palindrome reads the same backward as forward. Consider reversing the string and comparing it with the original.",
  //     resultMessage: {
  //       correct:
  //         "Correct! That function correctly checks if a string is a palindrome.",
  //       wrong:
  //         "Wrong! A palindrome function checks if a string is the same forwards and backwards.",
  //     },
  //   },
  //   {
  //     id: 9,
  //     type: "multiple-choice",
  //     question:
  //       "What does the following JavaScript function output for the number 15?",
  //     options: ["Fizz", "Buzz", "FizzBuzz", "15"],
  //     answer: "FizzBuzz",
  //     hint: "This is a classic FizzBuzz problem. Check the conditions for divisibility by 3 and 5.",
  //     resultMessage: {
  //       correct:
  //         "Correct! The output for 15 in a FizzBuzz function is 'FizzBuzz'.",
  //       wrong:
  //         "Wrong! Remember, for numbers divisible by both 3 and 5, FizzBuzz prints 'FizzBuzz'.",
  //     },
  //   },
  //   {
  //     id: 10,
  //     type: "multiple-choice",
  //     question: "Which function counts the number of vowels in a string?",
  //     options: [
  //       "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
  //       "function countVowels(str) { return str.split('aeiou').length - 1; }",
  //       "function countVowels(str) { return str.includes('a', 'e', 'i', 'o', 'u'); }",
  //       "function countVowels(str) { return str.count('aeiou'); }",
  //     ],
  //     answer:
  //       "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
  //     hint: "Regular expressions can be very useful for pattern matching.",
  //     resultMessage: {
  //       correct:
  //         "Correct! 'function countVowels(str) { return str.match(/[aeiou]/gi).length; }' correctly counts the number of vowels.",
  //       wrong:
  //         "Wrong! Remember to use a regular expression to match vowels in the string.",
  //     },
  //   },
  //   {
  //     id: 11,
  //     type: "multiple-choice",
  //     question: "Which method is used to select an element by its ID?",
  //     options: [
  //       "document.getElement('')",
  //       "document.querySelector('')",
  //       "document.selectById('')",
  //     ],
  //     answer: "document.querySelector('')",
  //     hint: "The querySelector method is quite versatile. Remember how it can be used to select elements by ID.",
  //     resultMessage: {
  //       correct:
  //         "Correct! 'document.querySelector('')' is used to select an element by its ID.",
  //       wrong:
  //         "Wrong! Remember, 'document.querySelector('')' can select elements by ID when used with the '#' prefix.",
  //     },
  //   },
  //   {
  //     id: 12,
  //     type: "multiple-choice",
  //     question:
  //       "In React, what is used to pass data to a component from outside?",
  //     options: ["setState", "render", "props"],
  //     answer: "props",
  //     hint: "This is a mechanism in React for passing data from a parent component to a child component.",
  //     resultMessage: {
  //       correct:
  //         "Correct! Props are used to pass data to a component from outside in React.",
  //       wrong:
  //         "Wrong! Props, not setState or render, are used for passing data to components.",
  //     },
  //   },
  //   {
  //     id: 13,
  //     type: "multiple-choice",
  //     question:
  //       "Which tool can be used for debugging JavaScript code in the browser?",
  //     options: ["JavaScript Console", "Node.js", "CSS Inspector"],
  //     answer: "JavaScript Console",
  //     hint: "This tool is part of the browser's developer tools and is commonly used for logging output and running JavaScript.",
  //     resultMessage: {
  //       correct:
  //         "Correct! The JavaScript Console can be used for debugging JavaScript code in the browser.",
  //       wrong:
  //         "Wrong! Remember, the JavaScript Console is the tool for debugging JavaScript in the browser.",
  //     },
  //   },
  //   {
  //     id: 14,
  //     type: "multiple-choice",
  //     question: "What does the addEventListener method do?",
  //     options: [
  //       "Adds a new HTML element",
  //       "Updates an existing event listener",
  //       "Attaches an event handler to an element",
  //     ],
  //     answer: "Attaches an event handler to an element",
  //     hint: "This method is used to listen for events on an element, like clicks or key presses.",
  //     resultMessage: {
  //       correct:
  //         "Correct! 'addEventListener' attaches an event handler to an element.",
  //       wrong:
  //         "Wrong! 'addEventListener' is used to attach an event handler to an element, not to add or update HTML elements.",
  //     },
  //   },
  //   {
  //     id: 15,
  //     type: "multiple-choice",
  //     question: "Which object is the root of the DOM tree?",
  //     options: ["document.body", "document.head", "document.documentElement"],
  //     answer: "document.documentElement",
  //     hint: "This object represents the entire HTML document and can be used as the root to access any other node.",
  //     resultMessage: {
  //       correct:
  //         "Correct! 'document.documentElement' is the root of the DOM tree.",
  //       wrong:
  //         "Wrong! 'document.documentElement' represents the root of the DOM tree, not 'document.body' or 'document.head'.",
  //     },
  //   },
  //   {
  //     id: 16,
  //     type: "multiple-choice",
  //     question: "How do you remove an element from the DOM?",
  //     options: [
  //       "document.removeChild(element);",
  //       "element.remove();",
  //       "document.deleteElement(element);",
  //     ],
  //     answer: "element.remove();",
  //     hint: "This method allows you to directly remove the element it's called on.",
  //     resultMessage: {
  //       correct:
  //         "Correct! 'element.remove();' is used to remove an element from the DOM.",
  //       wrong:
  //         "Wrong! Use 'element.remove();' to directly remove an element from the DOM.",
  //     },
  //   },
  //   {
  //     id: 17,
  //     type: "multiple-choice",
  //     question: "What does the .catch() method do for a promise?",
  //     options: [
  //       "Stops the execution of the promise",
  //       "Executes a callback function if the promise is rejected",
  //       "Catches any syntax errors in the promise code",
  //     ],
  //     answer: "Executes a callback function if the promise is rejected",
  //     hint: "Think about error handling in promises.",
  //     resultMessage: {
  //       correct:
  //         "Correct! The .catch() method is used for error handling in promises.",
  //       wrong:
  //         "Wrong! The .catch() method handles errors, specifically for rejected promises.",
  //     },
  //   },
  //   {
  //     id: 18,
  //     type: "multiple-choice",
  //     question: "What does the 'async' keyword do in front of a function?",
  //     options: [
  //       "Makes the function run synchronously",
  //       "Allows the function to return a promise",
  //       "Automatically catches any errors within the function",
  //     ],
  //     answer: "Allows the function to return a promise",
  //     hint: "This keyword enables the use of await within functions.",
  //     resultMessage: {
  //       correct:
  //         "Correct! The 'async' keyword allows a function to return a promise.",
  //       wrong:
  //         "Wrong! The 'async' keyword is used to declare a function as asynchronous, allowing it to return a promise.",
  //     },
  //   },
  //   {
  //     id: 19,
  //     type: "multiple-choice",
  //     question:
  //       "What will be logged in the console when running this code?\n\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');",
  //     options: ["1, 2, 3", "2, 3, 1", "1, 3, 2"],
  //     answer: "1, 3, 2",
  //     hint: "Remember how the event loop and setTimeout work in JavaScript.",
  //     resultMessage: {
  //       correct:
  //         "Correct! The console will log '1, 3, 2' due to JavaScript's event loop and setTimeout behavior.",
  //       wrong:
  //         "Wrong! Due to how JavaScript handles the event loop and setTimeout, '1, 3, 2' will be logged.",
  //     },
  //   },
  //   {
  //     id: 20,
  //     type: "multiple-choice",
  //     question: "Which of these is a way to handle promises?",
  //     options: ["await", "sync", "defer"],
  //     answer: "await",
  //     hint: "This keyword is used in conjunction with async functions.",
  //     resultMessage: {
  //       correct:
  //         "Correct! 'await' is used to handle promises within async functions.",
  //       wrong:
  //         "Wrong! 'await' is the correct keyword to handle promises in conjunction with async functions.",
  //     },
  //   },
  //   {
  //     id: 21,
  //     type: "multiple-choice",
  //     question: "What is a Promise in JavaScript?",
  //     options: [
  //       "A function that is guaranteed to run",
  //       "An object representing the eventual completion or failure of an asynchronous operation",
  //       "A callback function for an API request",
  //     ],
  //     answer:
  //       "An object representing the eventual completion or failure of an asynchronous operation",
  //     hint: "It's a core object that represents the eventual completion (or failure) of an asynchronous operation.",
  //     resultMessage: {
  //       correct:
  //         "Correct! A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation.",
  //       wrong:
  //         "Wrong! A Promise is not just a function or a callback; it represents the completion or failure of an async operation.",
  //     },
  //   },
];
export default questions;
