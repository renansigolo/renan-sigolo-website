<?php
$to = "renan.sigolo@gmail.com";
$subject = "Contato Renan Sigolo";
$headers = "From: renan.sigolo@gmail.com";
$name = $_REQUEST['name'];
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
$txt = "Nome: $name\r\n Email: $email\r\n Mensagem: $message";

mail($to,$subject,$txt,$headers);
//send the message, check for errors
header("Location: https://www.renansigolo.com.br/thanks.html"); /* Redirect browser */
?>
