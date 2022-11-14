var prompt = require("prompt-sync")(); //
// get input from the user.
// //

var cek = prompt("Masukan angka = ");
var notif;
if (cek % 2 == 1) {
  notif = " Tidak bisa input bilangan ganjil";
} else if (cek <= 0) {
  notif = "Tidak bisa input bilangan Negatif";
} else {
  notif = "Akar dari " + cek + " adalah " + Math.sqrt(cek);
}

console.log(notif);
