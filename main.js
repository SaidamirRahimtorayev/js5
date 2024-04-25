let name11 = prompt("Ismingizni kiriting...").toLocaleLowerCase();
let buk = prompt("Birorta harf kiriting...").toLocaleLowerCase();
let check = name11.includes(buk);

if (check) {
    alert("Siz kiritgan " + buk + "harfi ismingizda bor.")
} else {
    alert("Siz kiritgan " + buk + "harfi ismingizda yo'q.")
}