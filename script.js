const container = document.querySelector('.container');
const decisionButtons = document.querySelectorAll('.decisions button');
const startNew = document.querySelector('.start-new');
let gameStatus = document.querySelector('.status');
let gameRoundCase = document.querySelector('.case');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let playerSymbol = document.querySelector('.player-symbol');
let computerSymbol = document.querySelector('.computer-symbol');
let playerWins = 0;
let computerWins = 0;

function getPlayerChoice(playerChoice){
    let decision = playerChoice.target.className;
    return decision;
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 1:
            choice = 'scissors';
            break;
        case 2: 
            choice = 'rock';
            break;
        case 3:
            choice = 'paper'
            break
    }
    return choice;
}

function getWinner(playerDecision, computerDecision){
    let winner = 'You won the round!';
    playerWins++
    return winner;
}

function getCase(playerDecision, computerDecision){
    let roundCase;
    roundCase = 'HANA I MUN KREJT!';
    return roundCase;
}

function updateRoundStatus(winner){
    gameStatus.textContent = winner;
}

function updateCase(roundCase){
    gameRoundCase.textContent = roundCase;
}

function updateScore(){
    playerScore.textContent = `Player: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
}

function announceWinner(){
    if(playerWins == 5){
        gameStatus.textContent = "HANA FITON!";
      
    }
    if(computerWins == 5){
        gameStatus.textContent = "You Lost The Game!";
        
    }
}

function resetGame(){
       
        playerWins = 0;
        computerWins = 0;
        gameStatus.textContent = 'Choose your weapon';
        updateScore();
        gameRoundCase.textContent = 'First to score 5 wins the game';
        computerSymbol.textContent = '❔';
}

function playRound(playerDecision, computerDecision){
        let winner = getWinner(playerDecision, computerDecision);
        let roundCase = getCase(playerDecision, computerDecision);
        updateScore();
        updateRoundStatus(winner);
        updateCase(roundCase);
        announceWinner();
}

function decisionMade(playerChoice){
    if(playerWins < 5 && computerWins < 5){
    let playerDecision = getPlayerChoice(playerChoice);
    let computerDecision = getComputerChoice();
    playRound(playerDecision, computerDecision);
    if(playerDecision == 'rock') playerSymbol.textContent = '✊🏻';
    if(playerDecision == 'paper') playerSymbol.textContent = '🖐🏻';
    if(playerDecision == 'scissors') playerSymbol.textContent = '✌🏻';
    if(computerDecision == 'rock') computerSymbol.textContent = '✊';
    if(computerDecision == 'paper') computerSymbol.textContent = '✋';
    if(computerDecision == 'scissors') computerSymbol.textContent = '✌️';
    }
}

decisionButtons.forEach(button => button.addEventListener('click', decisionMade));
startNew.addEventListener('click', resetGame);