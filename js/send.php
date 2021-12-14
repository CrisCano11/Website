<?php

/*$dato = array('success' => 0, 'message' => 'Error inesperado!');

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$project = $_POST['project'];
$description = $_POST['description'];

$to = "k-n-o.94@hotmail.com";
$subject = $project;
$message = "Mensaje de ".$nombre." el proyecto es de  ".$description." y este es el email ".$email;

mail($to,$subject,$message);

$dato['success'] = true;

return $dato;*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require("PHPMailer.php");
require("SMTP.php");

$destinatario = "andyvivas27@gmail.com";
$smtpUser = "soporte@idm.cristhian-cano.com";
$smtpClave = "Thomas11*";
$smtpHost = "smtp.hostinger.com";

$mail = new PHPMailer();

$mail->SMTPDebug = SMTP::DEBUG_SERVER;  
$mail->isSMTP();
$mail->Host = $smtpHost;
$mail->SMTPAuth = true;
$mail->Username = $smtpUser;
$mail->Password = $smtpClave;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
$mail->Port = 465;
$mail->setFrom('soporte@idm.cristhian-cano.com', 'Prueba Correo');
$mail->addAddress($destinatario);
$mail->addAttachment("../downloads/cv.pdf");

$mail->isHTML(true);
$mail->Subject = "Prueba con Adjunto";
$mail->Body = "Body del correo enviado desde PHP con adjunto";
//$mail->CharSet = "utf-8";


echo $mail->send();


?>