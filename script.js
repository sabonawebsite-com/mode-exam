const questions = [
    { 
        question: "Which of the following derivations does a top-down parser use?",
        options: ["Leftmost derivation", "Leftmost derivation in reverse", "Rightmost derivation", "Rightmost derivation in reverse"],
        answer: "Leftmost derivation"
    },
    { 
        question: "Two main measures for the efficiency of an algorithm are:",
        options: ["Processor and memory", "Time and space", "Complexity and capacity", "Data and space"],
        answer: "Time and space"
    },
    { 
        question: "Which of the following is a key property of dynamic programming problems?",
        options: ["They have overlapping sub-problems", "They can only be solved using recursion", "They do not have optimal substructure", "They are always solved in polynomial time"],
        answer: "They have overlapping sub-problems"
    },
    { 
        question: "Which page replacement algorithm removes the page that has been in memory the longest?",
        options: ["Optimal", "FIFO", "LRU", "Second Chance"],
        answer: "FIFO"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");

function loadQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.innerText = option;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => selectOption(optionElement, option));
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(selectedElement, selectedAnswer) {
    let options = document.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));
    selectedElement.classList.add("selected");

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionText.innerText = "Quiz Completed!";
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
        scoreText.innerText = `Your score: ${score} / ${questions.length}`;
    }
});

loadQuestion();