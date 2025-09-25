

class LemonadeStand {
    currentCash: number;
    currentCups: number;
    currentLemons: number;
    currentSugar: number;
}

class GameManager {
    currentDay: number;
    currentWeather: number;
    currentLemonadePrice: number;

}

function PrintOutNewDay (currentDay: number, currentWeather: number, currentLemonadePrice: number) {
    console.log("This is day " + currentDay + "\n");
    console.log("The weather is " + currentWeather + " degrees \n");
    console.log("Lemonade costs " + currentLemonadePrice + " dollars\n");
    

}

function PrintOutDayResults (currentDay: number, currentCash: number, lemonadeSold: number, cupsLeft: number, lemonsLeft: number, sugarLeft: number) {

    console.log("This is day " + currentDay + "\n");
    console.log("You sold " + lemonadeSold + " cups of lemonade today at $3 each. \n");
    console.log("Your current cash is " + currentCash + " dollars\n");
    console.log("Supplies:");
    console.log(cupsLeft + "cups");
    console.log(lemonsLeft + "lemons");
    console.log(sugarLeft + "sugar cubes left");
    

}

//Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(minimumNum: number, maximumNum: number) {
    const minCeiling = Math.ceil(minimumNum);
    const maxFloor = Math.floor(maximumNum);
    return Math.floor(Math.random() * (maxFloor - minCeiling + 1) + minCeiling);
}

console.log("Hello, World! It's lemon time!");


const gameManager = new GameManager();
const lemonadeStand = new LemonadeStand();
gameManager.currentDay = 1;
gameManager.currentWeather = getRandomInt(15, 115);
gameManager.currentLemonadePrice = getRandomInt(15, 115);
PrintOutNewDay(gameManager.currentDay, gameManager.currentWeather, gameManager.currentLemonadePrice);