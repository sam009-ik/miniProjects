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
    let computerNumber;
    if (currentSum >= 88) {
        // If the total sum is 88 or more, choose the number that makes the total sum 92
        computerNumber = 92 - currentSum;
    } else if ((currentSum + 8) % 8 === 0) {
        // If the total sum can be made a multiple of 8, choose the number that makes the sum 8
        computerNumber = 8 - userTurn[userTurn.length - 1];
    } else {
        // Otherwise, choose the number that makes the total sum a multiple of 8
        computerNumber = (8 - (currentSum % 8)) % 8;
    }
    
    // If the chosen number is outside the 1-7 range, choose 7
    if (computerNumber < 1 || computerNumber > 7) {
        computerNumber = 7;
    }

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