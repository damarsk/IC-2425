let x = 10; // variabel block scope
const y = 20; // variabel constants / kontanta
var z = 30; // variabel non block scope

console.log(x);
console.log(y);
console.log(z);

let pertambahan = x + y;
console.log(pertambahan);

if (x > 10) {
    console.log("Nilai X lebih besar dari 10");
} else {
    console.log("Nilai X lebih kecil dari 10");
}

let nilai1 = 100;
let nilai2 = 50;

function pengurangan() {
    return nilai2 - nilai1;
}
function perkalian() {
    return nilai1 * nilai2;
}
function pembagian() {
    return nilai1 / nilai2;
}

console.log(pengurangan());
console.log(perkalian());
console.log(pembagian());

let array = ["Damar", "XII RPL"];
let hasil = array[0] + " " + array[1];
console.log(array[0]);
console.log(array[1]);
console.log(hasil);

let nilai = 75;

if (nilai >= 80) {
    console.log("Nilai Anda A");
} else if (nilai >= 70) {
    console.log("Nilai Anda B");
} else {
    console.log("Nilai Anda C");
}