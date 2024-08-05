const container = document.querySelector('.js-container');


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

let currentIndex = 0;

function quizSetup() {
    const quizDetails = quiz[currentIndex];
    const questionBox = document.querySelector('.js-questions');
    questionBox.textContent = quizDetails.question;
    
    const choicesBox = document.querySelector('.js-choices');
    
    choicesBox.textContent = '';
    for(let i = 0; i < quizDetails.choices.length; i++){
        const currentChoice = quizDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if(choiceDiv.classList.contains('selected')){
                choiceDiv.classList.remove('selected');   
            }
            else{
                choiceDiv.classList.add('selected');
            }
        })
    }
}
quizSetup();

document.querySelector('.js-next-btn').addEventListener('click', () => {
    if(currentIndex < quiz.length){
        currentIndex++;
        quizSetup();
    }
});
