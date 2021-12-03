/*
    Consultar la página de imdb, para consultar los datos de una película.
    Utilizaremos la siguiente url:
    http://www.omdbapi.com/?i=tt3896198&apikey=f02e43b0&t=
    donde título será la película a consultar.
*/

'use strict';

window.onload = peticionPostJSON;

function peticionPostJSON() {

    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=f02e43b0&t=StarWars`;
 

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(texto => document.querySelector("span").innerHTML = `
    Nombre: ${texto.Title}
    <br>
    Año: ${texto.Year}
    <br>
    Valoración: ${texto.Ratings[0].Value}
    <br>
    Poster: 
    <img src=${texto.Poster}>
    
    `);
}