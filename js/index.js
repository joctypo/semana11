

const names = document.getElementById('nombre');
const textico = document.getElementById('parrafo');
const publica = document.getElementById('publicar');
const contenedor = document.getElementById('Contactos');


const publicado = () =>{

    let namess = names.value;
    let textote = textico.value; 
    let referencia = database.ref('publicacion').push();

    let publication = {

        nombre: namess,
        parrafo: textote,
        num: referencia.key,
    }

    names.value="";
    textico.value = "";

    referencia.set(publication);

   

} 

database.ref('publicacion').on('value',function(data){
contenedor.innerHTML = ''; 
data.forEach(

respuesta => {

let informacionparrafo = respuesta.val();
let obj = new contactar(informacionparrafo.nombre, informacionparrafo.parrafo, informacionparrafo.num);
contenedor.appendChild(obj.accioncontactar());

}
)
});

publica.addEventListener('click', publicado);