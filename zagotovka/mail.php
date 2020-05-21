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
$sendinfo .= ($hidden) ? '%0A'. '<b>Тариф:</b> '.$hidden.'%0A' : '';


$token = '648564344:AAFs11kktsotjIQnS_-wiRB9cZyrWqYiKBc';
$chat_id = '-248116296';



$txt = $sendinfo;
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");





$sendinfo2 = ($who) ? $who : '';
$sendinfo2 .= ($name) ? '<br>'.'<b>Имя:</b> '.$name : '';
$sendinfo2 .= ($phone) ? '<br>'.'<b>Телефон:</b> '.$phone : '';
$sendinfo2 .= ($email) ? '<br>'.'<b>E-mail:</b> '.$email : '';
$sendinfo2 .= ($messege) ? '<br>'.'<b>Сообщение:</b> '.$messege : '';
$sendinfo2 .= ($hidden) ? '<br>'.'<b>Тариф:</b> '.$hidden : '';



$to = "tetyan45@yandex.ru";
$subject = 'заявка с сайта';
$massage = $sendinfo2;
$headers = "Content-type: text/html; charset=utf-8\r\n";

mail($to, $subject, $massage, $headers);
// заявка на обратную связь END



?>

