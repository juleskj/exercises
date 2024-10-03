let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

console.log(letters[4]);

let newarr = letters;

newarr[4] = "*";
console.log(letters[4]);

const people = ["Harry", "Ron", "Hermione"];

let result;

//her sletter den det sidste item i listen
// result = people.pop();

//her sætter jeg et ny item ind i arrayet
result = people.push("Draco");
result = people.push("Neville");
result = people.push("Luna");

//her tager beder jeg om itemne fra pladsen 0 til og med 3
// result = people.slice(0, 3);

/*her tilføjer jeg "cho" på pladsen 1 og den skal have en
længde af 0 pladser, så vi den fjerne ikke noget element
hvis vi skriver 1 på 0's palds så ville den udskifte 1's palds
*/
result = people.splice(1, 1, "Cho");

//her ændre vi plads 1 til at være "Ginny"
// people[1] = "Ginny";

// her giver den hvor mange liste items som er i arrayet
console.log(result);
// her retuneret den hele arrayet med "draco" til sidst
console.log(people);
