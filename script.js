const questions = [
    { 
        question: "1.Which of the following derivations does a top-down parser use?",
        options: ["A:Leftmost derivation", "B:Leftmost derivation in reverse", "C:Rightmost derivation", "D:Rightmost derivation in reverse"],
        answer: "A:Leftmost derivation"
    },
    { 
        question: "2.Two main measures for the efficiency of an algorithm are:",
        options: ["Processor and memory", "Time and space", "Complexity and capacity", "Data and space"],
        answer: "Time and space"
    },
    { 
        question: "3.Which of the following is not the objectives of peephole optimization? ",
        options: ["A :Degrade performance", "B:Enhance execution speed", "C:Reduce code size", "D:Reduce memory footprint"],
        answer: "Degrade performance"
    },
    { 
        question: "4.The extra key inserted at the end of the array is called a _________________ ",
        options: ["A. End key.", "B. Stop key.", "C. Sentinel.", "D. Transposition.  "],
        answer: "C. Sentinel."
    },
    { 
        question: "5. ____________is the systematic study of the cost of computation, measured either in time ",
        options: ["A. Complexity Analysis", "B. Algorithm analysis ", "C. Analysis  ", "D. Asymptotic analysis"],
        answer: "A. Complexity Analysis"
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
