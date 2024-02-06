// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.


// Kodu buraya yazalım...

const highScore: number | boolean = 2;


// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın. 
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.


// Kodu buraya yazalım...

const stuff: string[] | number[] = ["y"]


// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "SkillLevel" isminde bir literal türü oluşturalım (enum değil, literal tür).
// Bu tür, "Beginner", "Intermediate", "Advanced", ve "Expert" değerlerini alabilsin.


// Kodu buraya yazalım...

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

const skillLevel: SkillLevel = "Advanced"  // union birden fazla tür. bu sayede bu değişkende hepsini bana öneriyor

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "SkiSchoolStudent" isminde bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - name bir string olsun
// - age bir numara olsun
// - sport değeri "ski" veya "snowboard" olsun
// - level ise yukarıda oluşturduğumuz SkillLevel türünden bir değer olsun


// Kodu buraya yazalım...

type SportLevel = "ski" | "snowboard"

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: SportLevel;
    level: SkillLevel;
};

// **********************************************
// ******************* BÖLÜM 5 ******************
// **********************************************
// RGB renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - r bir numara olsun
// - g bir numara olsun
// - b bir numara olsun


// Kodu buraya yazalım...

/* type RGB = {
    r: number;
    g: number;
    b: number;    // böyle de olur, bi yolu daha var
}; */

type RGB = Record<"r" | "g" | "b", number>; // key value gibi

const rgb: RGB = {
    r: 4,
    g: 3,
    b: 9
};

// HSL renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - h bir numara olsun
// - s bir numara olsun
// - l bir numara olsun


// Kodu buraya yazalım...

type HSL = Record<"h" | "s" | "l", number>;

// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki 
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler 
// bulunabilsin.


// Kodu buraya yazalım...

const colors: (HSL | RGB)[] = [{r: 4, g: 3, b: 9}, {h: 2, s: 4, l: 5}]


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

const greet = (name: string | string[]) => {
    if (typeof name === "string") {
        console.log("Merhaba " + name);
    } else {
        for (const n of name) {
            console.log("Merhaba " + n)
        }
    }
};

greet(["Zeynep Sare", "Asım", "Akif Selim", "Meryem", "Afife", "Ayşe"]);

greet("Teyze")