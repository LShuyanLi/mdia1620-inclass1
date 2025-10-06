const { log } = require('console');

// Import the readline module and create an interface to read input from the console
const readline = require('readline').createInterface({
  input: process.stdin,  // Input will come from standard input (keyboard)
  output: process.stdout // Output will go to standard output (console)
});


// Function to ask the user for their name
function AskStudentName() {
  readline.question(
    'What is your name? (type "exit" to exit): ',
    input => {
       uname = input
      // If the user types "exit", end the program
      if (input.toLowerCase() === 'exit') {
        console.log("Goodbye!");
        readline.close(); // Close the input stream
        return;
      }

      if (!uname) {
        console.log("Wrong name. Try Again!");
        AskStudentName()
      } else {
        console.log("Wellcome " + uname + "!");
        AskCourseName()
        
      }

      // Function to ask the user for the name of a course they want to add

    function AskCourseName(){
  readline.question(
    'Hi ' + uname + ', what is the name of the course you want to add? (type "exit" to exit): ',
    input => {
       cname = input
      // If the user types "exit", end the program
      if (input.toLowerCase() === 'exit') {
        console.log("Goodbye!");
        readline.close(); // Close the input stream
        return;
      }

      if (uname) {
        console.log("Wellcome " + uname + " from " + cname);
        readline.close(); // Close the input stream
        return;
      } else {
        console.log("Try again!");
        AskStudentName()
      }
      // You can add further processing of the input here if needed
    }
  );
}
      

      // You can add further processing of the input here if needed
    }
  );
}

// Start the interaction by asking for the student's name
AskStudentName();
