function computerPlay(){
    let moves = ['Rock','Paper','Scissors'];
    return moves[Math.floor(Math.random(3))];
}

function determineWinner(playerSelection, computerSelection){
     let didPlayerWin = false;
     let win = "You win! ";
     let lose = "You lose! ";
    switch(playerSelection.toLowerCase()){
        case 'rock':
            if(computerSelection.toLowerCase() == 'scissors'){
                didPlayerWin = true;
            }
           break;
        case 'paper':
            if(computerSelection.toLowerCase() == 'rock'){
                didPlayerWin = true;
            }
            break;
        case 'scissors':
            if(computerSelection.toLowerCase() == 'paper'){
                didPlayerWin = true;
            }
            break;
    }
    if(didPlayerWin){
        return win + playerSelection + " beats " + computerSelection;
    }
    else{
        return lose + computerSelection + " beats " + playerSelection;
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt('Enter your move: rock, paper, scissors: ');
        console.log(determineWinner(playerSelection, computerPlay()));
    }
}

game();