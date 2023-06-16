
<?php
$to      = 'alewes2000@wp.pl';
$name = $_POST['username'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = 'Nowa wiadomość od ' . $name . '(' . $email . ', ' . $phone . ')';
$message = $_POST['message'];
$message = 'hello';
$headers = 'From: ' . $name . '(' . $email . ', ' . $phone . ')' .
    'Reply-To: ' . $name . '(' . $email . ', ' . $phone . ')' .
    'X-Mailer: PHP/' . phpversion();
$headers .= "Content-Type: text/html; charset=utf-8\r\n";

mail($to, $subject, $message, $headers);
?>
