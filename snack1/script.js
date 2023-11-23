'use strict';

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

//array delle bici
const biciclettaDaCorsa = [
  {
    nome: 'Bianchi',
    peso: 9,
  },
  {
    nome: 'Trek',
    peso: 7,
  },
  {
    nome: 'Racer',
    peso: 5,
  },
];

let biciLeggera = biciclettaDaCorsa[0];

//trovare la bici con il peso minore
for (let i = 1; i < biciclettaDaCorsa.length; i++) {
  const biciAttuale = biciclettaDaCorsa[i];

  if (biciAttuale.peso < biciLeggera.peso) {
    biciLeggera = biciAttuale;
  }
}

//stampare la bici piu leggera sul DOM
const output = document.getElementById('output');
output.innerHTML = `La bici piu leggera e ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg`;
