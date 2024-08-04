const container = document.querySelector('.js-container');
const question = document.querySelector('.js-questions');
const choices = document.querySelector('.js-choices');
const nextBtn = document.querySelector('.js-next-btn');

const quiz = [
  {
      question: "Q. Which of the following is not a CSS box model property?",
      choices: ["margin", "padding", "border-radius", "border-collapse"],
      answer: "border-collapse"
  },
  {
      question: "Q. Which of the following is not a valid way to declare a function in JavaScript?",
      choices: ["function myFunction() {}", " let myFunction = function() {};", "myFunction: function() {}", "const myFunction = () => {};"],
      answer: "myFunction: function() {}"
  },
  {
      question: "Q. Which of the following is not a JavaScript data type?",
      choices: ["string", "boolean", "object", "float"],
      answer: "float"
  },
  {
      question: "Q. What is the purpose of the this keyword in JavaScript?",
      choices: ["It refers to the current function.", "It refers to the current object.", "It refers to the parent object.", " It is used for comments."],
      answer: "It refers to the current object."
  }
];


