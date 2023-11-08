let currentSum = 0;
let inGame = false;
let sumEl = document.getElementById("sum-el");
let userLogs = document.getElementById("user-logs"); 
let userTurn = [];
let computerLogs = document.getElementById("computer-logs")
let computerTurn = [];

function startGame() {
    console.log("game starting");
    currentSum = 0;
    inGame = true; // Game is now in progress
    userTurn = []; // Reset user's turn
    computerTurn = []; // Reset computer's turn
    userLogs.textContent = 'User logs:';      // Reset user's log
    computerLogs.textContent = 'Computer logs:'; // Reset computer's log 
}

function handleButton(number) {
    if (inGame === false) {
        console.log("game has not started");
        return;
    }

    userTurn.push(number)
    currentSum += number;
    sumEl.textContent = `SUM: ${currentSum}`;     // Update sum
    let userNumberDiv = document.createElement("div"); // creates a new div element in memory
    userNumberDiv.textContent = number; // sets the text content of the div to the number
    userLogs.appendChild(userNumberDiv); // adds the div to the userLogs element


    if (currentSum >= 100) {
        inGame = false;
        alert('User wins!');
        return;
    }

    setTimeout(compTurn, 1500); // Computer's turn after 1.5 seconds
}

function compTurn() {
    let computerNumber = 8 - userTurn[userTurn.length - 1]; // Computer's number by responding to user's number
    computerTurn.push(computerNumber);    // Add computer's number to the log
    currentSum += computerNumber; 
    sumEl.textContent = `SUM: ${currentSum}`; // Update sum in the DOM
    let computerNumberDiv = document.createElement("div"); // Create a new <div> element
    computerNumberDiv.textContent = computerNumber; // Set the text content of the <div> to the computer number
    computerLogs.appendChild(computerNumberDiv); // Append the <div> to the computerLogs element

    if (currentSum >= 100) {
        inGame = false;
        alert('Computer wins!');
    }
}