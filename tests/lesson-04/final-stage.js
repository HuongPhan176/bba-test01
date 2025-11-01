function findPairsDivisibleBy17() {
    // const numbers = [];
    let count = 0;
    // for (let i = 1; i <= 100; i++) {
    //     //Option 1
    //     if (i * 17 > 100) {
    //         break;
    //     }
    //     numbers.push(i * 17);

    //     //Otiopn 2
    //     // if (i % 17 === 0) {
    //     //     numbers.push(i);
    //     // }
    // };
    // for (let i = 0; i < numbers.length; i++) {
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         count += 1;
    //         console.log(`(${numbers[i]}, ${numbers[j]}) is a pair of numbers that is divisible by 17`);
    //     }
    // };
    // console.log(`Total ${count} pairs of numbers divisible by 17`)

    for (let i = 1; i < 100; i++) {
        for (let j = i + 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                console.log(`(${i}, ${j}) is a pair of numbers that is divisible by 17 `);
                count += 1;
            }
        }
    };
    console.log(`Total ${count} pairs of numbers divisible by 17`)
}
findPairsDivisibleBy17();