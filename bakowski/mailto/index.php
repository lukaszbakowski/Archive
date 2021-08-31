<?php
/*
if(isset($_POST["submit"])) {
    echo "test";
    
    
    
// The message
$message = $_POST['message'];

// In case any of our lines are larger than 70 characters, we should use wordwrap()
$message = wordwrap($message, 70, "\r\n");

// Send
mail('lukasz.bakowski@amu.edu.pl', 'My Subject', $message);
    
    
    
    
    
  
    
    $to      = 'nobody@example.com';
$subject = 'the subject';
$message = 'hello';
$headers = array(
    'From' => 'webmaster@example.com',
    'Reply-To' => 'webmaster@example.com',
    'X-Mailer' => 'PHP/' . phpversion()
);

mail($to, $subject, $message, $headers); 
} else {
    header("location: ../");
}
 * 
 */
header("location: ../");