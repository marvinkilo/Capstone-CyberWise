//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "What should you do if you receive a suspicious text message asking for personal information or payment?",
        options: ["Reply with the requested information", "Call the provided number", "Click any links in the message", "Delete the message and do not respond"],
        correct: "Delete the message and do not respond",
    },
    {
        id: "1",
        question: "Which of the following is a red flag indicating a potential phishing email?",
        options: ["Generic Greetings", "Urgent Language", "Official Sender Address", "Verified Logo"],
        correct: "Urgent Language",
    },
    {
        id: "2",
        question: "Who is often considered the 'father of social engineering' and wrote the book 'The Art of Deception'?",
        options: ["Kevin Mitnick", "Edward Snowden", "Julian Assange", "Adrian Lamo"],
        correct: "Kevin Mitnick",
    },
    {
        id: "3",
        question: "What is the term for a deceptive technique used to trick individuals into revealing confidential information over the phone?",
        options: ["Vishing", "Pharming", "Spoofing", "Malvertising"],
        correct: "Vishing",
    },
    {
        id: "4",
        question: "What should you do if you receive an unexpected email with a link and request for sensitive information?",
        options: ["Click the link and provide the information", "Ignore the email", "Forward it to your colleagues", "Verify with the sender through a trusted channel"],
        correct: "Verify with the sender through a trusted channel",
    },
    {
        id: "5",
        question: "Which type of attack involves tricking individuals into revealing their passwords or other sensitive information by pretending to be a trustworthy entity?",
        options: ["Phishing", "Ransomware", "DDoS", "Spyware"],
        correct: "Phishing",
    },
    {
        id: "6",
        question: "What precautionary measure can help protect against phishing attacks?",
        options: ["Using a public Wi-Fi network", "Regularly updating passwords", "Sharing passwords with colleagues", "Disabling antivirus software"],
        correct: "Regularly updating passwords",
    },
    {
        id: "7",
        question: "What is the term for a fraudulent practice of sending emails or messages claiming to be from reputable sources in order to induce individuals to reveal personal information?",
        options: ["Phishing", "Spoofing", "Malware", "Spying"],
        correct: "Phishing",
    },
    {
        id: "8",
        question: "What is the most common method used by cybercriminals to trick individuals into revealing sensitive information?",
        options: ["Spear Phishing", "Vishing", "Smishing", "Shoulder Surfing"],
        correct: "Spear Phishing",
    },
    {
        id: "9",
        question: "Which of the following is a recommended practice to enhance cybersecurity awareness?",
        options: ["Sharing passwords openly", "Ignoring software updates", "Clicking on unknown links", "Participating in cybersecurity training"],
        correct: "Participating in cybersecurity training",
    },
];


//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

// ... (previous code)

// ... (previous code)

// Function to display a message based on the user's score
// ... (previous code)

// Function to display a styled message based on the user's score
function displayMessage(score) {
    let message = "";
    let teamMessage = "From Team Cyberwise: ";
    let teamMessageStyle = "color: black; font-weight: bold;"; // Red color for "From Team Cyberwise"
    let scoreStyle = "color: black;"; // Black color for the score

    if (score < 5) {
        message = "Your cybersecurity knowledge needs improvement. Keep learning!";
        scoreStyle = "color: orange;"; // Orange color for scores below 5
    } else if (score >= 5 && score <= 8) {
        message = "Good effort! You have a decent understanding of cybersecurity.";
        scoreStyle = "color: yellow;"; // Yellow color for scores between 5 and 8
    } else {
        message = "Excellent! Your cybersecurity knowledge is impressive. Well done!";
        scoreStyle = "color: green;"; // Green color for scores between 9 and 10
    }

    return `<span style="${teamMessageStyle}">${teamMessage}</span><br><span style="${scoreStyle}">Your score is ${score} out of 10.</span><br>${message}`;
}






//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML = `${displayMessage(scoreCount)}`;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};