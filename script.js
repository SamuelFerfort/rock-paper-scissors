

let result = "";
 let playerVictory = 0;
 let computerVictory = 0;
 let computerMove = 0;
 let playerMove;
 console.log("Best of 5!");


function getComputerChoice() {
    let computerMove = Math.ceil(Math.random() * 3);
    if (computerMove === 1) {
        computerMove = "rock";
            
    }
    else if (computerMove === 2) {
        computerMove = "paper";  
    }
    else {
        computerMove = "scissors"    
    }
    console.log(`The computer move is: ${computerMove}`);
    return computerMove;
}
function playRound(playerMove, computerMove){
    playerMove = prompt("Whats your move? ");
    playerMove = playerMove.toLowerCase();
    computerMove = getComputerChoice();
    if (playerMove === computerMove){
        result = "Draw!";
    } else if (
        (playerMove === "rock" && computerMove === "scissors")|| 
        (playerMove === "paper" && computerMove === "rock") || 
        (playerMove === "scissors" && computerMove === "paper")
    ){
        result = `You win! ${playerMove} beats ${computerMove}`
        playerVictory++;
    } else {
        result = `You win! ${computerMove} beats ${playerMove}`
        computerVictory++
    }
    console.log(result);
}
for (let i = 0; i < 5; i++) {
    playRound(playerMove, computerMove);
}
if (playerVictory > computerVictory) {
    console.log(`You won the overall game!`)
}else {
    console.log(`You lost! The computer reach 5 victories first`)
}
    



