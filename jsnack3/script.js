/*Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.*/ 
console.log('JS OK !');

const numeroInserito = parseInt(prompt('Inserisci numero'));

if(!isNaN(numeroInserito))
{
    //console.log(numeroInserito / 1000);
    for(let i = 0; i < 4; i++)
    {
        let numeroParziale;
        numeroParziale = Math.trunc(numeroInserito / Math.pow(10,i));
        console.log(numeroParziale);
        numeroParziale = numeroInserito - numeroParziale * Math.pow(10,i);

    }
}