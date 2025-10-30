// Crea un array con delle email di chi può accedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!

// ESECUZIONE LOGICA

// 3.fai prompt dove cheido a utent di inserire una mail 
// 1.crea array con dentro delle mail
// 2.creo ciclo for con tanti cicli quante mail
// 4.if promptMail === mail, stampo messaggio


//--------------------------------------------------------------------------------------
// const promtMail = prompt("Inserisci la tua mail")

// const mails = ["martigiammi@gmail.com", "robertorossi@gmail.com", "amoifiori@gmail.com", "cicciopallino@alice.it"];
// for (let i = 0; i < mails.length; i++) {
//     const currentMail = mails[i];
//     if (promtMail === currentMail) {
//         console.log("Mail inserita correttamente");
//     }
// }
//--------------------------------------------------------------------------------------



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Dati
//numeri da 1 a 6 


// ESECUZIONE LOGICA

// 1.creare utentNumber con numero random da 1 a 6
// 2.creare pcNumber con numero random da 1 a 6
// 3.se utentNumber > pcNumber "Congratulazioni, hai vinto"
// 4.else if utentNumber < pcNumber "Mi dispiace, hai perso"
// 5.else === "parità"

const utentNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(utentNumber, pcNumber)
if (utentNumber > pcNumber) {
    console.log("Congratulazioni, hai vinto")
}
else if (utentNumber < pcNumber) {
    console.log("Mi dispiace, hai perso")
}
else {
    console.log("Parità")
}

