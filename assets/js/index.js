"use strict";
import {Animal} from './animales.js';
import {Sonido} from './sonidos.js';
import {Leon} from './leon.js';

//const Leon = new Animal('Leoncio', 4, 'imagendel leon', 'El rey de la selva', '../sounds/Rugido.mp3');
//console.log(Leon);
//Leon.setComentario('EL REEEEY DE LA SELVA!');
const leon = new Leon('Leoncio', '5', 'ImgDelLeon', 'El rey de la selva', 'urlSonido');
leon.Rugir();
console.log(leon.Rugir());