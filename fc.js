function computerPlay(){
    let randomInt = Math.floor(Math.random() * 3);
    let computerSelection = '';
    
    if(randomInt === 0){
        computerSelection = 'rock';
    }
    if(randomInt === 1){
        computerSelection = 'paper';
    }
    if(randomInt === 2){
        computerSelection = 'scissors';
    }
    return computerSelection;
}
function playerPlay(){
    let playerInput = prompt("Type Rock, Paper, or Scissors: ").toLowerCase();
    return playerInput;
}

function playRound(playerSelection, computerSelection) {
    let roundWinner = '';

    if(playerSelection === computerSelection){
        roundWinner = "It's a tie!";
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors'){
        roundWinner = "You win! rock beats scissors!";
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        roundWinner = "You lose! paper beats rock!";
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        roundWinner = "You lose! scissors beats paper!";
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        roundWinner = "You win! paper beats rock!";
    }
    else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        roundWinner = "You lose! rock beats scissors!";
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        roundWinner = "You win! scissors beats paper!";
    }
    
    return roundWinner;
  }
  
  function game(){
      playerPoints = 0;
      computerPoints = 0;
      computerTurn = '';
      playerTurn = '';
      roundResult = '';
        
      for(i = 0; i < 5; ++i){
        playerTurn = playerPlay();
        computerTurn = computerPlay();

        roundResult = playRound(playerTurn, computerTurn);

        if(roundResult.includes('You win')){
            playerPoints +=1;
            console.log(roundResult+ "The score is:" + playerPoints + "to" + computerPoints);
        }
        else if(roundResult.includes('You lose')){
            computerPoints +=1;
            console.log(roundResult+ "The score is:" + playerPoints + "to" + computerPoints);
        }else{
            i -=1;
            console.log(roundResult+ "The score is:" + playerPoints + "to" + computerPoints);
        }
      }

      if(playerPoints > computerPoints){
          console.log("You won the game! for" + playerPoints + "to" + computerPoints);
      }else{
          console.log("You lost the game! for" + playerPoints + "to" + computerPoints);
      }
  }


  
  game();