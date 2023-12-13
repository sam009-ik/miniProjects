//Codeacademy Project: Mixed Messages
//The program should output random messages that make sense 

//Create a random number function
const randomNumber = (num) => {
    //Takes in a num and then returns a random number between 0 and num
    return Math.floor(Math.random() * num );
}
const messages = {
    m1: ["This", "Your", "Tomorrow,", "Our"],
    m2: ["loop", "time", "infinity", "death"],
    m3: ["will last", "is over", "has already bled", "comes"]

}
//Create an empty array to a store the coherent message
const mixedMessage = [];

//Loop over the object using: for. . in. . 
for (let message in messages) {
    const randomWordId = randomNumber(messages[message].length - 1)
    switch (message) {
        case 'm1':
            mixedMessage.push(messages[message][randomWordId])
            break;
        case 'm2':
            mixedMessage.push(messages[message][randomWordId]);
            break;
        case 'm3':
            mixedMessage.push(messages[message][randomWordId]);
            break; 
        default:
            mixedMessage.push("FAIL");
    }

}

function formattedMessage (text) {
    text = mixedMessage.join(" ");
    return text;

}
console.log(formattedMessage(mixedMessage));


