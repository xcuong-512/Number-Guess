let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}
// Test Random Number Function
// console.log(generateTarget());

const compareGuesses = (humanGuess, comGuess, targetNumber) => {
    if (humanGuess === targetNumber) return `Human Win!`;
    else if (comGuess === targetNumber) return 'Computer Win!';
    else 'Human Win';
}

const updateScore = (output) => {
    if (output === 'human') humanScore++;
    else if (output === 'computer') computerScore++;
}

const advanceRound = () => currentRoundNumber++;