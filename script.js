const player_choice = document.querySelector('#player');
const computer_choice = document.querySelector('#computer');
const match_result = document.querySelector('#result');

const choice = document.querySelectorAll('.btn');

let player;
let computer;
let result;

choice.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    ComputerChoice();
    player_choice.textContent = `Player: ${player}`;
    computer_choice.textContent = `Computer: ${computer}`;
    match_result.textContent = Result();
}));


function ComputerChoice() {
    let RandomNum = Math.floor(Math.random() * 3) + 1;

    switch (RandomNum) {
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper";
            break;
        case 3:
            computer = "scissors";
            break;
    }
}

function Result() {
    if (computer == player) {
        return "Draw!";
    } else if (computer == "paper") {
        return (player == "scissors") ? "You Win!" : "You Lose!";
    } else if (computer == "rock") {
        return (player == "paper") ? "You Win!" : "You Lose!";
    } else if (computer == "scissors") {
        return (player == "rock") ? "You Win!" : "You Lose!";
    }
}