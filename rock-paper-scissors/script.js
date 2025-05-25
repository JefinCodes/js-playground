function playGame(){
    let computerScore = 0;
    let userScore = 0;
    let totalPoints = 5;
    choiceDisplay.textContent = ``;
    statDisplay.textContent = ``;
    resultDisplay.textContent = ``;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;

    function getComputerChoice(){
        let randomValue = Math.random();
        if(randomValue < 0.33){
            return "rock";
        }
        else if(randomValue < 0.66){
            return "paper";
        }
        return "scissors";
    }

    function playRound(userChoice, computerChoice){
        choiceDisplay.textContent = `You chooses : ${userChoice.toLowerCase()} | Computer chooses : ${computerChoice.toLowerCase()}`;
        if(userChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "rock"){
            statDisplay.textContent = `No points`;
        }
        else if(userChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper"){
            statDisplay.textContent = `Computer scores`;
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors"){
            statDisplay.textContent = `You scores`;
            userScore++;
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock"){
            statDisplay.textContent = `You scores`;
            userScore++;
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "paper"){
            statDisplay.textContent = `No points`;
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors"){
            statDisplay.textContent = `Computer scores`;
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock"){
            statDisplay.textContent = `Computer scores`;
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper"){
            statDisplay.textContent = `You scores`;
            userScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "scissors"){
            statDisplay.textContent = `No points`;
        }
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
        if(userScore >= totalPoints || computerScore >= totalPoints){
            rockBtn.removeEventListener('click', rockHandler);
            paperBtn.removeEventListener('click', paperHandler);
            scissorsBtn.removeEventListener('click', scissorsHandler);
            instruction1Display.textContent = ``;
            instruction2Display.textContent = ``;
            if(userScore > computerScore){
                resultDisplay.textContent = `You won`;
            }
            else{
                resultDisplay.textContent = `Computer wins`;
            }
            inputTotalPoints.focus();
        }
    }

    if(Number(inputTotalPoints.value)){
        totalPoints = Number(inputTotalPoints.value);
    }

    inputTotalPoints.value = ``;

    instruction1Display.textContent = `Game started for ${totalPoints} points`;
    instruction2Display.textContent = `Select you choice`;

    const rockHandler = () => playRound("rock", getComputerChoice());
    const paperHandler = () => playRound("paper", getComputerChoice());
    const scissorsHandler = () => playRound("scissors", getComputerChoice())

    rockBtn.addEventListener('click', rockHandler);
    paperBtn.addEventListener('click', paperHandler);
    scissorsBtn.addEventListener('click', scissorsHandler);
}

const inputTotalPoints = document.querySelector("#total-points");
const instruction1Display = document.querySelector("#instruction1");
const instruction2Display = document.querySelector("#instruction2");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const choiceDisplay = document.querySelector("#choices");
const statDisplay = document.querySelector("#stats");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");
const startBtn = document.querySelector("#start");
inputTotalPoints.focus();
startBtn.addEventListener('click', playGame);