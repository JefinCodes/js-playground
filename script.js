function playGame(){
    let computerScore = 0;
    let userScore = 0;
    let computerChoice;
    let userChoice;

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

    function getUserChoice(){
        return prompt("Enter your choice");
    }

    function playRound(userChoice, computerChoice){
        console.log(`You chooses : ${userChoice.toLowerCase()} Computer chooses : ${computerChoice.toLowerCase()}`);
        if(userChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "rock"){
            console.log("No points");
        }
        else if(userChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "paper"){
            console.log("Computer scores");
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "rock" && computerChoice.toLowerCase() == "scissors"){
            console.log("You scores");
            userScore++;
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "rock"){
            console.log("You scores");
            userScore++;
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "paper"){
            console.log("No points");
        }
        else if(userChoice.toLowerCase() == "paper" && computerChoice.toLowerCase() == "scissors"){
            console.log("Computer scores");
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "rock"){
            console.log("Computer scores");
            computerScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "paper"){
            console.log("You scores");
            userScore++;
        }
        else if(userChoice.toLowerCase() == "scissors" && computerChoice.toLowerCase() == "scissors"){
            console.log("No points");
        }
        console.log(`Your points : ${userScore} Computer points : ${computerScore}`);
    }

    for(let i = 0; i < 5; i++){
        computerChoice = getComputerChoice();
        userChoice = getUserChoice();
        playRound(userChoice, computerChoice);
    }

    console.log("Final Scoreboard");
    console.log(`Your points : ${userScore} Computer points : ${computerScore}`);
    if(userScore > computerScore){
        console.log("You won");
    }
    else if(userScore == computerScore){
        console.log("Match tied");
    }
    else{
        console.log("Computer wins");
    }

}

playGame();