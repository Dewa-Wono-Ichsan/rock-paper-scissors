
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
    const result = document.createElement('div')

        if (score !== 5 && score !== -5) {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.classList.toggle('player-choice')
            div.textContent = 
            `user choose ${playerSelection} and computer choose ${computerSelection}`
            
            const point = document.createElement('div')
            document.body.appendChild(point)
            point.classList.toggle('point')


            if (playerSelection === 'rock'
                && computerSelection === 'Scissors!') {
                
                point.textContent = score++
              }
            else if (playerSelection === 'rock' 
                && computerSelection === 'Paper!') {
                

                point.textContent = score--
                }
            else {
                point.textContent = score
                }
        } else if (score === 5) {
            
            document.body.appendChild(result)
            result.classList.toggle('result')
            result.textContent =  'user win'
            rock.remove()
            paper.remove()
            scissors.remove()
        } else {
            
            document.body.appendChild(result)
            result.classList.toggle('result')
            result.textContent = 'computer win'
            rock.remove()
            paper.remove()
            scissors.remove()
        }

    }
)

paper.addEventListener('click', () => { 
    let playerSelection = 'paper'
    let computerSelection = getComputerChoice()
    const result = document.createElement('div')

        if (score !== 5 && score !== -5) {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.classList.toggle('player-choice')
            div.textContent = 
            `user choose ${playerSelection} and computer choose ${computerSelection}`
            
            const point = document.createElement('div')
            document.body.appendChild(point)
            point.classList.toggle('point')


            if (playerSelection === 'paper'
                && computerSelection === 'Rock!') {
                
                point.textContent = score++
              }
            else if (playerSelection === 'paper' 
                && computerSelection === 'Scissors!') {
                

                point.textContent = score--
                }
            else {
                point.textContent = score
                }
        } else if (score === 5) {
            
            document.body.appendChild(result)
            result.classList.toggle('result')
            result.textContent =  'user win'
            rock.remove()
            paper.remove()
            scissors.remove()
        } else {
            
            document.body.appendChild(result)
            result.classList.toggle('result')
            result.textContent = 'computer win'
            rock.remove()
            paper.remove()
            scissors.remove()
        }
    }
)

scissors.addEventListener('click', () => { 

    }
)