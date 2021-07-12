"use strict";
import { Animal } from './animales.js';
import { Sonido } from './sonidos.js';
import { Leon } from './leon.js';
import { Lobo } from './lobo.js';
import { Oso } from './oso.js';
import { Serpiente } from './serpiente.js';
import { Aguila } from './aguila.js';




(() => {

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
    
        const nombreElement = document.querySelector('#animal');
        const edadElement = document.querySelector('#edad');
        const comentariosElement = document.querySelector('#comentarios');

/*         console.log(nombreElement.value);
        console.log(edadElement.value);
        console.log(comentariosElement.value); */

        let obj = $("#formulario").serialize();
        console.log(obj);
    
    });
})();


//const Leon = new Animal('Leoncio', 4, 'imagendel leon', 'El rey de la selva', '../sounds/Rugido.mp3');
//console.log(Leon);
//Leon.setComentario('EL REEEEY DE LA SELVA!');



/* const leon = new Leon('Leoncio', '5', 'assets/imgs/Leon.jpg', 'El rey de la selva', 'sounds/Rugir.mp3');
console.log(leon.Rugir());
const lobo = new Lobo('Colmillo Blanco', '5', 'assets/imgs/Lobo.jpg', 'Lobo Salvaje', 'sounds/Aullido.mp3');
console.log(lobo.Aullar());
const oso = new Oso('Baloo', '7', 'assets/imgs/Oso.jpg', 'OOOOso', 'sounds/Gruñido.mp3');
console.log(oso.Grunir());
console.log(oso.getSonido());
oso.setComentario("Oso nuevo comentario");
console.log(oso);
 */




/* (() => {
    $(document).ready(function(){
        $.ajax({ 
            url: "animales.json",
            
            success: function(data){
                console.log(data);
            }
        });
    });
})(); */

