/*Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.*/ 
console.log('JS OK !');

let numeroInserito = parseInt(prompt('Inserisci numero'));
let numeroParziale = 0;
let somma = 0;
if(!isNaN(numeroInserito))
{
    for(let i = 3; i >= 0; i--)
    {
        numeroParziale = Math.trunc(numeroInserito / Math.pow(10,i));
        somma += numeroParziale;
        numeroInserito = numeroInserito - (numeroParziale * Math.pow(10,i));

    }
    console.log('la somma di tutte le cifre che compongono il numero risulta:',somma);
}
/*oppure potrei salvare i vari dati ottenuti per la variabile numeroParziale in un array e successivamente fare la somma 
di tutti gli elementi di quest'array*/