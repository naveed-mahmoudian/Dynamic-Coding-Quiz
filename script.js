// Variables & DOM elements
var startContainer = document.querySelector('.start-container');
var startQuizBtn = document.querySelector('.start-btn');
var quizContainer = document.querySelector('.quiz-container');
var myQuestions = [
    {
        question: "This is a question?",
        answers: {
            1: "Answer a",
            2: "Answer b",
            3: "Answer c",
            4: "Answer d"
        },
        correctAnswer: 4
    },
    {
        question: "This is another question?",
        answers: {
            1: "Another Answer a",
            2: "Another Answer b",
            3: "Another Answer c",
            4: "Another Answer d"
        },
        correctAnswer: 1
    },
]


startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startContainer.setAttribute('style', 'display: none');
    quizContainer.setAttribute('style', 'display: flex');
    createQuestion(getRandomQuestion());
}

function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * myQuestions.length);
    return myQuestions[randomIndex];
}

function createQuestion(randomQuestionIndex) {
     var question = document.createElement('h2')
     question.innerText = randomQuestionIndex.question;
     quizContainer.appendChild(question);

     var answerList = document.createElement('ol');
     quizContainer.appendChild(answerList);

     for (i = 1; i <= Object.values(randomQuestionIndex.answers).length; i++) {
        if (Object.keys(randomQuestionIndex.answers).find(correctAnswer => i === randomQuestionIndex.correctAnswer)) {
            var answer = document.createElement('li');
            answer.innerHTML = "<button class='ans-btn correct'>" + randomQuestionIndex.answers[i] + "</button>"
            answerList.appendChild(answer);
        } else {
            var answer = document.createElement('li');
            answer.innerHTML = "<button class=ans-btn>" + randomQuestionIndex.answers[i] + "</button>"
            answerList.appendChild(answer);
        }
     }
}

function checkAnswer() {

}
