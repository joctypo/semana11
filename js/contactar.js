class contactar{

constructor(namess, textote, numer){

    this.nombre = namess;
    this. parrafo = textote;
    this. num = numer; 
}


accioncontactar = () => {

let container = document.createElement('div'); 
let container2 = document.createElement('div'); 
let contenedormezclador = document.createElement('div'); 


let title = document.createElement('p');
let little = document.createElement('small');

container.appendChild(title);
container.appendChild(little); 

title.innerHTML = this.nombre;
little.innerHTML = this.parrafo;

let respuesta = document.createElement('input');
respuesta.placeholder = "Escribe tu comentario";
respuesta.type = "text";


let botoncomentar = document.createElement('button');
botoncomentar.id = "comentarlo";
botoncomentar.innerHTML= "Crear Comentario"; 

container2.appendChild(respuesta);
container2.appendChild(botoncomentar);

let comentarioscontenedor = document.createElement('div');

contenedormezclador.appendChild (container);
contenedormezclador.appendChild (comentarioscontenedor); 
contenedormezclador.appendChild (container2);


database.ref('publicacion/'+this.num+'/respuestas').on('value',function(data){


data.forEach(
comentario =>{

let comentarios = comentario.val();
let comentariecito = document.createElement('div');
let parrafodecoment = document.createElement ('p');

parrafodecoment.innerHTML = comentarios.comment; 
comentariecito.appendChild(parrafodecoment);
comentarioscontenedor.appendChild(comentariecito);
//return comentarioscontenedor;

}
)
});


botoncomentar.addEventListener('click',() =>{

let respu = respuesta.value;
let referencia = database.ref('publicacion/'+this.num+'/respuestas').push();
let comentario = {

    comment: respu,
    num: referencia.key, 

}

respuesta.value="";

referencia.set(comentario);


});


return contenedormezclador; 

}


}