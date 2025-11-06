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
    const humanDiff = Math.abs(targetNumber - humanGuess);
    const computerDiff = Math.abs(targetNumber - comGuess);

    if (humanDiff <= computerDiff) return 'human';
    else return 'computer';
};

const updateScore = (output) => {
    if (output === 'human') humanScore++;
    else if (output === 'computer') computerScore++;
}

const advanceRound = () => currentRoundNumber++;