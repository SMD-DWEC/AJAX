<?php
    if(isset($_POST["num"])) {
        $json = file_get_contents("php://input");
        //Decodificamos los datos dle JSON
        $datos = json_decode($json); 

        echo $datos;
    }