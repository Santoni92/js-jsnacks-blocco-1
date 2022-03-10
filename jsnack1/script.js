/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome 
e comunicagli se può partecipare o no alla festa.*/



//PSEUDOCODICE
//1.    inizializzo l'array dei nomi degli invitati
//2.    inizializzo a false una variabile booleana d'appoggio
//3.    chiedo all'utente il suo nome
//4.    SE il nome utente è una stringa
//      ALLORA
//4a.           PER i DA 0 A (lunghezza array - 1) ESEGUI
//                  inizializzo la variabile validName con  l'elemento dell'array in posizione i-esima
//4b.               SE nome utente é uguale ad validName
//                  ALLORA assegno true alla variabile booleana
//                  FINE SE
//              RIPETI
//      FINE SE
//5.    SE variabile booleana uguale a true
//      ALLORA scrivi 'puoi partecipare'
//      ALTRIMENTI scrivi 'non puoi partecipare'

console.log('JS OK');   //controllo che lo script js sia collegato all'html
const elencoInvitati = ["silvio","paolo","luca","stefano","marcello"];  //inizializzo l'array dei nomi degli invitati

let checkDelNome = false;   //variabile d'appoggio  booleana che mi servirà per valutare quale dei due messsaggi stampare
const nomeUtente = prompt('Inserisci il tuo nome');

if(nomeUtente)
{
    for(let i= 0; i < elencoInvitati.length; i++){
        const validName = elencoInvitati[i];
        if(nomeUtente.trim().toLowerCase() === validName){
            checkDelNome = true;
        }
    }
}


if(checkDelNome)
{
    prompt('Puoi partecipare alla festa!!!');
}else{
    prompt("Il tuo nome non é nell'elenco degli invitati, mi dispiace ma non puoi partecipare alla festa!!!");
}

