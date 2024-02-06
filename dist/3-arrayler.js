"use strict";
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.
// Kodu buraya yazalım...
const ages = []; //iki türlü de olur
const yaslar = []; //içerisine number dısında bir şey koyarsan kızar
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.
// Kodu buraya yazalım...
const gameBoard = [[""], ["a"]]; //arrayin içinde array koyacağımızı belirttik. içteki arrayler olmadan string koyarsak kızar
// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.
// Kodu buraya yazalım...
const products = [
    { name: "Elma", price: 10 },
    { name: "Armut", price: 8 },
    { name: "Mandalina", price: 12 },
];
const getTotal = (p) => {
    /* let i = 0;
    let result = 0;
    for (i; i < p.length; i++) {
      //toplamı
      result += p[i].price;
    }
    return result; */ // Bunun dışında bir yol daha var.
    // reduce kullanarak yapacağız. arraydaki sayıyı sırayla alıp üstüne kata kata topluyor.
    //bizim products arrayimiz sadece sayılardan oluşmuyor. O yüzden önce price'a ulaşmak için map kullanacağız
    const prices = products.map((product) => product.price);
    return prices.reduce((prev, curr) => prev + curr); //previus önceki, current şimdiki
};
console.log(getTotal(products));
