console.log("Hello, World! It's lemon time!");
PrintOutDay(5, 89, 4);

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