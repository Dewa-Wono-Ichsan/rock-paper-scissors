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
                return "You win! Rock defeat scissors"; //win condition
        } else if ( 
            (playerSelection === "paper" || "Paper" || "PAPER") 
            && ComputerSelection === "Rock!") {
                return "You win! Paper defeat rock"; //win condition
        } else if ( 
            (playerSelection === "scissors" || "Scissors" || "SCISSORS")
            && ComputerSelection === "Paper!") {
                return "You win! Scissors defeat paper"; //win condition
        } else if (
            (playerSelection === "rock" || "Rock" || "ROCK")
            && ComputerSelection === "Rock!"
        ) {
                return "You draw! Battle between rock power"
        }
        else {
            return "please choose between rock, paper, or scissors"
        }
    }
    console.log(singleRound("scissors", "Paper!"));
    console.log(singleRound("rock", "Rock!")); //wrong result
    console.log(singleRound("sss", "Paper!")); //wrong result
    console.log(singleRound("rrr","Rock!")); //wrong result
    console.log(singleRound("qqq", "Scissors!"));//wrong result

// Make battle of rock, paper, scissors between player and computer
// Print output of the result in console browser