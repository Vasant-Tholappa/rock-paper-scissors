function computerPlay(){

    if(psum >= 5 || csum >= 5)
    return;

    let options = ["Rock","Paper","Scissors"];

    let choice = options[Math.floor(Math.random()*options.length)];

    return choice;
}



function playRound(playerSelection, computerSelection){

    if(psum >= 5 || csum >= 5)
    return;
    
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return -1;
    }
    else{
        if(playerSelection.toUpperCase() === "ROCK")
        {
            if(computerSelection.toUpperCase() === "PAPER"){
                return 0;
            }
            else if(computerSelection.toUpperCase() === "SCISSORS"){
                return 1;
            }
        }

        else if(playerSelection.toUpperCase() === "PAPER")
        {
            if(computerSelection.toUpperCase() === "ROCK"){
                return 1;
            }
            else if(computerSelection.toUpperCase() === "SCISSORS"){
                return 0;
            }
        }

        else if(playerSelection.toUpperCase() === "SCISSORS")
        {
            if(computerSelection.toUpperCase() === "PAPER"){
                return 1;
            }
            else if(computerSelection.toUpperCase() === "ROCK"){
                return 0;
            }
        }
        
    }


}



let psum = 0;
let csum = 0;

const btns = document.querySelectorAll('.btns');

btns.forEach(btn => {
    btn.addEventListener("click", () => {

            if(psum < 5 && csum <5)
            {
                // let pSelect = document.getElementById(btn.id).textContent;
                let pSelect = document.getElementById(btn.id).textContent;
                let cSelect = computerPlay();
                
                const status = document.querySelector(".status");
                const res = document.createElement('div');
                res.classList.add('res');
                
                let x = playRound(pSelect,cSelect);
                    
                if(x === 0)
                {
                    
                    csum++;
                    // console.log("You lost that one, " + cSelect + " beats " + pSelect + ". Score-> " + "You : " + psum + " & computer : " + csum);
                    res.textContent = "You: " + pSelect + ", Computer: " + cSelect + "." + " You lost this round, overall score: " + "You: " + psum + " & Computer: " + csum;
                    status.appendChild(res);
                }
                else if(x === 1)
                {
                
                    psum++;
                    // console.log("You won that one, " + pSelect + " beats " + cSelect + ". Score-> " + "You : " + psum + " & computer : " + csum);
                    res.textContent = "You: " + pSelect + ", Computer: " + cSelect + "." + " You won this round, overall score: " + "You: " + psum + " & Computer: " + csum;
                    status.appendChild(res);
                }
                else if(x === -1)
                {
                    // console.log("Ooof, you both picked " + pSelect + ". Score-> " + "You : " + psum + " & computer : " + csum);
                    res.textContent = "You: " + pSelect + ", Computer: " + cSelect + "." + " This round is a draw, overall score: " + "You: " + psum + " & Computer: " + csum;
                    status.appendChild(res);
                    
                }

                if(csum === 5 && psum === 5)
                {
                    // console.log("The match is a draw " + psum + " - " + csum + " !");
                    res.textContent = "The match is a draw " + psum + " - " + csum + " !";
                    status.appendChild(res);
                }

                else if(csum === 5)
                {
                    // console.log("You lost the match " + psum + " - " + csum + " ,nice try tho!");
                    res.textContent = "You lost the match " + psum + " - " + csum + " ,nice try tho!";
                    status.appendChild(res);
                }

                else if(psum === 5)
                {
                    // console.log("Congratulations, you won the match " + psum + " - " + csum + " !");
                    res.textContent = "Congratulations, you won the match " + psum + " - " + csum + " !";
                    status.appendChild(res);
                }



            }

        
    });
});


    
        
  



