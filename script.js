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
let score = 0;
let quizOver = false;
let timer = 20;

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
        });
    };
    if(currentIndex < quizDetails.length){
        startTimer();
    }
};

function checkAnswer() {
    const selectedChoice = document.querySelector('.choice.selected');
    if(selectedChoice.textContent === quiz[currentIndex].answer){
        score++;
        displayAlert('Correct Answer!');
    }else{
        displayAlert(`Wrong answer! "${quiz[currentIndex].answer}" is the correct answer.`);
    }

    currentIndex++;
    if(currentIndex < quiz.length){
        quizSetup();
    }else{
        setTimeout(() => {
            scoreOutput();
            quizOver = true;
        }, 2000);
    }
};

function scoreOutput() {
    document.querySelector('.js-questions').textContent = '';
    document.querySelector('.js-choices').textContent = '';     
    const displayScore = document.querySelector('.js-score-card');
    displayScore.innerHTML = `You scored ${score} out of ${quiz.length}!`;
    document.querySelector('.js-heading').innerText = 'Quiz Game Finish!';
    nextBtn.innerText = 'Play again!';
};

//create alert
let timeId;
const alert = document.querySelector('.js-alert');
function displayAlert(msg) {
    alert.style.display = 'block';
    alert.innerText = msg;
    clearTimeout(timeId);
    timeId = setTimeout(() => {    
        alert.style.display = 'none';
    }, 2000);
};

let timeInterval;
function startTimer(){
    const timerDisplay = document.querySelector('.js-timer');
    timeInterval = setInterval(() => {
        timerDisplay.innerText = timer;
        timer--;
    }, 1000);
}

//start btn, click to start quiz
const startBtn = document.querySelector('.js-start-btn');
startBtn.addEventListener('click', () => {
    document.querySelector('.js-container').style.display = 'block';    
    startBtn.style.display = 'none';
    quizSetup();
});

//next btn, click to move to next question and shows answers
const nextBtn = document.querySelector('.js-next-btn');
nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');    
    if(!selectedChoice && nextBtn.innerText === 'Next'){
        displayAlert('Select your answer!');
        return;
    }
    if(quizOver){
        nextBtn.innerText = 'Next';
        document.querySelector('.js-score-card').innerText = '';
        currentIndex = 0;
        quizSetup();
        quizOver = false;
        score = 0;
    }
    else{
        checkAnswer();
    }
});