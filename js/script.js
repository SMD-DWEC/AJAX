'use strict';

window.onload = iniciar;

function iniciar() {
    document.querySelectorAll("button")[0].onclick = cargarFichero;
    document.querySelectorAll("button")[1].onclick = cargarFichero2;
    document.querySelectorAll("button")[2].onclick = cargarFichero3;
    document.querySelectorAll("button")[3].onclick = cargarFichero4;
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