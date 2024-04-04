
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
    let playerSelection = 'rock'
    let computerSelection = getComputerChoice()

        if (score !== 5 && score !== -5) {

            console.log(
                `user choose ${playerSelection} and
                computer choose ${computerSelection}`
            )

            if (playerSelection === 'rock' 
            && computerSelection === 'Rock!') {
            console.log(score++)
              }
            else if (playerSelection === 'rock' 
            && computerSelection === 'Paper!') {
            console.log(score--)
                }
            else {
            console.log(score)
                }
        } else if (score === 5) {
            console.log('user win')
            rock.remove()
            paper.remove()
            scissors.remove()
        } else {
            console.log('computer win')
            rock.remove()
            paper.remove()
            scissors.remove()
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