let options = ['paper', 'scissors', 'rock']
function getComputerChoice(){
    let randNum = Math.floor(Math.random() * options.length)
    return options[randNum]
}

function playRound(playerSelection, computerSelection){
    let score
    let playerSelectionNum = options.indexOf(playerSelection.toLowerCase())
    let computerSelectionNum = options.indexOf(computerSelection.toLowerCase())
    if(playerSelectionNum == computerSelectionNum){
        console.log('It is a tie!')
        score = 0
    } else if((playerSelectionNum+1)%3 == computerSelectionNum) {
        console.log('You lose!')
        score = 1
    }  else if((computerSelectionNum+1)%3 == playerSelectionNum) {
        console.log('You won!')
        score = 2
    }
    return score
}

const playerSelection = "rock"
function playGame(){
    let myscore = 0
    let hisscore = 0
    for(let i=0; i<5; i++){
        const computerSelection = getComputerChoice()
        console.log(playerSelection, computerSelection)
        let oneGame = playRound(playerSelection,computerSelection)
        if(oneGame==1)
            hisscore++
        else if(oneGame==2)
            myscore++
    }
    console.log(myscore + ":" + hisscore)
}

playGame()


