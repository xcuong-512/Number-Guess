// ====== Biến toàn cục ======
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// ====== Hàm tạo số mục tiêu (0–9) ======
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// ====== Hàm so sánh dự đoán ======
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    // Tính khoảng cách giữa dự đoán và số mục tiêu
    const humanDiff = Math.abs(targetNumber - humanGuess);
    const computerDiff = Math.abs(targetNumber - computerGuess);

    return humanDiff <= computerDiff;
};

// ====== Hàm cập nhật điểm ======
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

// ====== Hàm tăng vòng chơi ======
const advanceRound = () => {
    currentRoundNumber++;
};
