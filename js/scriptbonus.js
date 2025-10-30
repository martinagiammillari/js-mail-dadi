// Snack 1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// 1.creo prompt dove chiedo un numero
// 2.se % 2 === 0 console log di numero
// 3.se % 2 !== = console log di numero +1 

const numero = parseInt(prompt("Inserisci un numero"));
if (numero % 2 === 0) {
    console.log(numero);
}
else if (numero % 2 !== 0) {
    console.log(numero + 1);
}