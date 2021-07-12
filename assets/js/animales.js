export class Animal {
    #nombre;
    #edad;
    #img;
    #comentarios;
    #sonido;
    constructor(nombre, edad, img, comentarios, sonido){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#img = img;
        this.#comentarios = comentarios;
        this.#sonido = sonido;
    }

    getNombre(){
        return this.#nombre;
    }

    getEdad(){
        return this.#edad;
    }

    getImg(){
        return this.#img;
    }

    setComentario(nuevoComentario){
        this.#comentarios = nuevoComentario;
    }

    getSonido(){
        return this.#sonido;
    }
}


/* export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir(){
        return `RUGEEEEEE`;
    }
}

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar(){
        return `Auuuuuuuu au au au`;
    }
}

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Grunir(){
        return `RAWWWWW`;
    }
}

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear(){
        return `PSSSSSSPSSSS`;
    }
}

export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar(){
        return `IG IG`;
    }
}

 */