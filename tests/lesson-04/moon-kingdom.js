function createCharacters() {
    const characters = [
        { name: 'Mario', level: 2, health: 900 },
        { name: 'Luigi', level: 5, health: 1000 },
        { name: 'Peach', level: 3, health: 1550 },
        { name: 'Yoshi', level: 3, health: 800 },
        { name: 'Phong', level: 3, health: 1500 },
    ];

    const charactersPowerUp = characters.map(character => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3

    }));

    const possibleWinners = characters.filter(character => character.health > 1000)

}

function printLeaderboard (players) {
    players.sort((a, b) => (b.score - a.score ) );
    for (let i = 0; i < players.length; i++) {
        let medal = '';
        if (i === 0) {
            medal = '🥇';
        } else if (i === 1) {
            medal = '🥈';
        } else if (i == 2) {
            medal = '🥉';
        }

        console.log(`${medal} ${i}. ${players[i].name} - ${players[i].score} pts `)
    };
};

const players = [
        { name: 'Mario', score: 1000 },
        { name: 'Luigi', score: 900 },
        { name: 'Peach', score: 850 },
        { name: 'Yoshi', score: 800 },
        { name: 'Phong', score: 500 },
    ];

    printLeaderboard(players);
