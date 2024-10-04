let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorPara = document.querySelector("#user-score");
const compScorPara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw play again.";
    msg.style.backgroundColor = "rgb(14, 14, 29)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorPara.innerText = userScore;
        msg.innerText = `You Win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorPara.innerText = compScore;
        msg.innerText = `You Loss ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playgame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = getCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice == compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
           userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            //rock, scissor
           userWin =  compChoice === "scissor" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
        })
})