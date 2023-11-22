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

//trovare la bici con il peso minore
const { nome, peso } = biciclettaDaCorsa.reduce(
  (min, bici) => (bici.peso < min.peso ? bici : min),
  biciclettaDaCorsa[0]
);

//stampare la bici piu leggera sul DOM
const output = document.getElementById('output');
output.innerHTML = `La bici piu leggera e ${nome} con un peso di ${peso} kg`;
