<?php 

$whatForm = '';
if(isset($_POST['whatForm'])){
    $whatForm = $_POST['whatForm'];
}



$name = '';
if(isset($_POST['name'])){
    $name = $_POST['name'];
}



$phone = '';
if(isset($_POST['phone'])){
    $phone = $_POST['phone'];
}



$email = '';
if(isset($_POST['email'])){
    $email = $_POST['email'];
}



$messege = '';
if(isset($_POST['messege'])){
    $messege = $_POST['messege'];
}



$hidden = '';
if(isset($_POST['hidden'])){
    $hidden = $_POST['hidden'];
}



$who = $whatForm;

$sendinfo = ($who) ? $who : '';
$sendinfo .= ($name) ? '%0A'.'<b>Имя:</b> '.$name.'%0A' : '';
$sendinfo .= ($phone) ? '%0A'. '<b>Телефон:</b> '.$phone.'%0A' : '';
$sendinfo .= ($email) ? '%0A'. '<b>Email:</b> '.$email.'%0A' : '';
$sendinfo .= ($messege) ? '%0A'. '<b>Сообщение:</b> '.$messege.'%0A' : '';
$sendinfo .= ($hidden) ? '%0A'. '<b>Резюме:</b> '.$hidden.'%0A' : '';

$token = '648564344:AAFs11kktsotjIQnS_-wiRB9cZyrWqYiKBc';
$chat_id = '-248116296';

$txt = $sendinfo;
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");





require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';



//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'tetyan45@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '8UD5jVLe45CXX'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('tetyan45@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('tetyan45@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment($_FILES['upload']['tmp_name'], $_FILES['upload']['name']);    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $whatForm;
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. ' Почта этого пользователя: ' .$email. ' Сообщение пользователя: ' .$messege;
$mail->AltBody = '';

$mail->send();
?>


