// activity_1.js
// A simple overallGrade and 5 functions that change it.
// Each function takes one argument and returns the updated overallGrade (0-100).

const { log } = require("console");

function StartGrading() {
  //this is what the student scored
  let examScore = 100;

  //Write your code below here

  // uncomment 1 function at a time and test
  // ReviewScoreLog(examScore);
  // examScore = ApplyBonus(examScore);
  // examScore = ApplyPenalty(examScore);
  // let letterGrade = ApplyLetterGrade(examScore);
  ShowFinalScore(examScore, letterGrade);

  ReviewScoreLog(examScore);
  
  
  //Write your code above here
}

StartGrading();

function ReviewScoreLog(score) {
  //   score (number) - the current numeric score
  // No return value required.

  // Based on the score, should tell they whether they are passing or failing
  //if 50 or above, log "You have a score of ${score}, and you are passing"
  //if below 50, log "You have a score of ${score}, and you are failing"

  //Write your code below here

  if(score >= 50){
    console.log("You have a score of" + score + ", and you are passing");
    
  }

  if(score < 50){
    console.log("You have a score of" + score + ", and you are failing");
    
  }
  //Write your code above here
}

function ApplyBonus(score) {
  // Should apply any bonus points or adjustments to the numeric score and return the new score.
  // Parameters:
  //   score (number) - the current numeric score

  // apply a 5 point bonus (add) if the score is below 70
  //Write your code below here

  let finalScore = score + 5;

  //Write your code above here

  // Returns:
  //   (number) - the updated score
  return finalScore;
}

function ApplyPenalty(score) {
  // Should apply any penalties/deductions to the numeric score and return the new score (0-100).
  // Parameters:
  //   score (number) - the current numeric score

  // apply a 10 point penalty (minus) if the score is above 95
  //Write your code below here

  if(score > 95){
    finalScore = score - 10;
  }
  
  //Write your code above here

  // Returns:
  //   (number) - the updated score
  return finalScore;
}

function ApplyLetterGrade(score) {
  // Should convert the numeric score into a letter grade (e.g., 'A', 'B', 'C', 'D', 'F') and return it.
  // Parameters:
  //   score (number) - the final numeric score

  // if below 50 -> return F
  // if between 50 and 60 -> return D
  // if between 61 and 70 -> return C
  // if between 71 and 85 -> return B
  // if between 86 and 100 -> return A

if(score < 50){
  return "F";
}

if(score >= 50 && score < 61){
  return "D";
}

if(score >= 61 && score < 71){
  return "C";
}

if(score >= 71 && score < 86){
  return "B";
}

if(score >= 86 && score <= 100){
  return "A";
}

  // Returns:
  //   (string) - the letter grade
  return "";
}

function ShowFinalScore(score, letterGrade) {
  // Should display the final numeric score and letter grade to the user (console, DOM, alert, etc.).
  // Parameters:
  //   score (number) - the final numeric score
  //   letterGrade (string) - the corresponding letter grade

  // Based on the score, should tell they whether they are passing or failing
  //if 50 or above, log "You have a score of ${score} and a letter grade of ${letterGrade}, and you are passing"
  //if below 50, log "You have a score of ${score} and a letter grade of ${letterGrade}, and you are failing"

  //Write your code below here

  console.log(finalScore, letterGrade);
  

  //Write your code above here
}
