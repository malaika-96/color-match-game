const colors = ["red", "green", "blue", "yellow"];
let score = 0;
let currentColor = "";
let gameStarted = false;

const colorName = document.getElementById("colorName");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");
const startBtn = document.getElementById("startBtn");
const buttons = document.querySelectorAll(".color-btn");

function getRandomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const textColor = colors[Math.floor(Math.random() * colors.length)];
    colorName.textContent = color.toUpperCase();
    colorName.style.color = textColor;
    currentColor = textColor;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!gameStarted) return;
        if (btn.dataset.color === currentColor) {
            score++;
            message.textContent = "Correct!";
        } else {
            message.textContent = "Wrong!";
        }
        scoreDisplay.textContent = `Score: ${score}`;
        getRandomColor();
    });
});

startBtn.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    gameStarted = true;
    message.textContent = "";
    getRandomColor();
});
