<?php
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];

$body = "Nombre: " . $nombre .  "<br>Correo: " . $email . "<br>Telefono: " . $telefono . "<br>Mensaje: " . $mensaje;


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPmailer/Exception.php';
require 'PHPmailer/PHPMailer.php';
require 'PHPmailer/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'noreply@pipas.com.ar';                     //SMTP username
    $mail->Password   = 'e4%PfWpQ';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($email, $nombre);
    $mail->addAddress('atencionalcliente@pipas.com.ar', 'atencion');     //Add a recipient

  

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Asunto';
    $mail->Body    = $body;

    if($mail->send()){
        header("Location: mensaje-de-envio.html");
      }
} catch (Exception $e) {
    echo '
    <script>
    alert("Error al enviar")
    </script>
    ';
}