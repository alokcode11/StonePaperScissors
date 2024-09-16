let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara =  document.querySelector("#user-score");
const compScorePara =  document.querySelector("#computer-score");
const msgReference = document.querySelector('#msg');
const showWinner =(userWin, userChoice ,comp_choice)=>{
if(userWin){
    userScore++;
    userScorePara.textContent = userScore;//innnerText
    msgReference.style.backgroundColor = 'green';
    msgReference.innerText =`You Win  ${userChoice} beats ${comp_choice}`
}
else{
    computerScore++;
    compScorePara.innerText = computerScore;
    msgReference.style.backgroundColor = 'red';
    msgReference.innerText  =`You Lose computer  ${userChoice} beats ${comp_choice}`
}
}

const drawGame = ()=>{
    msgReference.style.backgroundColor = 'blue'
    msgReference.innerText = 'It\'s a Tie'
}

const genComputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const random = Math.floor(Math.random() * 3);
  return option[random];
};

const playGame = (userChoice)=>{
    const comp_choice=genComputerChoice();

    if (userChoice === comp_choice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            if(comp_choice ==="paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "scissor"){
            userWin = comp_choice === "rock" ? false : true ;
        }
        else{
            userWin  = comp_choice === "scissor" ? false : true ;

        }
        showWinner(userWin ,userChoice ,comp_choice);
    }
}

choices.forEach((choice) => {
  choice.addEventListener('click', function (e) {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
