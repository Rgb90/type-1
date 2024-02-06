"use strict";
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.
// Kodu buraya yazalım...
const highScore = 2;
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın. 
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.
// Kodu buraya yazalım...
const stuff = ["y"];
const skillLevel = "Advanced"; // union birden fazla tür. bu sayede bu değişkende hepsini bana öneriyor
const rgb = {
    r: 4,
    g: 3,
    b: 9
};
// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki 
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler 
// bulunabilsin.
// Kodu buraya yazalım...
const colors = [{ r: 4, g: 3, b: 9 }, { h: 2, s: 4, l: 5 }];
// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.
// Kodu buraya yazalım...
const greet = (name) => {
    if (typeof name === "string") {
        console.log("Merhaba " + name);
    }
    else {
        for (const n of name) {
            console.log("Merhaba " + n);
        }
    }
};
greet(["Zeynep Sare", "Asım", "Akif Selim", "Meryem", "Afife", "Ayşe"]);
greet("Teyze");
