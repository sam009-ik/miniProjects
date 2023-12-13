let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    let randomNumber = Math.floor( Math.random() * 10 );
    console.log(randomNumber);
    return randomNumber;
}
console.log(generateTarget());

function compareGuesses (userGuess, computerGuess, secretGuess) {
    if (userGuess < 0 || userGuess > 9) {
        return false; //Check for error
    }
    let diffBwUser = Math.abs(userGuess - secretGuess);
    let diffBwComputer = Math.abs(computerGuess - secretGuess); 

    if (diffBwUser > diffBwComputer) {
        console.log('Computer wins');
        return false; //Since computer wins
    } else if (diffBwUser < diffBwComputer) {
        console.log('User wins');
        return true; //Since Human wins since they were closer to the target
    } else {
        return true; //Since human wins according to instructions
    }
}

function updateScore (winner) {
    if (winner === 'human'.toLowerCase()) {
        console.log('The human wins');
        humanScore += 1;
    } else if (winner === 'computer'.toLowerCase()) {
        console.log('Computer wins');
        computerScore += 1;
    }

}

const advanceRound = () => {
    return currentRoundNumber+=1;
    
}
const targetNumber = generateTarget();

compareGuesses(3, 5, targetNumber);
