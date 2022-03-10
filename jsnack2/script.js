/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.*/

//PSEUDOCODICE
//1. creo un array vuoto
//2. PER i DA 1 A 6 ESEGUI
//2a.   chiedi numero
//2b.   SE il numero é dispari 
//      ALLORA inseriscilo
//      FINE SE
//RIPETI

const numberArray = [];
 for(let i = 0; i < 6; i++)
{
    const numeroInserito =  parseInt(prompt('Inserisci un numero intero'));
    if(numeroInserito % 2 !== 0)
    {
        numberArray.push(numeroInserito);
    }
}

for(let i = 0; i< numberArray.length;i++)
{
    document.writeln(numberArray[i]);
}

