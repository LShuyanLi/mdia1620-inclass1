
// Import the readline module and create an interface for reading input/output from the console
const readline = require('readline').createInterface({
  input: process.stdin,   // Take input from the standard input (keyboard)
  output: process.stdout  // Output text to the console
});

// Counter to track how many times the question has been asked
let ind = 1;

/**
 * Function that repeatedly asks the user for input
 */
function AskName() {
  readline.question('Hello! Do you want to hear story? (type "exit" to quit): ', input => {
    
    // If user types "exit", end the program
    if (input.toLowerCase() === 'exit') {
      console.log("Thanks, hope you like the storiy, BYE!");
      readline.close(); // Close the input stream
      return;
    }

    // Respond differently based on the number of times the question has been asked
    if (ind === 1) {
      console.log("In the forest, there is a girl who live with her grandmother...", input);
    } else if (ind === 2) {
      console.log("But there is also a horrible wolf named Jack live in the same forest...", input);
    } else if (ind === 3) {
      console.log("The girl named red hat, she is strong enough to protect her grandmother and herself...", input);
    } else if (ind === 4) {
      console.log("So, Jack is too hunger that ask the girl for help, she gives Jack some fruits and vagetebales..", input);
    } else if (ind === 5) {
      console.log("Jack finds that so delicious there is. Finally, Jack amd Red Hat bacome the best friends in this forest.(end, type 'exit' to quit)");
      
    }

    // Increment the counter for the next round
    ind = ind + 1;

    // Recursively call the function to keep the loop going
    AskName();
  });
}

// Start the input loop
AskName();

