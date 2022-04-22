/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/


const userChoice = prompt('Scegli pari o dispari');
const number = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(number);


function pcNumber(value){
     value = Math.floor(Math.random() * 5) +1;

     return value;
}


  const pcRandom = pcNumber();

  console.log(pcRandom);

  const sum = number + pcRandom;

  console.log(sum);


  function evenOrOdd(numSum){
      let evenOrOdd = 'dispari';
      if(numSum % 2 === 0){
          evenOrOdd = 'pari';
          console.log('Numero è pari');
      }else{
          console.log('Numero è dispari');
      }

      return evenOrOdd;
  }

  const result = evenOrOdd(sum);

  console.log(result);


 if(result === userChoice){
     console.log('Hai vinto');
 }else{
     console.log('Hai perso');
 }