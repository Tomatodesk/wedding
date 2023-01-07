<?php
// Check for empty fields
$name = strip_tags(htmlspecialchars($_POST['name']));
$number = strip_tags(htmlspecialchars($_POST['number']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'davhuebn@gmail.com,stefanie_sigel@web.de'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Antwort zur Hochzeit (über david-huebner.com) von $name";
$email_body = "Nachricht:\n$message\n\nAnzahl der Gaeste\n$number";
$headers = "From: noreply@david-huebner.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.  
mail($to,$email_subject,$email_body,$headers);
return true;         
?>