let playerName = "Mario";
let currentLives = 3;
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;
const coinsAverage = (coinsLevel1 + coinsLevel2 + coinsLevel3) / 3;
console.log("The average coins of three level is: " + coinsAverage);
console.log(`The coins remain after dividing by 3 is ${(coinsLevel1 + coinsLevel2 + coinsLevel3) % 3}`);
