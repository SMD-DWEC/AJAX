<?php
    //Lee un fichero en php (del canal de entrada de php)
    $json = file_get_contents("php://input");
    //Decodificamos los datos dle JSON
    $datos = json_decode($json);  

    if($datos->param1 == 42) 
        echo $datos->param2. " conoce el buen sentido del universo";
    else
        echo $datos->param2. " NO conoce el buen sentido del universo";
    

?>