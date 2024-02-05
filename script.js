
let result = "";
let playerVictory = 0;
let computerVictory = 0;
let computerMove = "";
const displayWinner = document.querySelector("#section");
const p = document.createElement("p");
const displayResult = document.createElement("p");


function getComputerChoice() {
    let computerMove = Math.ceil(Math.random() * 3);
    if (computerMove === 1) {
        computerMove = "rock";         
    }
    else if (computerMove === 2) {
        computerMove = "paper";  
    }
    else {
        computerMove = "scissors";    
    }
    return computerMove;
}


function playRound(playerMove, computerMove){
    if ((playerVictory + computerVictory) < 5) {
        playerMove = playerMove.toLowerCase();
        computerMove = getComputerChoice();


        if (playerMove === computerMove){
            result = `Draw!`;
            
        } else if (
            (playerMove === "rock" && computerMove === "scissors")|| 
            (playerMove === "paper" && computerMove === "rock") || 
            (playerMove === "scissors" && computerMove === "paper")
        ){
            result = `You win! ${playerMove} beats ${computerMove}`;
            playerVictory++;
        } else {
            result = `You lose! ${computerMove} beats ${playerMove}`;
            computerVictory++;
        }
        
        
        const computerMoveDisplay = document.createElement("p");
        computerMoveDisplay.innerText = `The computer move is ${computerMove}`
        displayWinner.appendChild(computerMoveDisplay)
        

        setTimeout(() => {
            const resultDisplay = document.createElement("p");
            resultDisplay.innerText = result;
            displayWinner.appendChild(resultDisplay);
        }, 500);
        console.log(computerVictory);
    }else {
        displayWinnerResult();
    }
}


function displayWinnerResult() {
        if (playerVictory > computerVictory) {
            displayResult.innerHTML = `You win ${playerVictory} to ${computerVictory}`;
        } else {
            displayResult.innerHTML = `You lose ${computerVictory} to ${playerVictory}`;
        }
        document.body.appendChild(displayResult);
}


const move = document.querySelectorAll(".playerMove");

move.forEach( element => element.addEventListener("click", () => playRound(element.innerHTML, computerMove)));

    
