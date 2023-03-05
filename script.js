function getComputerChoice(){
   
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      
}
//console.log(getComputerChoice());
function playRound(player,computer){
    if (player=='paper' && computer=='rock'){
        alert("You Win! paper beats rock");
    }
    else if(player=='paper' && computer=='scissors'){
        alert("You Lose! scissors beats paper");
    }
    else if(player=='scissors' && computer=='paper'){
        alert("You Win! scissors beats Rock");
    }
    else if(player=='scissors' && computer=='rock'){
        alert("You Lose! rock beats scissors");
    }
    else if(player=='rock' && computer=='scissors'){
        alert("You Win! rock beats scissors");
    }
    else if(player=='rock' && computer=='paper'){
        alert("You Lose! paper beats rock");
    }
    else if (player==computer){
        alert("TIE!");
    }
}

function thegame(){
    for (let i = 0; i < 5; i++) {
        let player=prompt('give ur choise');
        playRound(player,getComputerChoice());
     }
}
thegame();