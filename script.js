/* 
GIK339 – LABB 1: JavaScript Intro, Variabler och Funktioner

KÄLLOR:
- Föreläsning 1: JavaScript grunder (Mikaela Hedberg)
- GIK339 – Kodexempel Föreläsning 1 (Mikaela Hedberg)
- W3Schools JavaScript Functions: https://www.w3schools.com/js/js_functions.asp
- Bro Code (YouTube): https://www.youtube.com/@BroCodez
*/

/* 
Reflektion uppgift 2:

1) Skillnad mellan var, let och const i block:
- var fungerar även utanför blocket. Den "läcker ut".
- let finns bara inuti blocket och försvinner efteråt.
- const är som let men värdet kan inte ändras.

2) Om console.log placeras före, i eller efter blocket:
- Före blocket: bara variabler som finns innan blocket går att logga.
- Inuti blocket: allt i blocket fungerar att logga.
- Efter blocket: let och const från blocket fungerar inte, men var gör det.

Här ser ni exempel på hur var, let och const beter sig:
- Före blocket: vi kan logga age, name och school eftersom de är deklarerade utanför blocket.
- Inuti blocket: vi får ett nytt värde på age (let), och vi kan använda favoriteSubject och 
  gradeLevel som bara finns i blocket. school fungerar också eftersom var inte är blockbegränsad.
- Efter blocket: age och name fortsätter med sina ursprungliga värden från innan blocket 
  eftersom versionerna i blocket inte läcker ut. gradeLevel fungerar här eftersom var 
  “läcker ut” från blocket.

Detta visar tydligt skillnaden: let och const stannar i blocket, medan var går att nå utanför.
*/
// Deklarationer utanför blocket
let age = 16;                 // kan ändras
const name = "Aisha";         // ändras inte
var school = "Lindängeskolan"; // var - visas även utanför block

// Före blocket
console.log("Före blocket:");
console.log(age, name, school);

{
    // Inuti blocket
    let age = 17;                 // ny "age" bara inuti blocket
    const favoriteSubject = "Math";
    var gradeLevel = 9;           // var: läcker ut ur blocket

    console.log("Inuti blocket:");
    console.log(age, name, school, favoriteSubject, gradeLevel);
}

// Efter blocket
console.log("Efter blocket:");
console.log(age, name, school);
console.log("Grade level utanför blocket (var läcker ut):", gradeLevel);


/* 
Reflektion uppgift 3:

1) == och ===:
== jämför värden och försöker först ändra typen därför blir t.ex. '3' == 3 true.
=== jämför både typ och värde utan att ändra något därför blir '3' === 3 false.
Det är därför resultaten kan skilja sig åt.

2) Uttryck i t.ex. en ternary eller if-sats:
När ett värde står själv, t.ex. undefined eller en variabel testar JavaScript om det är 
"truthy" eller "falsy". Om det är truthy körs den ena delen om det är falsy den andra.
Därför ger undefined i en ternary "falsy".

3) NaN, undefined och null:
- NaN betyder “not a number”, ett värde som inte är en riktig siffra.
- undefined betyder att något inte har fått ett värde ännu.
- null används för att visa att ett värde medvetet är “tomt”.
*/
console.log("Uppgift 3:");

console.log("'3' == 3:", '3' == 3);     // true 
console.log("'3' === 3:", '3' === 3);   // false 


console.log("NaN === NaN:", NaN === NaN);                 // false
console.log("null == undefined:", null == undefined);     // true
console.log("null === undefined:", null === undefined);   // false


let value = undefined;
let check = value ? "truthy" : "falsy";
console.log("undefined är:", check);    // "falsy"



/* 
Reflektion uppgift 4:

1) Olika sätt att skapa funktioner:
En funktionsdeklaration är t.ex. function greet(name) { … }. Den är tydlig och lätt att läsa
och jag valde den varianten. Ett funktionsuttryck är när man sparar en funktion i en variabel
t.ex. const greet = function(name) { … }. En arrowfunktion är en kortare variant
t.ex. const greet = (name) => 'Hej ' + name;. Alla kan göra samma sak, men syntaxen skiljer sig.

2) Varifrån jag kan anropa funktioner:
Funktionsdeklarationer blir "hoistade" vilket betyder att jag kan anropa funktionen både
före och efter själva koden där den är skriven. Funktionsuttryck och arrowfunktioner kan
jag bara anropa efter att variabeln har skapats annars får jag fel.

3) Vad händer om jag ändrar name:
Parametern name i funktionen är skild från en eventuell variabel utanför. När jag skickar in
olika värden som argument ändras bara vad funktionen använder inuti sig själv. Den globala
variabeln (t.ex. personName) behåller sitt värde utanför funktionen men kan skickas in som
argument om jag vill.

4) Skillnad på parameter, variabel och argument:
En parameter är namnet i funktionsdeklarationen (t.ex. name i greet(name)).
Ett argument är det faktiska värdet jag skickar in när jag anropar funktionen (t.ex. "Mikaela").
En variabel är ett namn som lagrar ett värde, t.ex. let personName = "Aisha"; 
Den kan sedan skickas som argument till funktionen.
*/



console.log("Uppgift 4: Funktioner");

// Global variabel
let personName = "Aisha";
console.log("Global variabel personName:", personName);

// Funktion greet som tar en parameter och returnerar "Hej <namn>"
function greet(name) {
    console.log("Inuti funktionen är name:", name);  // parameterns värde
    return "Hej " + name;
}

// Anrop av funktionen  direkt i console.log
console.log(greet("Mikaela"));

// Anrop av funktionen spara returvärdet
let result = greet("Sara");
console.log("Resultat sparat i variabel:", result);

// Anropa funktionen med den globala variabeln personName
console.log(greet(personName));

// Logga global variabel igen
console.log("Global variabel efteråt:", personName);

