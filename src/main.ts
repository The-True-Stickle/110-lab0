import * as readline from 'readline';

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });




class LemonadeStand {
    currentCash: number;
    currentCups: number;
    currentLemons: number;
    currentSugar: number;
    currentLemonadeCups: number;
}

class GameManager {
    currentDay: number;
    currentWeather: number;
    gameOver: boolean;
}

class LemonShop {
    cupsPrice: number;
    lemonsPrice: number;
    sugarPrice: number;
}

function PrintOutNewDay (currentDay: number, currentWeather: number) {
    console.log("This is day " + currentDay + "\n");
    console.log("The weather is " + currentWeather + " degrees \n");
    console.log("Reminder: Making lemonade requires: 1 cup, 2 lemons, and 3 sugar cubes.");
    console.log("Lemonade sells for $3 per cup. \n");
    console.log("Reminder: Customers will not buy cups during a blizzard... (or any other cold weathers)");
    console.log("Customers really do like lemonade during hot weathers though.");



}

function CalculateDayResults (currentDay: number, cupsLeft: number, lemonsLeft: number, sugarLeft: number, weather: number) {

    const lemonadeSold = getRandomInt(1 * (weather * 0.2), 4 + 1 * (weather * 0.2));

    if (lemonadeStand.currentLemonadeCups > lemonadeSold) {
        lemonadeStand.currentCash = lemonadeStand.currentCash + (lemonadeStand.currentLemonadeCups - lemonadeSold) * 3;
    }
    else {
        lemonadeStand.currentCash = lemonadeStand.currentCash + (lemonadeStand.currentLemonadeCups) * 3;
    }

    //lemonadeStand.currentCash = 2;
    PrintOutDayResults(gameManager.currentDay, lemonadeStand.currentCash, lemonadeSold, lemonadeStand.currentCups, lemonadeStand.currentLemons, lemonadeStand.currentSugar);

}

function PrintOutDayResults (currentDay: number, currentCash: number, lemonadeSold: number, cupsLeft: number, lemonsLeft: number, sugarLeft: number) {

    console.log("You finished day " + currentDay + "\n");
    console.log(lemonadeSold + " people wanted to buy a cup of lemonade today at $3 each. \n");
    console.log("Your current cash is " + lemonadeStand.currentCash + " dollars\n");
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
const lemonShop = new LemonShop();

//Set the values for the first day.
gameManager.currentDay = 1;
lemonadeStand.currentCash = 15;
lemonadeStand.currentSugar = 5;
lemonadeStand.currentCups = 3;
lemonadeStand.currentLemons = 4;
lemonadeStand.currentLemonadeCups = 4;


function openMenu() {
    const answer = null;
    rl.question('I will... (G - Go to the shop, S - Start the day)\n ', (answer) => {
        console.log("\n----------\n");
    
        if (answer == 'S') {
            CalculateDayResults(gameManager.currentDay, lemonadeStand.currentCups, lemonadeStand.currentLemons, lemonadeStand.currentSugar, gameManager.currentWeather);
        }
        else if (answer == 'G') {
            GoToShop();
        }

        else {
            console.log("That is not a valid answer!!");
            openMenu();
        }
    
        gameManager.gameOver = true;
        
      });
}

function beginNewDay() {
    console.log("\n----------\n");
    RecalculateShop();
    gameManager.currentWeather = getRandomInt(15, 115);
    PrintOutNewDay(gameManager.currentDay, gameManager.currentWeather);

    openMenu();



}

//Begin the main loop

beginNewDay();

function GoToShop() {
    console.log("Your current cash is " + lemonadeStand.currentCash + " dollars\n");
    console.log("Supplies:");
    console.log(lemonadeStand.currentCups + " cups");
    console.log(lemonadeStand.currentLemons + " lemons");
    console.log(lemonadeStand.currentSugar + " sugar cubes");
    console.log(lemonadeStand.currentLemonadeCups + " cups of lemonade (will expire at end of day!)");


    console.log("---");

    console.log("Shop prices today: ");
    console.log("Two cups: $" + lemonShop.cupsPrice);
    console.log("Six sugars: $" + lemonShop.sugarPrice);
    console.log("One lemon: $" + lemonShop.lemonsPrice);

    console.log("\nReminder: Making lemonade requires: 1 cup, 2 lemons, and 3 sugar cubes.");
    console.log("Lemonade sells for $3 per cup. \n");


    const answer2 = null;




    rl.question('I will... (C - Buy Cups, S - Buy Sugar, L - Buy Lemon, M - Make Lemonade, E - Exit Shop)\n ', (answer2) => {
        console.log("\n----------\n");
    
        if (answer2 == 'S') {

            if (lemonadeStand.currentCash >= lemonShop.sugarPrice) {
                lemonadeStand.currentCash -= lemonShop.sugarPrice;
                lemonadeStand.currentSugar += 6;
                console.log("Buying Sugar Cubes...");

            }
            else {
                console.log("Not enough money!");
            }

            
            GoToShop();
        }
        else if (answer2 == 'L') {

            if (lemonadeStand.currentCash >= lemonShop.lemonsPrice) {
                lemonadeStand.currentCash -= lemonShop.lemonsPrice;
                lemonadeStand.currentLemons += 1;
                console.log("Buying Lemons...");

            }
            else {
                console.log("Not enough money!");
            }

            
            GoToShop();
        }
        else if (answer2 == 'C') {

            if (lemonadeStand.currentCash >= lemonShop.cupsPrice) {
                lemonadeStand.currentCash -= lemonShop.cupsPrice;
                lemonadeStand.currentCups += 2;
                console.log("Buying Cups...");

            }
            else {
                console.log("Not enough money!");
            }

            
            GoToShop();
        }
        else if (answer2 == 'M') {
            if (lemonadeStand.currentCups >= 1 && lemonadeStand.currentLemons >= 2 && lemonadeStand.currentSugar >= 3) {
                lemonadeStand.currentLemonadeCups += 1;
                lemonadeStand.currentCups -= 1;
                lemonadeStand.currentLemons -= 2;
                lemonadeStand.currentSugar -= 3;
            }
            else {
                console.log("Not enough resources!");
            }

            GoToShop();
        }
        else if (answer2 == 'E') {
            openMenu();
        }
        else {
            GoToShop();
        }

})}


function RecalculateShop() {

    lemonadeStand.currentLemonadeCups = 0;
    lemonShop.cupsPrice = getRandomInt(3, 8);
    lemonShop.sugarPrice = getRandomInt(6, 10);
    lemonShop.lemonsPrice = getRandomInt(1, 5);
}
//tsx src/main.ts


