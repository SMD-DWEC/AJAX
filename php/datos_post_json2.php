<?php
    header("ContentType: application/json");

    $obj = new stdClass();
    $obj->loquesea = 'viva mi abuela';
    $json = json_encode($obj);
    echo $json;