//Introducir el tiempo de Badajoz, en una página web. Para ello nos bajaremos el
//fichero XML que nos proporciona la página www.tutiempo.net

'use strict';

window.onload = peticionPostJSON;

function peticionPostJSON() {

    const appId = '52b8161b672d49cc8cddf491cba61fdd';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Badajoz,Spain&lang=es&&units=metric&appid=${appId}`;
 

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(texto => document.querySelector("span").innerHTML = `
    Ciudad: ${texto.name}
    <br>
    Temperatura: ${texto.main.temp}
    <br>
    Descripción del clima: ${texto.weather[0].description}
    <img src=http://openweathermap.org/img/wn/${texto.weather[0].icon}.png>
    
    `);
}