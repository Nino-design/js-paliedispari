/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

const word = prompt('Dimmi una parola');


function reverseString(string) {
    let reverse = '';

    for(let i = string.length -1; i >= 0; i--){
        reverse += string[i];
    }
    
    return reverse;
}

const reverseWord = reverseString(word);
let check = false;

if(word === reverseWord){
    check = true;
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
}
