import { Animal } from "./animales.js";

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar(){
        return `Auuuuuuuu au au au`;
    }
}