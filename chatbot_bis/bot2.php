<?php 
$pdo = new PDO('mysql:host=localhost;dbname=chatbot', 'root', '');

extract($_POST);


$reponse['resultat'] = '';

    $r = $pdo->query("SELECT response FROM chatbot WHERE messages LIKE '%$userMessages%'");

if($r->rowCount() > 0 ){
    $bot = $r->fetch(PDO::FETCH_ASSOC);
     
        $reponse['resultat'] .= '<div id="messagesContainer">
        <div class="chat usersMessages">'.$userMessages.'</div></div>';
        $reponse['resultat'] .= '<div class="messagesContainer"><div class="chat botMessages">'.$bot['response'].'</div></div>';
     
        
        
        

}else{
     
    $reponse['resultat'] .= '<div id="messagesContainer">
    <div class="chat usersMessages">'.$userMessages.'</div></div>';
    $reponse['resultat'] .= '<div class="messagesContainer"><div class="chat botMessages">Désolé, je n\'ai pas compris :/ veux-tu être redirigé vers une page?</div></div>';
}


echo json_encode($reponse);
