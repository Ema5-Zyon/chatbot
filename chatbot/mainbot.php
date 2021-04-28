<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online chating bot</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="css/bot1.css">
</head>
<body>
<form method="post">
    <div id="container">
        <div></div>
        <div></div>
        <div id="screen">
            <div id="messageDisplaySection">
            <!-- bot messages -->
               <!-- <div class="chat botMessages">Hello ther, how can I help you?</div>-->

            <!-- users messages -->
                <div id="messagesContainer">
                    <div class="chat usersMessages">Hello, je suis là pour te guider :) as-tu besoin d'aide?</div>
                </div>
            </div>
                <div id="userInput">
                    <input type="text" name="userMessages" id="messages" autocomplete="OFF" placeholder="Your Message.." required>
                    <input type="submit" value="OK" id="send" name="send">
                </div> 
        </div>
    </div>
</form>
</body>
</html>
