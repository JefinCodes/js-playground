function playGame(){
    let computerScore = 0;
    let userScore = 0;
    let totalPoints = 5;
    const rockBtn = document.querySelector("#rock-btn");
    const paperBtn = document.querySelector("#paper-btn");
    const scissorsBtn = document.querySelector("#scissors-btn");

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
            statDisplay.textContent = "No points";
        }
        else if(userChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper"){
            statDisplay.textContent = "Computer scores";
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors"){
            statDisplay.textContent = "You scores";
            userScore++;
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock"){
            statDisplay.textContent = "You scores";
            userScore++;
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "paper"){
            statDisplay.textContent = "No points";
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors"){
            statDisplay.textContent = "Computer scores";
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock"){
            statDisplay.textContent = "Computer scores";
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper"){
            statDisplay.textContent = "You scores";
            userScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "scissors"){
            statDisplay.textContent = "No points";
        }
        userScoreDisplay.textContent = userScore;
        computerScoreDisplay.textContent = computerScore;
        if(userScore == totalPoints || computerScore == totalPoints){
            console.log("Final Scoreboard");
            console.log(`Your points : ${userScore} Computer points : ${computerScore}`);
            if(userScore > computerScore){
                resultDisplay.textContent = "You won";
            }
            else{
                resultDisplay.textContent = "Computer wins";
            }
            rockBtn.removeEventListener('click', rockHandler);
            paperBtn.removeEventListener('click', paperHandler);
            scissorsBtn.removeEventListener('click', scissorsHandler);
            return;
        }
    }

    if(Number(document.querySelector("#total-points").value)){
        totalPoints = Number(document.querySelector("#total-points").value);
    }

    const rockHandler = () => playRound("rock", getComputerChoice());
    const paperHandler = () => playRound("paper", getComputerChoice());
    const scissorsHandler = () => playRound("scissors", getComputerChoice())

    rockBtn.addEventListener('click', rockHandler);
    paperBtn.addEventListener('click', paperHandler);
    scissorsBtn.addEventListener('click', scissorsHandler);
}

const choiceDisplay = document.querySelector("#choices");
const statDisplay = document.querySelector("#stats");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");
const startBtn = document.querySelector("#start");
startBtn.addEventListener('click', playGame);