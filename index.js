
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



const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

let score = 0

rock.addEventListener('click', () => {
    let playerSelection
    let computerSelection
    console.log(playerSelection = 'rock')
    console.log(computerSelection = getComputerChoice())
    if (playerSelection === 'rock' && computerSelection === 'Rock!') {
    console.log(score++)
        }
    else if (playerSelection === 'rock' && computerSelection === 'Paper!') {
    console.log(score--)
        }
    else {
    console.log(score)
        }
    }
)

paper.addEventListener('click', () => { 
    console.log('paper')
    }
)

scissors.addEventListener('click', () => { 
    console.log('scissors')
    }
)