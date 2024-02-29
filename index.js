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
        return "You Win! Scissors defeat paper" // three win condition
        } else if (playerSelection === "rock" && ComputerSelection === "Rock!"
        || playerSelection === "Rock" && ComputerSelection === "Rock!"
        || playerSelection === "ROCK" && ComputerSelection === "Rock!"
        || playerSelection === "ROck" && ComputerSelection === "Rock!"
        || playerSelection === "roCK" && ComputerSelection === "Rock!") {
        return "You draw! Rock has same power with rock"
        } else if (playerSelection === "paper" && ComputerSelection === "Paper!"
        || playerSelection === "Paper" && ComputerSelection === "Paper!"
        || playerSelection === "PAPER" && ComputerSelection === "Paper!"
        || playerSelection === "PAper" && ComputerSelection === "Paper!"
        || playerSelection === "papER" && ComputerSelection === "Paper!") {
        return "You draw! Paper has same power with paper"
        } else if (playerSelection === "scissors" && ComputerSelection === "Scissors!"
        || playerSelection === "Scissors" && ComputerSelection === "Scissors!"
        || playerSelection === "SCISSORS" && ComputerSelection === "Scissors!"
        || playerSelection === "SCIssors" && ComputerSelection === "Scissors!"
        || playerSelection === "sciSSORS" && ComputerSelection === "Scissors!") {
        return "You draw! Scissors has same power with scissors" // three draw condition
        } else if (playerSelection === "rock" && ComputerSelection === "Paper!"
        || playerSelection === "Rock" && ComputerSelection === "Paper!"
        || playerSelection === "ROCK" && ComputerSelection === "Paper!"
        || playerSelection === "ROck" && ComputerSelection === "Paper!"
        || playerSelection === "roCK" && ComputerSelection === "Paper!") {
        return "You lose! Rock cannot defeat paper"
        } else if (playerSelection === "paper" && ComputerSelection === "Scissors!"
        || playerSelection === "Paper" && ComputerSelection === "Scissors!"
        || playerSelection === "PAPER" && ComputerSelection === "Scissors!"
        || playerSelection === "PAPer" && ComputerSelection === "Scissors!"
        || playerSelection === "papER" && ComputerSelection === "Scissors!") {
        return "You lose! Paper has no power against scissors"
        } else if (playerSelection === "scissors" && ComputerSelection === "Rock!"
        || playerSelection === "Scissors" && ComputerSelection === "Rock!"
        || playerSelection === "SCISSORS" && ComputerSelection === "Rock!"
        || playerSelection === "SCIssors" && ComputerSelection === "Rock!"
        || playerSelection === "sciSSORS" && ComputerSelection === "Rock!") {
        return "You lose! Scissors must be faced with its greatest fear" //three lose condition
        }
        else {
            return "try something else"
        }
    }

    console.log(singleRound("scissors", "Rock!"));
    console.log(singleRound("paper", "Scissors!"));
    console.log(singleRound("rock", "Scissors!"));
    console.log(singleRound("RocK", "Scissors!"));
    console.log(singleRound("RoCK", "Scissors!"));
    console.log(singleRound("paper", "Rock!"));
    console.log(singleRound("PAPER", "Rock!"));
    console.log(singleRound("PAper", "Rock!"));
    console.log(singleRound("scissors", "Paper!"));
    console.log(singleRound("SCISSORS", "Paper!"));
    console.log(singleRound("sss", "Paper!"));
    console.log(singleRound("scissors", "Scissors!"));
    console.log(singleRound("SCISSORS", "Scissors!"));
    console.log(singleRound("rock", "Rock!"));
    console.log(singleRound("paper", "Paper!"));
    console.log(singleRound("rock", "Paper!"));
    console.log(singleRound("rrr","Rock!")); 
    console.log(singleRound("qqq", "Scissors!"));

// Make battle of rock, paper, scissors between player and computer
// Print output of the result in console browser