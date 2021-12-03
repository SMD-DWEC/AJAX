'use strict';

window.onload = iniciar;

function iniciar() {
    document.querySelectorAll("button")[0].onclick = cargarFichero;
    document.querySelectorAll("button")[1].onclick = cargarFichero2;
    document.querySelectorAll("button")[2].onclick = cargarFichero3;
    document.querySelectorAll("button")[3].onclick = cargarFichero4;
    document.querySelectorAll("button")[4].onclick = peticionPost;
    document.querySelectorAll("button")[5].onclick = peticionPostJSON;
    document.querySelectorAll("button")[6].onclick = peticionPostJSON2;
}

//Vía fácil
function cargarFichero() {
    fetch("datos1.txt")
    .then(resultado => resultado.text())
    .then(resultado => document.getElementById("span1").textContent = resultado);
}

//Pasar datos por GET
function cargarFichero2() {
    fetch("datos.php?nombre=Sergio&saldo=99999999")
    .then(resultado => resultado.text())
    .then(resultado => document.getElementById("span2").textContent = resultado);
}


//Con mayor control
function cargarFichero3() {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        console.log(xhttp);
        document.getElementById("span3").textContent = this.responseText;
    }
    
    xhttp.open('GET',"datos1.txt",true);
    xhttp.send();
}

//Detallando el control
function cargarFichero4() {
    const xhttp = new XMLHttpRequest();

 
    xhttp.onreadystatechange = function() {
        console.log(this.readyState, this.status);

        if(this.readyState == 4 && this.status == 200)
            document.getElementById("span4").textContent = this.responseText;
    }
    xhttp.open("GET", "datos1.txt", true);
    xhttp.send();
}

//Detallando el control POST
function peticionPost() {

    let formData = new FormData();
    formData.append("param1",42);
    formData.append("param2","Sergio");
 
    let opciones = { //Crear objeto de la manera antigua
        method: 'POST',
        body: formData
    };

    fetch("php/datos_post.php", opciones)
    .then(respuesta => respuesta.text())
    .then(texto => document.getElementById("span5").textContent = texto);
}

function peticionPostJSON() {

    let datos = {
        "param1": 42,
        "param2": "Sergio"
    };
 
    let opciones = { //Crear objeto de la manera antigua
        method: 'POST',
        body: JSON.stringify(datos),
        //le especificamos que vamos a enviar un JSON, para que php lo lea por un sitio distinto
        headers: {'Content-Type': "application/json"} 
    };

    fetch("php/datos_post_json.php", opciones)
    .then(respuesta => respuesta.text())
    .then(texto => document.getElementById("span6").textContent = texto);
}

//Enviando datos al servidor por post al servidor
//php nos responderá aquí con otro JSON en vez de con texto.
function peticionPostJSON2() {

    let datos = {
        "param1": 42,
        "param2": "Sergio"
    };
 
    let opciones = { //Crear objeto de la manera antigua
        method: 'POST',
        body: JSON.stringify(datos),
        //le especificamos que vamos a enviar un JSON, para que php lo lea por un sitio distinto
        headers: {'Content-Type': "application/json"} 
    };

    fetch("php/datos_post_json2.php", opciones)
    //Recibimos un objeto de tipo json
    .then(respuesta => respuesta.json())
    .then(objeto => document.getElementById("span7").textContent = objeto.loquesea);
}