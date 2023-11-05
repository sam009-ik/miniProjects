
/*document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("myform").addEventListener('submit', function(event) {


        event.preventDefault();
        document.querySelector('.header').style.display = 'block';
    });
});
*/
document.addEventListener('DOMContentLoaded', function () {
    var message = "Welcome user, you are now entering the uncharted territory of pixels and bytes . . .";
    var typedMessage = "";
    var messageElement = document.getElementById('message'); // Get the message element

    document.getElementById('inputField').addEventListener('input', function (event) {
        event.preventDefault;
        var inputLength = event.target.value.length;

        // Make the message element visible when the user starts typing
        if (inputLength > 0 && messageElement.style.display === 'none') {
            messageElement.style.display = 'block'; // Change display to 'block' to show the element
        }

        // If the input length is less than or equal to the message length
        if (inputLength <= message.length) {
            typedMessage = message.substring(0, inputLength);
        } else {
            typedMessage = message; // Keep the full message if the user types more
        }

        // Display the typedMessage in the 'message' element
        messageElement.textContent = typedMessage;
    });
});
