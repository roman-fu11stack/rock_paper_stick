let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.game-btn');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const statusDiv = document.querySelector('#status');
const scoreDiv = document.querySelector('#score');

// Button clicks
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const humanChoice = event.target.id;
        const aiChoice = getComputerChoice();
        function playRound(hChoice, aChoice) {
            if (humanChoice === aiChoice) {
                statusDiv.textContent = "It's a tie"
            } else if (humanChoice === "rock" && aiChoice === "scissors" || humanChoice === "paper" && aiChoice === "rock" || humanChoice === "scissors" && aiChoice === "paper" ) {
                humanScore += 1;
                statusDiv.textContent = `You win ${humanChoice} beat ${aiChoice}`
            } else {
                computerScore += 1;
                statusDiv.textContent = `AI win ${aiChoice} beat ${humanChoice}`
            }
            scoreDiv.textContent = `YOUR SCORE: ${humanScore} | AI SCORE: ${computerScore}`
        }
        playRound()
    });
});

// Random computer choice
function getComputerChoice() {
    const items = ['rock', 'paper', 'scissors'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
};
 
// One round logic!
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper" ) {
        humanScore += 1;
        console.log(`You win ${humanChoice} beat ${computerChoice}`)
    } else {
        computerScore += 1;
        console.log(`Computer win ${computerChoice} beat ${humanChoice}`)
    }
}