const computerChoiceDisplay = document.getElementById("computer-choice");
const computerScoreDisplay = document.getElementById("computer-score");

const userChoiceDisplay = document.getElementById("user-choice");
const userScoreDisplay = document.getElementById("computer-score");

const result = document.getElementById("result");
const options = document.querySelectorAll("button");

let userChoice = "";
let computerChoice = getComputerChoice();
let computerScore = computerScoreDisplay.innerHTML;
alert(computerScore);

console.log(computerChoice);
options.forEach((options) =>
    options.addEventListener("click", (e) => {
        userChoice = e.target.id;
        computerChoice = getComputerChoice(options);

        userChoiceDisplay.innerHTML = userChoice;
        computerChoiceDisplay.innerHTML = computerChoice;

        console.log(computerChoice);

        if (userChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            result.innerHTML = "Computer Wins";
        } else if (userChoice === "Rock" && computerChoice === "Scissors") {
            userScore++;
            result.innerHTML = "You Win";
        } else if (userChoice === "Paper" && computerChoice === "Scissors") {
            computerScore++;
            result.innerHTML = "Computer Wins";
        } else if (userChoice === "Paper" && computerChoice === "Rock") {
            userScore++;
            result.innerHTML = "You Win";
        } else if (userChoice === "Scissors" && computerChoice === "Rock") {
            computerScore++;
            result.innerHTML = "Computer Wins";
        } else if (userChoice === "Scissors" && computerChoice === "Paper") {
            computerScore++;
            result.innerHTML = "Computer Wins";
        } else result.innerHTML = "Draw";
    })
);

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}
