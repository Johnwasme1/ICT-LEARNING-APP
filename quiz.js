// SAMPLE FOR UNIT OF COMPETENCY 1 QUIZ
const questions = [
    {
        question: "What is the primary function of the BIOS in a computer system?",
        choices: ["Execute application programs", "Store temporary data", "Initialize hardware components", "Manage network connections"],
        correctAnswer: 2 
    },

    {
        question: "Which component of a computer system is responsible for storing data permanently?",
        choices: ["CPU", "RAM", "Hard drive", "Graphics card"],
        correctAnswer: 2
    },
        {
            question: "What is the primary function of RAM?",
            choices: [
                "Store data permanently.",
                "Store data temporarily.",
                "Process data.",
                "Display data."
            ],
            correctAnswer: 1 
        },
        {
            question: "Which of the following is an input device?",
            choices: [
                "Monitor",
                "Keyboard",
                "Printer",
                "Speaker"
            ],
            correctAnswer: 1
        },
        {
            question: "What does BIOS stand for?",
            choices: [
                "Basic Input Output System",
                "Basic Internal Operating System",
                "Binary Input Output System",
                "Binary Internal Operating System"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the purpose of an operating system?",
            choices: [
                "To display images on the screen",
                "To store permanent data",
                "To manage computer hardware and software resources",
                "To install application software"
            ],
            correctAnswer: 2
        },
        {
            question: "Which component is responsible for processing instructions and performing calculations?",
            choices: [
                "CPU",
                "GPU",
                "RAM",
                "HDD"
            ],
            correctAnswer: 0
        },
        {
            question: "What does CPU stand for?",
            choices: [
                "Computer Processing Unit",
                "Central Processing Unit",
                "Computer Program Unit",
                "Central Program Unit"
            ],
            correctAnswer: 1
        },
        {
            question: "Which of the following is a secondary storage device?",
            choices: [
                "RAM",
                "SSD",
                "CPU",
                "Cache"
            ],
            correctAnswer: 1
        },
        {
            question: "What is the purpose of a GPU?",
            choices: [
                "To store data permanently",
                "To process graphical data",
                "To manage input/output operations",
                "To control the execution of programs"
            ],
            correctAnswer: 1
        },
        {
            question: "Which component is responsible for storing data permanently?",
            choices: [
                "RAM",
                "CPU",
                "HDD",
                "SSD"
            ],
            correctAnswer: 2
        },
        {
            question: "What does SSD stand for?",
            choices: [
                "Solid State Drive",
                "Super Speed Drive",
                "Secure Storage Device",
                "System Storage Disk"
            ],
            correctAnswer: 0
        }
    ];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    questionElement.textContent = questions[currentQuestionIndex].question;

    choicesElement.innerHTML = "";

    questions[currentQuestionIndex].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(index);
        choicesElement.appendChild(button);
    });
}


function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("You have completed the quiz!");
    }
}

displayQuestion();
function checkAnswer(choiceIndex) {
    const choices = document.querySelectorAll('#choices button');

    if (choiceIndex === questions[currentQuestionIndex].correctAnswer) {

        choices[choiceIndex].style.backgroundColor = '#28a745'; // Green color for correct answer
    } else {
        choices[choiceIndex].style.backgroundColor = '#dc3545'; // Red color for incorrect answer
    }

    // Disable all buttons after selecting an answer
    choices.forEach(button => {
        button.disabled = true;
    });
}
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // Show modal with total score
        showModal("Total Score: " + totalScore);
    }
}



