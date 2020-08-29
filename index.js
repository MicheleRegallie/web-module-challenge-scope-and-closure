// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️
//will come back to this...

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 set up the variable as a scope variable and counter2 set it up as a global variable.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 uses a closure because it calls for count++ after executing the current function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter1 would be preferable when you are trying to preserve a scope, and counter2 would be preferable when you are trying to create a singular and specific function.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min,max) {
  let score = Math.floor(Math.random() * (max - min));
  return score;
}

console.log(inning(0,2));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
//Step 1: write a higher order function
//Step 2: use a callback function (that accesses the function inning()) + the number of innings
//Step 3: returns the final score of the game

// function higherOrderFunc (someArray, callback) {
//   for (let i in someArray) {
//     callback(someArray[i]);
//   }
// }

function finalScore(inning, score){

 let home = 0;
let away = 0;
 
  for (let i = 0; i < score; i++) {
    let totalScore = {
      home: inning(0, score),
      away: inning(0, score)
    }
    return totalScore;

  } 
};
 console.log(finalScore(inning,9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(inning, score) {
  let home = 0;
  let away = 0;
  for (let i = 0; i < score; i++){
    home += inning(0, score);
    away += inning(0, score);
    console.log(`Inning ${i}: Home:${home} Away: ${away}`);
  }
  console.log(`Final Score: Home: ${home}, Away: ${away}`);
  
}
console.log(scoreboard(inning, 9));

