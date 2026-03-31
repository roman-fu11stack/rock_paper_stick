let humanScore = 0;
let computerScore = 0;

// Random computer choice
function getComputerChoice() {
    const items = ['rock', 'paper', 'scissors'];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return randomItem
}
 
// Player choice 
function getHumanChoice() {
    let humanChoice = window.prompt("Enter: rock, paper or scissors: ")
    return humanChoice.toLowerCase()
}

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

// Whole game logic
function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {
        return `Human win! Score ${humanScore} - ${computerScore}`
    } else {
        return `Computer win! Score ${humanScore} - ${computerScore}`
    }
}

console.log(playGame())