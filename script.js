function computerPlay(){
    let options = ["Rock","Paper","Scissors"]

    let choice = options[Math.floor(Math.random()*options.length)]

    return choice
}

computerPlay()

function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return -1
    }
    else{
        if(playerSelection.toUpperCase() === "ROCK")
        {
            if(computerSelection.toUpperCase() === "PAPER"){
                return 0
            }
            else if(computerSelection.toUpperCase() === "SCISSORS"){
                return 1
            }
        }

        else if(playerSelection.toUpperCase() === "PAPER")
        {
            if(computerSelection.toUpperCase() === "ROCK"){
                return 1
            }
            else if(computerSelection.toUpperCase() === "SCISSORS"){
                return 0
            }
        }

        else if(playerSelection.toUpperCase() === "SCISSORS")
        {
            if(computerSelection.toUpperCase() === "PAPER"){
                return 1
            }
            else if(computerSelection.toUpperCase() === "ROCK"){
                return 0
            }
        }
        
    }


}

function game(n){
    let psum = 0;
    let csum = 0;
    for (let i = 0; i < n; i++){
        let pSelect = prompt("Rock, Paper or Scissors? It's Game time!!")
        let cSelect = computerPlay()
        let x = playRound(pSelect,cSelect)

        if(x === 0)
        {
            
            csum++
            console.log("You lost that one, " + cSelect + " beats " + pSelect + ". Score-> " + "You : " + psum + " & computer : " + csum)
        }
        else if(x === 1)
        {
           
            psum++
            console.log("You won that one, " + pSelect + " beats " + cSelect + ". Score-> " + "You : " + psum + " & computer : " + csum)
        }
        else if(x === -1)
        {
            console.log("Ooof, you both picked " + pSelect + ". Score-> " + "You : " + psum + " & computer : " + csum)
            
        }
    }

    if(psum === csum)
    console.log("It's a draw " + psum + " - " + csum + " !")

    else if(psum > csum)
    console.log("Congratulations, you won " + psum + " - " + csum + " !")

    else
    console.log("You lost" + psum + " - " + csum + " ,nice try tho!")
}


let rounds = prompt("How many rounds do you want to play?")
game(rounds)