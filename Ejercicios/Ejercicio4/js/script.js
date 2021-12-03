/*
    Realizar un ejercicio, en el que, a través de una web, introduzcamos el número
    correspondiente a un mes, y haciendo una consulta ajax al fichero meses.xml,
    nos de la información de ese mes que aparece en el fichero.
*/

'use strict';

window.onload = peticionPostJSON;

document.getElementById("consultar").onclick = peticionPostJSON;

function peticionPostJSON() {

   let formData = new FormData();
   formData.append("num", document.getElementById("mesNum").value);
 
    let opciones = { //Crear objeto de la manera antigua
        method: 'POST',
        body: formData
        //le especificamos que vamos a enviar un JSON, para que php lo lea por un sitio distinto
        //headers: {'Content-Type': "application/json"} 
    };
 
    document.getElementById("mesNum");

    fetch("php/meses.php", opciones)
    .then(respuesta => respuesta.text())
    .then(texto => document.querySelector("span").innerHTML = `
    ${texto}
    `);
}