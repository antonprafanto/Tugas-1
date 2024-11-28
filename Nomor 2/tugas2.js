var nim = 89; // Ganti dengan 2 angka terakhir dari NIM Anda
var start = nim; // Nilai awal perulangan
var end = 200;
if (start % 2 !== 0) { // Ganjil, gunakan while loop
    while (start <= end) {
        console.log(start);
        start++;
    }
}
else { // Genap, gunakan do..while loop
    do {
        console.log(start);
        start++;
    } while (start <= end);
}
