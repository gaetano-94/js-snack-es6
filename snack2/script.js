'use strict';

/*
Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

//funzione numeri casuali
function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//array delle squadre
const squadreDiCalcio = [
  {
    nome: 'Napoli',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Milan',
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: 'Inter',
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

//numeri casuali per punti fatti e falli subiti
for (let i = 0; i < squadreDiCalcio.length; i++) {
  squadreDiCalcio[i].puntiFatti = generaNumeroCasuale(1, 100);
  squadreDiCalcio[i].falliSubiti = generaNumeroCasuale(1, 50);
}

//creazione nuovo array solo per nomi e falli subiti
const nuovoArraySquadra = [];
for (let i = 0; i < squadreDiCalcio.length; i++) {
  const { nome, falliSubiti } = squadreDiCalcio[i];
  nuovoArraySquadra.push({ nome, falliSubiti });
}

//stampo tutto in console
console.log('Squadre di calcio originali');
console.log(squadreDiCalcio);
console.log('Squadra falli subiti');
console.log(nuovoArraySquadra);
