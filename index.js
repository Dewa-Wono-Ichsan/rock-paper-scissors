// Make simple game rock, paper, scissors with javascript
// Input come from user and computer
// Participant from user and computer
// Output the result of the winner in console browser


// Plan process rock, paper, scissors

// Make variable to store the choice for user
// Make variable to store the choice for computer
// Make computer choice between rock, paper, and scissors
    function getComputerChoice() {
        let computerChoice = Math.random() * 10;

        if (computerChoice < 4) {
            return "Rock!";
        } else if (computerChoice < 7) {
            return "Paper!";
        } else if (computerChoice < 10) {
            return "Scissors!";
        } else {
            return ""
        }
    }


// Make condition of win, draw, and lose the game
    function singleRound(playerSelection, ComputerSelection) {
        if (playerSelection === "rock" && ComputerSelection === "Scissors!"
            || playerSelection === "Rock" && ComputerSelection === "Scissors!"
            || playerSelection === "ROCK" && ComputerSelection === "Scissors!"
            || playerSelection === "RocK" && ComputerSelection === "Scissors!"
            || playerSelection === "RoCK" && ComputerSelection === "Scissors!") {
            return "You Win! Rock defeat scissors"
        } else if (playerSelection === "paper" && ComputerSelection === "Rock!"
        || playerSelection === "Paper" && ComputerSelection === "Rock!"
        || playerSelection === "PAPER" && ComputerSelection === "Rock!"
        || playerSelection === "PapeR" && ComputerSelection === "Rock!"
        || playerSelection === "PAper" && ComputerSelection === "Rock!") {
        return "You Win! Paper defeat rock"
        } else if (playerSelection === "scissors" && ComputerSelection === "Paper!"
        || playerSelection === "Scissors" && ComputerSelection === "Paper!"
        || playerSelection === "SCISSORS" && ComputerSelection === "Paper!"
        || playerSelection === "ScissorS" && ComputerSelection === "Paper!"
        || playerSelection === "sCISSORs" && ComputerSelection === "Paper!") {
        return "You Win! Scissors defeat paper"
        }
        else {
            return "try something else"
        }
    }

    console.log(singleRound("rock", "Scissors!"));
    console.log(singleRound("RocK", "Scissors!"));
    console.log(singleRound("RoCK", "Scissors!"));
    console.log(singleRound("paper", "Rock!"));
    console.log(singleRound("PAPER", "Rock!"));
    console.log(singleRound("PAper", "Rock!"));
    console.log(singleRound("scissors", "Paper!"));
    console.log(singleRound("SCISSORS", "Paper!"));
    console.log(singleRound("sss", "Paper!"));
    console.log(singleRound("rrr","Rock!")); 
    console.log(singleRound("qqq", "Scissors!"));

// Make battle of rock, paper, scissors between player and computer
// Print output of the result in console browser