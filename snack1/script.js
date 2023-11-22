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
const biciLeggera = biciclettaDaCorsa.reduce((minBici, bici) =>
  bici.peso < minBici.peso ? bici : minBici
);

//stampare la bici piu leggera
console.log(
  `la bici piu leggera e ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg`
);
