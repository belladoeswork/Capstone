const questionsData = [
  {
    id: 1,
    question:
      "What is the correct syntax for declaring a variable in JavaScript?",
    options: [
      "var name = 'value';",
      "variable name = 'value';",
      "var: name = 'value';",
    ],
    answer: "var name = 'value';",
  },
  {
    id: 2,
    question: "Which of these is a boolean data type?",
    options: ["'true'", "true", "1"],
    answer: "true",
  },
  {
    id: 3,
    question: "How do you create a function in JavaScript?",
    options: [
      "function: myFunction()",
      "function myFunction()",
      "function = myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    id: 4,
    question: "What does the following code return: console.log(10 == '10');?",
    options: ["true", "false", "SyntaxError"],
    answer: "true",
  },
  {
    id: 5,
    question: "How can you add a comment in a JavaScript file?",
    options: [
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "// This is a comment",
    ],
    answer: "// This is a comment",
  },
  {
    id: 6,
    question: "Which JavaScript function finds the largest number in an array?",
    options: [
      "array.max()",
      "Math.max(...array)",
      "array.sort().pop()",
      "array.findMax()",
    ],
    answer: "Math.max(...array)",
  },
  {
    id: 7,
    question: "How do you reverse a string in JavaScript?",
    options: [
      "string.reverse()",
      "string.split('').reverse().join('')",
      "Array.reverse(string)",
      "string.split().reverse()",
    ],
    answer: "string.split('').reverse().join('')",
  },
  {
    id: 8,
    question:
      "Which of the following functions correctly checks if a string is a palindrome?",
    options: [
      "function isPalindrome(str) { return str === str.reverse(); }",
      "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
      "function isPalindrome(str) { return str.split(' ').reverse().join(' ') === str; }",
      "function isPalindrome(str) { return Array.reverse(str) === str; }",
    ],
    answer:
      "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
  },
  {
    id: 9,
    question:
      "What does the following JavaScript function output for the number 15?\n\nfunction fizzBuzz(n) {\n    for (let i = 1; i <= n; i++) {\n        let output = '';\n        if (i % 3 === 0) output += 'Fizz';\n        if (i % 5 === 0) output += 'Buzz';\n        console.log(output || i);\n    }\n}",
    options: ["Fizz", "Buzz", "FizzBuzz", "15"],
    answer: "FizzBuzz",
  },
  {
    id: 10,
    question: "Which function counts the number of vowels in a string?",
    options: [
      "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
      "function countVowels(str) { return str.split('aeiou').length - 1; }",
      "function countVowels(str) { return str.includes('a', 'e', 'i', 'o', 'u'); }",
      "function countVowels(str) { return str.count('aeiou'); }",
    ],
    answer:
      "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
  },
  {
    id: 11,
    question: "Which method is used to select an element by its ID?",
    options: [
      "document.getElement('')",
      "document.querySelector('')",
      "document.selectById('')",
    ],
    answer: "document.querySelector('')",
  },
  {
    id: 12,
    question:
      "In React, what is used to pass data to a component from outside?",
    options: ["setState", "render", "props"],
    answer: "props",
  },
  {
    id: 13,
    question:
      "Which tool can be used for debugging JavaScript code in the browser?",
    options: ["JavaScript Console", "Node.js", "CSS Inspector"],
    answer: "JavaScript Console",
  },
  {
    id: 14,
    question: "What does the addEventListener method do?",
    options: [
      "Adds a new HTML element",
      "Updates an existing event listener",
      "Attaches an event handler to an element",
    ],
    answer: "Attaches an event handler to an element",
  },
  {
    id: 15,
    question: "Which object is the root of the DOM tree?",
    options: ["document.body", "document.head", "document.documentElement"],
    answer: "document.documentElement",
  },
  {
    id: 16,
    question: "How do you remove an element from the DOM?",
    options: [
      "document.removeChild(element);",
      "element.remove();",
      "document.deleteElement(element);",
    ],
    answer: "element.remove();",
  },
  {
    id: 17,
    question: "What does the .catch() method do for a promise?",
    options: [
      "Stops the execution of the promise",
      "Executes a callback function if the promise is rejected",
      "Catches any syntax errors in the promise code",
    ],
    answer: "Executes a callback function if the promise is rejected",
  },
  {
    id: 18,
    question: "What does the 'async' keyword do in front of a function?",
    options: [
      "Makes the function run synchronously",
      "Allows the function to return a promise",
      "Automatically catches any errors within the function",
    ],
    answer: "Allows the function to return a promise",
  },
  {
    id: 19,
    question:
      "What will be logged in the console when running this code?\n\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');",
    options: ["1, 2, 3", "2, 3, 1", "1, 3, 2"],
    answer: "1, 3, 2",
  },
  {
    id: 20,
    question: "Which of these is a way to handle promises?",
    options: ["await", "async", "defer"],
    answer: "await",
  },
  {
    id: 21,
    question: "What is a Promise in JavaScript?",
    options: [
      "A function that is guaranteed to run",
      "An object representing the eventual completion or failure of an asynchronous operation",
      "A callback function for an API request",
    ],
    answer:
      "An object representing the eventual completion or failure of an asynchronous operation",
  },
];

// const questionsData = [
//   // Level 1 Questions
//   [
//     {
//       question:
//         "What is the correct syntax for declaring a variable in JavaScript?",
//       options: [
//         "var name = 'value';",
//         "variable name = 'value';",
//         "var: name = 'value';",
//       ],
//       answer: "var name = 'value';",
//     },
//     {
//       question: "Which of these is a boolean data type?",
//       options: ["'true'", "true", "1"],
//       answer: "true",
//     },
//     {
//       question: "How do you create a function in JavaScript?",
//       options: [
//         "function: myFunction()",
//         "function myFunction()",
//         "function = myFunction()",
//       ],
//       answer: "function myFunction()",
//     },
//     {
//       question:
//         "What does the following code return: console.log(10 == '10');?",
//       options: ["true", "false", "SyntaxError"],
//       answer: "true",
//     },
//     {
//       question: "How can you add a comment in a JavaScript file?",
//       options: [
//         "<!-- This is a comment -->",
//         "/* This is a comment */",
//         "// This is a comment",
//       ],
//       answer: "// This is a comment",
//     },
//   ],
//   // Level 2 Questions
//   [
//     {
//       question:
//         "Which JavaScript function finds the largest number in an array?",
//       options: [
//         "array.max()",
//         "Math.max(...array)",
//         "array.sort().pop()",
//         "array.findMax()",
//       ],
//       answer: "Math.max(...array)",
//     },
//     {
//       question: "How do you reverse a string in JavaScript?",
//       options: [
//         "string.reverse()",
//         "string.split('').reverse().join('')",
//         "Array.reverse(string)",
//         "string.split().reverse()",
//       ],
//       answer: "string.split('').reverse().join('')",
//     },
//     {
//       question:
//         "Which of the following functions correctly checks if a string is a palindrome?",
//       options: [
//         "function isPalindrome(str) { return str === str.reverse(); }",
//         "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
//         "function isPalindrome(str) { return str.split(' ').reverse().join(' ') === str; }",
//         "function isPalindrome(str) { return Array.reverse(str) === str; }",
//       ],
//       answer:
//         "function isPalindrome(str) { return str === str.split('').reverse().join(''); }",
//     },
//     {
//       question:
//         "What does the following JavaScript function output for the number 15?\n\nfunction fizzBuzz(n) {\n    for (let i = 1; i <= n; i++) {\n        let output = '';\n        if (i % 3 === 0) output += 'Fizz';\n        if (i % 5 === 0) output += 'Buzz';\n        console.log(output || i);\n    }\n}",
//       options: ["Fizz", "Buzz", "FizzBuzz", "15"],
//       answer: "FizzBuzz",
//     },
//     {
//       question: "Which function counts the number of vowels in a string?",
//       options: [
//         "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
//         "function countVowels(str) { return str.split('aeiou').length - 1; }",
//         "function countVowels(str) { return str.includes('a', 'e', 'i', 'o', 'u'); }",
//         "function countVowels(str) { return str.count('aeiou'); }",
//       ],
//       answer:
//         "function countVowels(str) { return str.match(/[aeiou]/gi).length; }",
//     },
//   ],
//   // Level 3 Questions
//   [
//     {
//       question: "Which method is used to select an element by its ID?",
//       options: [
//         "document.getElement('')",
//         "document.querySelector('')",
//         "document.selectById('')",
//       ],
//       answer: "document.querySelector('')",
//     },
//     {
//       question:
//         "In React, what is used to pass data to a component from outside?",
//       options: ["setState", "render", "props"],
//       answer: "props",
//     },
//     {
//       question:
//         "Which tool can be used for debugging JavaScript code in the browser?",
//       options: ["JavaScript Console", "Node.js", "CSS Inspector"],
//       answer: "JavaScript Console",
//     },
//     {
//       question: "What does the addEventListener method do?",
//       options: [
//         "Adds a new HTML element",
//         "Updates an existing event listener",
//         "Attaches an event handler to an element",
//       ],
//       answer: "Attaches an event handler to an element",
//     },
//     {
//       question: "Which object is the root of the DOM tree?",
//       options: ["document.body", "document.head", "document.documentElement"],
//       answer: "document.documentElement",
//     },
//     {
//       question: "How do you remove an element from the DOM?",
//       options: [
//         "document.removeChild(element);",
//         "element.remove();",
//         "document.deleteElement(element);",
//       ],
//       answer: "element.remove();",
//     },
//   ],
//   // Level 4 Questions
//   [
//     {
//       question: "What does the .catch() method do for a promise?",
//       options: [
//         "Stops the execution of the promise",
//         "Executes a callback function if the promise is rejected",
//         "Catches any syntax errors in the promise code",
//       ],
//       answer: "Executes a callback function if the promise is rejected",
//     },
//     {
//       question: "What does the 'async' keyword do in front of a function?",
//       options: [
//         "Makes the function run synchronously",
//         "Allows the function to return a promise",
//         "Automatically catches any errors within the function",
//       ],
//       answer: "Allows the function to return a promise",
//     },
//     {
//       question:
//         "What will be logged in the console when running this code?\n\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nconsole.log('3');",
//       options: ["1, 2, 3", "2, 3, 1", "1, 3, 2"],
//       answer: "1, 3, 2",
//     },
//     {
//       question: "Which of these is a way to handle promises?",
//       options: ["await", "async", "defer"],
//       answer: "await",
//     },
//     {
//       question: "What is a Promise in JavaScript?",
//       options: [
//         "A function that is guaranteed to run",
//         "An object representing the eventual completion or failure of an asynchronous operation",
//         "A callback function for an API request",
//       ],
//       answer:
//         "An object representing the eventual completion or failure of an asynchronous operation",
//     },
//   ],
// ];

export default questionsData;
