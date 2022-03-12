/*Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.*/ 
console.log('JS OK !');

let numeroInserito = parseInt(prompt('Inserisci numero'));
let numeroParziale = 0;
let somma = 0;
if(!isNaN(numeroInserito))
{
    for(let i = 3; i >= 0; i--)
    {
        numeroParziale = Math.trunc(numeroInserito / Math.pow(10,i));   //divido per le potenze di 10 così da prendermi le varie  cifre che compongono il numero
        somma += numeroParziale;
        numeroInserito = numeroInserito - (numeroParziale * Math.pow(10,i));

    }
    console.log('la somma di tutte le cifre che compongono il numero risulta:',somma);
}


/*oppure potrei salvare i vari dati ottenuti per la variabile numeroParziale in un array e successivamente fare la somma 
di tutti gli elementi di quest'array (notare che comunque dovrei utilizzare una variaible che memorizzi la somma)*/
/*
let numeroInserito = parseInt(prompt('Inserisci numero'));
let numeroParziale = 0;
let somma = 0;
const arrayCifre = [];
if(!isNaN(numeroInserito))
{
    for(let i = 3; i >= 0; i--)
    {
        numeroParziale = Math.trunc(numeroInserito / Math.pow(10,i));
        arrayCifre.push(numeroParziale);
        numeroInserito = numeroInserito - (numeroParziale * Math.pow(10,i));

    }
    for(let i = 0; i < arrayCifre.length; i++){
        somma += arrayCifre[i];
    }
    console.log('la somma di tutte le cifre che compongono il numero risulta:',somma);
}
*/
/*
let numeroUtente;
while(isNaN(parseInt(numeroUtente)) || numeroUtente.lenght < 4)
{
    numeroUtente = prompt('Inserisci numero di 4 cifre: ');
}

let sommaCifre = 0;
for(let i = 0; i < numeroUtente.length; i++)
{
    const carattere = numeroUtente[i];
    sommaCifre += parseInt(carattere);
}
console.log(`La somma delle cifre del numero ${numeroUtente} é: ${sommaCifre}`);
*/