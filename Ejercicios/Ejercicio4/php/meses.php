<?php
    if(isset($_POST["num"])) {
        $json = file_get_contents("meses.json");
        //var_dump($json);
        //Decodificamos los datos dle JSON
        $datos = json_decode($json); 

        //print_r($datos);

        foreach ($datos as $key => $value) {
            echo $value;
        }
    }