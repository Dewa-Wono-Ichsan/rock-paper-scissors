
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

rock.addEventListener('click', () => {
console.log('rock')})

paper.addEventListener('click', () => { 
console.log('paper')})

scissors.addEventListener('click', () => { 
console.log('scissors')})