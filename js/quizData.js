//Quiz Data, Variables & DOM Elements
const questions = [
{
    question:"Which language is used for webpage structure?",
    options:["Java","Python","HTML","C++"],
    answer:2
},
{
    question:"Which language is used for styling web pages?",
    options:["HTML","CSS","Java","Python"],
    answer:1
},
{
    question:"Java is a ?",
    options:["OS","Programming Language","Browser","Database"],
    answer:1
}
];

let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const feedback = document.getElementById("feedback");