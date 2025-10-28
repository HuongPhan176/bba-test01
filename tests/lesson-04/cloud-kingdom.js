let powerUp = 'mushroom';
let effect = '';

//Option 1
if (powerUp === 'mushroom') {
    effect = 'Mario becomes Supper!'
} else if (powerUp === 'flower') {
    effect = 'Mario can shoot fireballs!'
} else if (powerUp === 'start') {
    effect = 'Mario is invincible!'
} else if (powerUp === 'none') {
    effect = 'Mario is normal!'
} else {
    effect = 'Unknown power-up'
}

console.log(effect);

//Option 2
effect = powerUp === 'mushroom' ? 'Mario becomes Supper!' :
    powerUp === 'flower' ? 'Mario can shoot fireballs!' :
        powerUp === 'start' ? 'Mario is invincible!' :
            powerUp === 'none' ? 'Mario is normal!' : 'Unknown power-up'

console.log(effect);