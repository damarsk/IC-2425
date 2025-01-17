# Materi Dasar JavaScript untuk Informatika Club

## Pendahuluan
JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web lebih interaktif. JavaScript berjalan di browser dan memiliki kemampuan untuk mengontrol elemen di dalam HTML dan CSS.

### Kenapa Belajar JavaScript?
1. **Digunakan di banyak aplikasi web.**
2. **Mudah dipelajari.**
3. **Langkah awal menjadi pengembang web.**

---

## Bagian 1: Memulai JavaScript

### Menulis Kode JavaScript
Ada tiga cara utama untuk menulis kode JavaScript:
1. **Langsung di dalam tag HTML `<script>`**.
2. **Eksternal menggunakan file `.js`.**

**Contoh Sederhana (Script di HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello JavaScript</title>
</head>
<body>
    <h1>Belajar JavaScript</h1>
    <script>
        alert("Hello, JavaScript!");
    </script>
</body>
</html>
```

**Cara Menjalankan:**
1. Salin kode di atas ke dalam editor teks.
2. Simpan dengan nama `index.html`.
3. Buka file tersebut di browser.

---

## Bagian 2: Variabel dan Tipe Data

### Variabel
Variabel digunakan untuk menyimpan data. Di JavaScript, kita bisa membuat variabel menggunakan `var`, `let`, atau `const`.

**Contoh:**
```javascript
// Contoh penggunaan variabel
let nama = "Aulia"; // variabel bisa diubah
const umur = 17;     // variabel tetap, tidak bisa diubah
var hobi = "Bermain game"; // cara lama

console.log(nama);
console.log(umur);
console.log(hobi);
```

### Tipe Data
1. **String:** Teks (contoh: "Halo").
2. **Number:** Angka (contoh: 123).
3. **Boolean:** True/False.
4. **Array:** Daftar data (contoh: `[1, 2, 3]`).
5. **Object:** Kumpulan pasangan kunci dan nilai (contoh: `{nama: "Aulia", umur: 17}`).

**Contoh:**
```javascript
// Tipe data
let teks = "Belajar JavaScript"; // String
let angka = 2023;               // Number
let benarSalah = true;          // Boolean
let daftar = ["apel", "mangga", "pisang"]; // Array
let orang = { nama: "Aulia", umur: 17 };   // Object

console.log(teks);
console.log(angka);
console.log(benarSalah);
console.log(daftar);
console.log(orang);
```

---

## Bagian 3: Operator

Operator digunakan untuk melakukan operasi matematika, perbandingan, dan logika.

### Operator Matematika
1. `+` Tambah
2. `-` Kurang
3. `*` Kali
4. `/` Bagi
5. `%` Modulus (sisa pembagian)

**Contoh:**
```javascript
let a = 10;
let b = 3;

console.log(a + b); // Tambah
console.log(a - b); // Kurang
console.log(a * b); // Kali
console.log(a / b); // Bagi
console.log(a % b); // Modulus
```

---

## Bagian 4: Kondisional (if/else)
Kondisional digunakan untuk mengambil keputusan berdasarkan kondisi tertentu.

**Contoh:**
```javascript
let nilai = 75;

if (nilai >= 80) {
    console.log("Nilai Anda A");
} else if (nilai >= 70) {
    console.log("Nilai Anda B");
} else {
    console.log("Nilai Anda C");
}
```

---

## Bagian 5: Perulangan (Looping)

### For Loop
Digunakan untuk mengulangi blok kode sebanyak yang ditentukan.
**Contoh:**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Angka ke-" + i);
}
```

### While Loop
Digunakan untuk mengulangi blok kode selama kondisinya `true`.
**Contoh:**
```javascript
let i = 1;
while (i <= 5) {
    console.log("Nomor ke-" + i);
    i++;
}
```

---

## Bagian 6: Fungsi
Fungsi adalah blok kode yang bisa digunakan kembali.

**Contoh Fungsi:**
```javascript
function sapa(nama) {
    console.log("Halo, " + nama);
}

sapa("Aulia");
sapa("Andi");
```

---

## Latihan
Cobalah untuk membuat program sederhana:
1. **Program Kalkulator Sederhana:**
```javascript
function kalkulator(a, b, operator) {
    if (operator === "+") {
        return a + b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    } else {
        return "Operator tidak valid";
    }
}

console.log(kalkulator(5, 3, "+"));
console.log(kalkulator(10, 4, "-"));
```

2. **Program Mengecek Angka Ganjil atau Genap:**
```javascript
function cekGanjilGenap(angka) {
    if (angka % 2 === 0) {
        console.log(angka + " adalah angka genap.");
    } else {
        console.log(angka + " adalah angka ganjil.");
    }
}

cekGanjilGenap(7);
cekGanjilGenap(10);
```