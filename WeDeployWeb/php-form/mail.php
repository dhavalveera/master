<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$call = $_POST['call'];
$priority = $_POST['priority'];
$type = $_POST['type'];
$message = $_POST['message'];
$formcontent=" From: $name \n Email: $email \n Phone: $phone \n Call Back: $call \n Priority: $priority \n Type: $type \n Message: $message";
$recipient = "dhavalveera@gmail.com";
$subject = "WeDeployWeb";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
