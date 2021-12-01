<?php

$dato = array('success' => 0, 'message' => 'Error inesperado!');

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$project = $_POST['project'];
$description = $_POST['description'];

$to = "k-n-o.94@hotmail.com";
$subject = $project;
$message = "Mensaje de ".$nombre." el proyecto es de  ".$description." y este es el email ".$email;

mail($to,$subject,$message);

$dato['success'] = true;

return $dato;




?>