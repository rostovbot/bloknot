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

$phone = '';
if(isset($_POST['phone'])){
    $phone = $_POST['phone'];
}

$email = '';
if(isset($_POST['email'])){
    $email = $_POST['email'];
}



$who = $whatForm;

$sendinfo = ($who) ? $who : '';
$sendinfo .= ($name) ? '%0A'.'<b>Имя:</b> '.$name.'%0A' : '';
$sendinfo .= ($phone) ? '<b>Телефон:</b> '.$phone.'%0A' : '';
$sendinfo .= ($email) ? '<b>Email:</b> '.$email.'%0A' : '';









$token = '1083562111:AAGPdoV6aw8Nqwnt-bZbQeFCyDVZEitItMU';
$chat_id = '-469181448';


$txt = $sendinfo;
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");







$sendinfo2 = ($who) ? $who : '';
$sendinfo2 .= ($name) ? '<br>'.'<b>Имя: </b> '.$name : '';
$sendinfo2 .= ($phone) ? '<br>'.'<b>Телефон: </b> '.$phone : '';
$sendinfo2 .= ($email) ? '<br>'.'<b>Email: </b> '.$email : '';


$to = "dm@bearlogics.ru, pavel.ch@bearlogics.ru";
$subject = 'Фидбэк с подвала главной  ';
$massage = $sendinfo2;
$headers = "Content-type: text/html; charset=utf-8\r\n";

mail($to, $subject, $massage, $headers);


?>