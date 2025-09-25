

class LemonadeStand {
    currentCash: number;
}

class GameManager {
    currentDay: number;
    currentWeather: number;
    currentLemonadePrice: number;

}

function PrintOutDay (currentDay: number, currentWeather: number, currentLemonadePrice: number) {
    console.log("This is day " + currentDay + "\n");
    console.log("The weather is " + currentWeather + " degrees \n");
    console.log("Lemonade costs " + currentLemonadePrice + " dollars\n");
    

}

//Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(minimumNum: number, maximumNum: number) {
    const minCeiling = Math.ceil(minimumNum);
    const maxFloor = Math.floor(maximumNum);
    return Math.floor(Math.random() * (maxFloor - minCeiling + 1) + minCeiling);
}

console.log("Hello, World! It's lemon time!");
const gameManager = new GameManager();
gameManager.currentDay = 1;
gameManager.currentWeather = getRandomInt(15, 115);
gameManager.currentLemonadePrice = getRandomInt(15, 115);
PrintOutDay(gameManager.currentDay, gameManager.currentWeather, gameManager.currentLemonadePrice);