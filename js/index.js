const computerChoiceDisplay = document.getElementById("computer-choice");
const computerScoreDisplay = document.getElementById("computer-score");

const userChoiceDisplay = document.getElementById("user-choice");
const userScoreDisplay = document.getElementById("user-score");

const result = document.getElementById("result");
const options = document.querySelectorAll("button");


let computerChoice = getComputerChoice();
let computerScore = computerScoreDisplay.innerHTML;

let userChoice = "";
let userScore = userScoreDisplay.innerHTML;

console.log(computerChoice);
options.forEach((options) =>
    options.addEventListener("click", (e) => {
        userChoice = e.target.id;
        computerChoice = getComputerChoice(options);

        userChoiceDisplay.innerHTML = userChoice;
        computerChoiceDisplay.innerHTML = computerChoice;

        if (userChoice === "Rock" && computerChoice === "Paper") {
            computerScoreDisplay.innerHTML = ++computerScore;
            result.innerHTML = "Computer Wins";
        } else if (userChoice === "Rock" && computerChoice === "Scissors") {
            userScoreDisplay.innerHTML = ++userScore;
            result.innerHTML = "You Win";
        } else if (userChoice === "Paper" && computerChoice === "Scissors") {
            computerScoreDisplay.innerHTML = ++computerScore;
            result.innerHTML = "Computer Wins";
        } else if (userChoice === "Paper" && computerChoice === "Rock") {
            userScoreDisplay.innerHTML = ++userScore;
            result.innerHTML = "You Win";
        } else if (userChoice === "Scissors" && computerChoice === "Rock") {
            computerScoreDisplay.innerHTML = ++computerScore;
            result.innerHTML = "Computer Wins";
        } else if (userChoice === "Scissors" && computerChoice === "Paper") {
            userScoreDisplay.innerHTML = ++userScore;
            result.innerHTML = "You Win";
        } else {
            result.innerHTML = "Draw";
        }
    })
);

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
