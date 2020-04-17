<!doctype html>
<html>
<head>
<meta charset="utf-8"/>
<title></title>
<meta name="description" content=""/>
<meta name="Keywords" content=""/>
<link href="css/style.css" type="text/css" rel="stylesheet"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="js/fileinput.js"></script>
	<script>
		$(document).ready(function() {
			fileInput();
		});
	</script>
</head>
<body>
    <form id="smartForm" action="" method=post enctype="multipart/form-data">
        <input name="upl" type="file"/>
        <input class="smartButton" type="submit" value="ОТПРАВИТЬ" name="submit"/>
    </form>
</body>
</html>

<?php 
function show_form() 
{ 
?> 

<? 
} 

function complete_mail() { 
require 'class.phpmailer.php';

$mail = new PHPMailer(); 
        $mail->From = 'mail@test.ru';      // от кого 
        $mail->FromName = 'smartlanding.ru';   // от кого 
        $mail->AddAddress('smart-landing@yandex.ru', 'Имя'); // кому Ваша почта, Имя 
        $mail->IsHTML(true);        // формат письма HTML 
        $mail->Subject = "Тема письма";  // тема письма 

        // если есть файл, то прикрепляем его к письму 
        if(isset($_FILES['upl'])) { 
                 if($_FILES['upl']['error'] == 0){ 
                    $mail->AddAttachment($_FILES['upl']['tmp_name'], $_FILES['upl']['name']); 
                 } 
        } 

        $mail->Body = $mess; 
        // отправляем наше письмо 
        if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo); 
        
} 


if (!empty($_POST['submit'])) complete_mail(); 
else show_form(); 
?> 
<!--
word
accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
-->