
 var heightJohn = 172;
 var heightMike = 165;
 var ageJohn = 26;
 var ageMike = 29;

 var scoreJohn = heightJohn + 5 * ageJohn;
 var scoreMike = heightMike + 5 * ageMike;
//
// if(scoreJohn > scoreMike){
//   console.log("john wins the game with" + scoreJohn +
//   "points!");
// } else if (scoreMike >scoreJohn) {
//     console.log("Mike wins the game with " + scoreMike + " points!");
// } else if (scoreJohn === scoreMike) {
//   console.log("There is a draw.");
// }

//this is the third person added
var heightMary = 158;
var ageMary = 31;
var scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn >
scoreMary) {
  console.log("John wins the game with" + scoreJohn +
     "points!");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
  console.log("Mike wins the game with " + scoreMike + " points!");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike){
  console.log( "Mary wins the game with" + scoreMary +
 " points!");
}else {
  console.log("it\"  a draw!");
}


//lecture: function

// function calculateAge(yearOfBirth){
//   var age = 2016 - yearOfBirth;
//   return age;
// }
//
// var ageJohn = calculateAge(1978);
// var ageMike = calculateAge(1851);
// var ageMary = calculateAge(1974);
//
//
// function yearsUntilRetirement(name, year) {
//     var age = calculateAge(year);
//     var retirenment = 65 - age;
//     console.log(name  + "retires in" +  retirenment +  "years.");;
// }
//
// yearsUntilRetirement("John", 1978);
