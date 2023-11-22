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
    peso: 7,
  },
  {
    nome: 'Trek',
    peso: 6,
  },
  {
    nome: 'Racer',
    peso: 3,
  },
];

//trovare la bici con il peso minore
const biciLeggera = biciclettaDaCorsa.reduce((minBici, bici) =>
  bici.peso < minBici.peso ? bici : minBici
);
