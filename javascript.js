let playerScore = 0;
let comScore = 0;

function compare(human, com) {
    const message = document.querySelector("#message");
    if (human === com) message.textContent = "draw!";
    else if (human === 0 && com === 2) message.textContent = "win!";
    else if (com === 0 && human === 2) message.textContent = "lose!";
    else if (human < com) message.textContent = "lose!";
    else if (human > com) message.textContent = "win!";

    switch (message.textContent) {
        case "win!":
            ++playerScore;
            break;
        case "lose!":
            ++comScore;
            break;
    }

    const score = document.querySelector("#score");
    score.textContent = playerScore + ":" + comScore;
}

function playround(humanChoice) {
    let comChoice = Math.floor(getComChoice());
    const com = document.querySelector("#com");

    switch (comChoice) {
        case 0:
            console.log("com: rock");
            com.textContent = "com: rock";
            break;
        case 1:
            console.log("com: paper");
            com.textContent = "com: paper";
            break;
        case 2:
            console.log("com: scissors");
            com.textContent = "com: scissors";
            break;
    }

    console.log(humanChoice);

    switch (humanChoice) {
        case "rock":
            compare(0, comChoice);
            break;
        case "paper":
            compare(1, comChoice);
            break;
        case "scissors":
            compare(2, comChoice);
            break;
    }
}

function getComChoice() {
    return Math.random() * 3.0;
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => { playround(button.textContent) });
});
