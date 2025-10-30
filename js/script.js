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

const promtMail = prompt("Inserisci la tua mail")

const mails = ["martigiammi@gmail.com", "robertorossi@gmail.com", "amoifiori@gmail.com", "cicciopallino@alice.it"];
for (let i = 0; i < mails.length; i++) {
    const currentMail = mails[i];
    if (promtMail === currentMail) {
        console.log("Mail inserita correttamente");
    }
}
