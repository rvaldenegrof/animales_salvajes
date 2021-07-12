import { Animal } from "./animales.js";

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Grunir(){
        return `RAWWWWW`;
    }
}