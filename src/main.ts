import * as readline from 'readline';

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });




class LemonadeStand {
    currentCash: number;
    currentCups: number;
    currentLemons: number;
    currentSugar: number;
}

class GameManager {
    currentDay: number;
    currentWeather: number;
    gameOver: boolean;
}

function PrintOutNewDay (currentDay: number, currentWeather: number) {
    console.log("This is day " + currentDay + "\n");
    console.log("The weather is " + currentWeather + " degrees \n");
    console.log("Reminder: Making lemonade requires: 1 cup, 2 lemons, and 3 sugar cubes.");
    console.log("Lemonade sells for $3 per cup. \n");
    console.log("Reminder: Customers will not buy cups during a blizzard... (or any other cold weathers)");
    console.log("Customers really do like lemonade during hot weathers though.");



}



function PrintOutDayResults (currentDay: number, currentCash: number, lemonadeSold: number, cupsLeft: number, lemonsLeft: number, sugarLeft: number) {

    console.log("You finished day " + currentDay + "\n");
    console.log("You sold " + lemonadeSold + " cups of lemonade today at $3 each. \n");
    console.log("Your current cash is " + currentCash + " dollars\n");
    console.log("Supplies:");
    console.log(cupsLeft + " cups");
    console.log(lemonsLeft + " lemons");
    console.log(sugarLeft + " sugar cubes");


    gameManager.currentDay++;
    beginNewDay();
}

 

//Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(minimumNum: number, maximumNum: number) {
    const minCeiling = Math.ceil(minimumNum);
    const maxFloor = Math.floor(maximumNum);
    return Math.floor(Math.random() * (maxFloor - minCeiling + 1) + minCeiling);
}

console.log("Hello, World! It's lemon time!\n");


//Create the classes necessary for the game to function.
const gameManager = new GameManager();
const lemonadeStand = new LemonadeStand();

//Set the values for the first day.
gameManager.currentDay = 1;
lemonadeStand.currentCash = 15;
gameManager.currentWeather = getRandomInt(15, 115);



function beginNewDay() {
    console.log("\n----------\n");

    PrintOutNewDay(gameManager.currentDay, gameManager.currentWeather);
    const answer = null;
rl.question('I will... (G - Go to the shop, S - Start the day, L - Make lemonade, I - Look at my inventory)\n ', (answer) => {
    console.log("\n----------\n");

    if (answer == 'S') {
        PrintOutDayResults(gameManager.currentDay, lemonadeStand.currentCash, 4, 5, 4, 1);

    }
    else if (answer == 'G') {
        console.log("Going to shop");
    }
    else {
        console.log("That is not a valid answer!!");
        beginNewDay();
    }

    gameManager.gameOver = true;
    
  });
}

//Begin the main loop

beginNewDay();


//tsx src/main.ts


