let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.game-btn');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const statusDiv = document.querySelector('#status');
const scoreDiv = document.querySelector('#score');

// Button clicks and whole game logic!
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        
        const humanChoice = event.target.id;
        const aiChoice = getComputerChoice();

        if (humanScore < 5 && computerScore < 5) {
            playRound(humanChoice, aiChoice)
        } else if (humanScore >= 5) {
            statusDiv.textContent = `Human win! You hit 5 points first!`
            return
        } else if (computerScore >= 5) {
            statusDiv.textContent = `AI win! It hit 5 points first!`
            return
        };  
    });
});

// Round game logic
function playRound(hChoice, aChoice) {
    if (hChoice === aChoice) {
        statusDiv.textContent = "It's a tie"
    } else if (hChoice === "rock" && aChoice === "scissors" || hChoice === "paper" && aChoice === "rock" || hChoice === "scissors" && aChoice === "paper" ) {
        humanScore += 1;
        statusDiv.textContent = `You win ${hChoice} beat ${aChoice}`
    } else {
        computerScore += 1;
        statusDiv.textContent = `AI win ${aChoice} beat ${hChoice}`
    }
        scoreDiv.textContent = `YOUR SCORE: ${humanScore} | AI SCORE: ${computerScore}`
};


// Random computer choice
function getComputerChoice() {
    const items = ['rock', 'paper', 'scissors'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem;
};
