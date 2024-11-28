let sum = 0;
for (let i = 1; i <= 100; i += 10) {
    console.log(`Perulangan 10 ke-${Math.ceil(i / 10)}:`);
    for (let j = i; j < i + 10; j++) {
        if ((Math.floor((i - 1) / 10) % 2 === 0 && j % 2 !== 0) || (Math.floor((i - 1) / 10) % 2 !== 0 && j % 2 === 0)) {
            console.log(j);
            sum += j;
        }
    }
    console.log('--------------------------');
    console.log(`Jumlah: ${sum}`);
    sum = 0;
}
