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
        if ( 
            (playerSelection === "rock" || "Rock" || "ROCK") 
            && ComputerSelection === "Scissors!") {
                return "You win! Rock defeat scissors";
        } else if ( 
            (playerSelection === "paper" || "Paper" || "PAPER") 
            && ComputerSelection === "Rock!") {
                return "You win! Paper defeat scissors";
        } else if ( 
            (playerSelection === "scissors" || "Scissors" || "SCISSORS")
            && ComputerSelection === "Paper!") {
                return "You win! Scissors defeat paper"
        }
        else {
            return "please choose between rock, paper, or scissors"
        }
    }
    console.log(singleRound("scissors", "Paper!"));

// Make battle of rock, paper, scissors between player and computer
// Print output of the result in console browser