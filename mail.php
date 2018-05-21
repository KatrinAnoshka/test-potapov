<?php

$frm_name  = "Новая заявка!";
$recepient = "katrinanoshka@gmail.com";
$sitename  = "Nambawan Trawel";
$subject   = "Новая заявка с \"$sitename\"";
$email     = "katrinanoshka@gmail.com";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formname = trim($_POST["formname"]);

$message = "
Form: $formname <br>
Name: $name <br>
Phone: $phone <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
