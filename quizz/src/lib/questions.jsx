const questions = [
  {
    id: 1,
    sprite: "rockThree",
    type: "multiple-choice",
    message:
      "You're not dumb as a rock! You've found a question! Answer correctly to earn a point",
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
      correct: "Remember this letter, it might come in handy: c",
    },
  },
  {
    id: 2,
    type: "multiple-choice",
    sprite: "rock",
    message: "You've found a question! Answer correctly to earn a point",
    question: "Which of these is a boolean data type?",
    isAnswered: false,
    options: ["'true'", "true", "1"],
    answer: "true",
    hint: "A boolean data type represents one of two values: true or false.",
    resultMessage: {
      correct: "Remember this letter, it might come in handy: o",
    },
  },
  {
    id: 3,
    type: "multiple-choice",
    sprite: "HiveOne",
    message: "You've found a question! Answer correctly and earn a point",
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
      correct: "Remember this letter, it might come in handy: d",
    },
  },
  {
    id: 4,
    type: "multiple-choice",
    sprite: "worm",
    message: "You've found a question! Answer correctly and earn a point",
    question: "What does the following code return: console.log(10 == '10');?",
    isAnswered: false,
    options: ["true", "false", "SyntaxError"],
    answer: "true",
    hint: "Consider how JavaScript handles type coercion with the '==' operator.",
    resultMessage: {
      correct: "Remember this letter, it might come in handy: e",
    },
  },
  {
    id: 5,
    type: "input",
    sprite: "cat",
    message: "MEOW!! You've found a question! Answer correctly to earn a point",
    question: "fill in the blank: __ This is a comment",
    isAnswered: false,
    options: [
      "<!-- This is a comment -->",
      "/* This is a comment /",
      "// This is a comment",
    ],
    answer: "//",
    hint: "In JavaScript, single-line comments are created using two forward slashes.",
    resultMessage: {
      correct: "Remember this letter, it might come in handy: r",
    },
  },
  {
    id: 6,
    type: "message",
    sprite: "man",
    message: "",
    question:
      "Hint! Show you're wise, not feeble or meek, not as dumb as the ITEM you seek",
    isAnswered: false,
    options: ["Ready"],
    answer: " ",
    hint: "",
    resultMessage: {
      correct: "",
    },
  },

  {
    id: 7,
    type: "multiple-choice",
    sprite: "chest",
    question: "Which JavaScript function finds the largest number in an array?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "array.max()",
      "Math.max(...array)",
      "array.sort().pop()",
      "array.findMax()",
    ],
    answer: "Math.max(...array)",
    hint: "There's a built-in object in JavaScript that deals with mathematical operations.",
    resultMessage: {
      correct:
        "Correct! 'Math.max(...array)' is used to find the largest number in an array.",
    },
  },
  {
    id: 8,
    type: "multiple-choice",
    sprite: "",
    question: "How do you reverse a string in JavaScript?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "string.reverse()",
      "string.split('').reverse().join('')",
      "Array.reverse(string)",
      "string.split().reverse()",
    ],
    answer: "string.split('').reverse().join('')",
    hint: "Think about splitting the string into an array of characters, reversing the array, and then joining the characters back together.",
    resultMessage: {
      correct:
        "Correct! 'string.split('').reverse().join('')' reverses a string.",
    },
  },
  {
    id: 9,
    type: "multiple-choice",
    sprite: "",
    question:
      "Which of the following functions correctly checks if a string is a palindrome?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "function isPalindrome(str) { return str === str.reverse(); }",
      "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
      "function isPalindrome(str) { return str.split(' ').reverse().join(' ') === str; }",
      "function isPalindrome(str) { return Array.reverse(str) === str; }",
    ],
    answer:
      "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
    hint: "A palindrome reads the same backward as forward. Consider reversing the string and comparing it with the original.",
    resultMessage: {
      correct:
        "Correct! That function correctly checks if a string is a palindrome.",
    },
  },
  {
    id: 10,
    type: "multiple-choice",
    sprite: "",
    question:
      "What does the following JavaScript function output for the number 15?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: ["Fizz", "Buzz", "FizzBuzz", "15"],
    answer: "FizzBuzz",
    hint: "This is a classic FizzBuzz problem. Check the conditions for divisibility by 3 and 5.",
    resultMessage: {
      correct:
        "Correct! The output for 15 in a FizzBuzz function is 'FizzBuzz'.",
    },
  },
  {
    id: 11,
    type: "multiple-choice",
    sprite: "",
    question: "Which function counts the number of vowels in a string?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
      "function countVowels(str) { return str.split('aeiou').length - 1; }",
      "function countVowels(str) { return str.includes('a', 'e', 'i', 'o', 'u'); }",
      "function countVowels(str) { return str.count('aeiou'); }",
    ],
    answer:
      "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
    hint: "Regular expressions can be very useful for pattern matching.",
    resultMessage: {
      correct:
        "Correct! 'function countVowels(str) { return str.match(/[aeiou]/gi).length; }' correctly counts the number of vowels.",
    },
  },
  {
    id: 12,
    type: "multiple-choice",
    sprite: "",
    question: "Which method is used to select an element by its ID?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "document.getElement('')",
      "document.querySelector('')",
      "document.selectById('')",
    ],
    answer: "document.querySelector('')",
    hint: "The querySelector method is quite versatile. Remember how it can be used to select elements by ID.",
    resultMessage: {
      correct:
        "Correct! 'document.querySelector('')' is used to select an element by its ID.",
    },
  },
  {
    id: 13,
    type: "multiple-choice",
    sprite: "",
    question:
      "In React, what is used to pass data to a component from outside?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: ["setState", "render", "props"],
    answer: "props",
    hint: "This is a mechanism in React for passing data from a parent component to a child component.",
    resultMessage: {
      correct:
        "Correct! Props are used to pass data to a component from outside in React.",
    },
  },
  {
    id: 14,
    type: "multiple-choice",
    sprite: "",
    question:
      "Which tool can be used for debugging JavaScript code in the browser?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: ["JavaScript Console", "Node.js", "CSS Inspector"],
    answer: "JavaScript Console",
    hint: "This tool is part of the browser's developer tools and is commonly used for logging output and running JavaScript.",
    resultMessage: {
      correct:
        "Correct! The JavaScript Console can be used for debugging JavaScript code in the browser.",
    },
  },
  {
    id: 15,
    type: "multiple-choice",
    sprite: "",
    question: "What does the addEventListener method do?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "Adds a new HTML element",
      "Updates an existing event listener",
      "Attaches an event handler to an element",
    ],
    answer: "Attaches an event handler to an element",
    hint: "This method is used to listen for events on an element, like clicks or key presses.",
    resultMessage: {
      correct:
        "Correct! 'addEventListener' attaches an event handler to an element.",
    },
  },
  {
    id: 16,
    type: "multiple-choice",
    sprite: "",
    question: "Which object is the root of the DOM tree?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: ["document.body", "document.head", "document.documentElement"],
    answer: "document.documentElement",
    hint: "This object represents the entire HTML document and can be used as the root to access any other node.",
    resultMessage: {
      correct:
        "Correct! 'document.documentElement' is the root of the DOM tree.",
    },
  },
  {
    id: 17,
    type: "multiple-choice",
    sprite: "",
    question: "How do you remove an element from the DOM?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "document.removeChild(element);",
      "element.remove();",
      "document.deleteElement(element);",
    ],
    answer: "element.remove();",
    hint: "This method allows you to directly remove the element it's called on.",
    resultMessage: {
      correct:
        "Correct! 'element.remove();' is used to remove an element from the DOM.",
    },
  },
  {
    id: 18,
    type: "multiple-choice",
    sprite: "",
    question: "What does the .catch() method do for a promise?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "Stops the execution of the promise",
      "Executes a callback function if the promise is rejected",
      "Catches any syntax errors in the promise code",
    ],
    answer: "Executes a callback function if the promise is rejected",
    hint: "Think about error handling in promises.",
    resultMessage: {
      correct:
        "Correct! The .catch() method is used for error handling in promises.",
    },
  },
  {
    id: 19,
    type: "multiple-choice",
    sprite: "",
    question: "What does the 'async' keyword do in front of a function?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "Makes the function run synchronously",
      "Allows the function to return a promise",
      "Automatically catches any errors within the function",
    ],
    answer: "Allows the function to return a promise",
    hint: "This keyword enables the use of await within functions.",
    resultMessage: {
      correct:
        "Correct! The 'async' keyword allows a function to return a promise.",
    },
  },
  {
    id: 20,
    type: "multiple-choice",
    sprite: "",
    question:
      "What will be logged in the console when running this code?\n\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: ["1, 2, 3", "2, 3, 1", "1, 3, 2"],
    answer: "1, 3, 2",
    hint: "Remember how the event loop and setTimeout work in JavaScript.",
    resultMessage: {
      correct:
        "Correct! The console will log '1, 3, 2' due to JavaScript's event loop and setTimeout behavior.",
    },
  },
  {
    id: 21,
    type: "multiple-choice",
    sprite: "",
    question: "Which of these is a way to handle promises?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: ["await", "sync", "defer"],
    answer: "await",
    hint: "This keyword is used in conjunction with async functions.",
    resultMessage: {
      correct:
        "Correct! 'await' is used to handle promises within async functions.",
    },
  },
  {
    id: 22,
    type: "multiple-choice",
    sprite: "",
    question: "What is a Promise in JavaScript?",
    message: "You've found a question! Answer correctly to earn a point",
    isAnswered: false,
    options: [
      "A function that is guaranteed to run",
      "An object representing the eventual completion or failure of an asynchronous operation",
      "A callback function for an API request",
    ],
    answer:
      "An object representing the eventual completion or failure of an asynchronous operation",
    hint: "It's a core object that represents the eventual completion (or failure) of an asynchronous operation.",
    resultMessage: {
      correct:
        "Correct! A Promise in JavaScript represents the eventual completion or failure of an asynchronous operation.",
    },
  },
];
export default questions;
