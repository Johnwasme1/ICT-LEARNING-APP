const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choices-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

/*CHANGE THE QUESTION UC 1*/
let questions = [
    {
        question: 'What is the primary function of the BIOS in a computer system?',
        choice1: 'Execute application programs',
        choice2:'Store temporary data',
        choice3:'Initialize hardware components',
        choice4:'Manage network connections',
        answer: 3,
    },
    {
        question: 'Which component of a computer system is responsible for storing data permanently?',
        choice1: 'CPU',
        choice2: 'RAM',
        choice3: 'Hard drive',
        choice4: 'Graphics card',
        answer: 3,
    },
    {
        question: 'What is the primary function of RAM?',
        choice1: 'Store data permanently.',
        choice2: 'Store data temporarily.',
        choice3: 'Process data.',
        choice4: 'Display data.',
        answer: 2,
    },
    {
        question: 'Which of the following is an input device?',
        choice1: 'Monitor',
        choice2: 'Keyboard',
        choice3: 'Printer',
        choice4: 'Speaker',
        answer: 2,
    },
    {
        question: 'What does BIOS stand for?',
        choice1: 'Basic Input Output System',
        choice2: 'Basic Internal Operating System',
        choice3: 'Binary Input Output System',
        choice4: 'Binary Internal Operating System',
        answer: 1,
    },
    {
        question: 'What is the purpose of an operating system?',
        choice1: 'To display images on the screen',
        choice2: 'To store permanent data',
        choice3: 'To manage computer hardware and software resources',
        choice4: 'To install application software',
        answer: 3,
    },
    {
        question: 'Which component is responsible for processing instructions and performing calculations?',
        choice1: 'CPU',
        choice2: 'GPU',
        choice3: 'RAM',
        choice4: 'HDD',
        answer: 1,
    },
    {
        question: 'What does CPU stand for?',
        choice1: 'Computer Processing Unit',
        choice2: 'Central Processing Unit',
        choice3: 'Computer Program Unit',
        choice4: 'Central Program Unit',
        answer: 2,
    },
    {
        question: 'Which of the following is a secondary storage device?',
        choice1: 'RAM',
        choice2: 'SSD',
        choice3: 'CPU',
        choice4: 'Cache',
        answer: 2,
    },
    {
        question: 'What is the purpose of a GPU?',
        choice1: 'To store data permanently',
        choice2: 'To process graphical data',
        choice3: 'To manage input/output operations',
        choice4: 'To control the execution of programs',
        answer: 2,
    },
    {
        question: 'What does SSD stand for?',
        choice1: 'Solid State Drive',
        choice2: 'Super Speed Drive',
        choice3: 'Secure Storage Device',
        choice4: 'System Storage Disk',
        answer: 1,
    },
        {
            question: 'Which of the following is not a pointing device?',
            choice1: 'Mouse',
            choice2: 'Light pen',
            choice3: 'Touchscreen',
            choice4: 'Keyboard',
            answer: 4
        },
        {
            question: 'What is the half byte called?',
            choice1: 'Kilobyte',
            choice2: 'Bit',
            choice3: 'Nibble',
            choice4: 'Word size',
            answer: 3
        },
        {
            question: 'What type of drive can be accessed by an operating system in the same way other types of drives are accessed?',
            choice1: 'Optical drive',
            choice2: 'Floppy drive',
            choice3: 'Flash drive',
            choice4: 'Hard drive',
            answer: 3
        },
        {
            question: 'Which of the following is not an output device?',
            choice1: 'Speaker',
            choice2: 'Monitor',
            choice3: 'Plotter',
            choice4: 'Scanner',
            answer: 4
        },
        {
            question: 'Which of the following options represents a non-volatile memory?',
            choice1: 'DRAM',
            choice2: 'SRAM',
            choice3: 'ROM',
            choice4: 'None of the above',
            answer: 3
        },
        {
            question: 'What is the full form of CD?',
            choice1: 'Compact disk',
            choice2: 'Compact directory',
            choice3: 'Common disk',
            choice4: 'Compact drive',
            answer: 1
        },
        {
            question: 'Which component is considered part of computer hardware?',
            choice1: 'Operating system',
            choice2: 'CPU',
            choice3: 'Microsoft Word',
            choice4: 'Java programming',
            answer: 2
        },
        {
            question: 'What is the main function of the motherboard in a computer?',
            choice1: 'Storing data and applications',
            choice2: 'Running software programs',
            choice3: 'Connecting and allowing communication between all other components',
            choice4: 'Providing internet connectivity',
            answer: 3
        },

        {
            question: 'Which device analyzes a physical image such as a photograph, text, or handwriting?',
            choice1: 'Scanner',
            choice2: 'Flatbed',
            choice3: 'Printer',
            choice4: 'Handheld image scanner',
            answer: 1
        },
        {
            question: 'How many data will a high-density (HD) floppy disk hold?',
            choice1: '124 KB',
            choice2: '640 KB',
            choice3: '1.44 MB',
            choice4: '2.88 MB',
            answer: 3
        },
        {
            question: 'What kind of connectors are used to connect a PC power supply to a hard drive?',
            choice1: 'AT',
            choice2: 'Mini-Molex',
            choice3: 'Molex',
            choice4: 'P9',
            answer: 3
        },
        {
            question: 'Which has more storage capacity, CD or DVD?',
            choice1: 'CD',
            choice2: 'DVD',
            answer: 2
        },
        {
            question: 'What are the four key functions of a computer system?',
            choice1: 'Input, processing, output, and storage',
            choice2: 'Bits, bytes, words, and OSI',
            choice3: 'Keyboard, display, memory, and disk drive',
            answer: 1
        },
        {
            question: 'The main system board of a computer is called the?',
            choice1: 'Integrated circuit',
            choice2: 'Processor',
            choice3: 'Software',
            choice4: 'Microchip',
            answer: 1
        },
        {
            question: 'Peripheral devices such as printers and monitors are considered to be?',
            choice1: 'Hardware',
            choice2: 'Data',
            choice3: 'Software',
            choice4: 'Information',
            answer: 1
        }
        
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 26

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions [questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}



/* FAST CLICK*/

const choiceContainers = document.querySelectorAll('.choice-container');

choiceContainers.forEach(choiceContainer => {
    choiceContainer.addEventListener('click', () => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = choiceContainer.querySelector('.choices-text');
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 4000);
    });
});

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}


startGame()