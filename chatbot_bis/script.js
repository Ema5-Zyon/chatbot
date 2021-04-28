
// Gestion de l'animation
document.getElementById('validation').addEventListener("click", function(){
  let containt =  '<form method="post"><div id="container border_cadre"><div id="screen"><div id="messageDisplaySection"><div class="chat botMessages">message du bot</div><div id="messagesContainer"></div></div><div id="userInput"><input type="text" name="userMessages" id="messages" autocomplete="OFF" placeholder="Your Message.." required><input type="submit" id="send" value="OK"></div></div></div></form>';

    document.getElementById('change').innerHTML = containt;  
})

// Gestion du chatbot
const send = document.getElementById("send");
let messageDisplaySection = document.getElementById("messageDisplaySection");


send.addEventListener("click", function(e){

  e.preventDefault();
  ajax();
});
  function ajax(){

      if(window.XMLHttpRequest){
          var xhr = new XMLHttpRequest();
      }else{
          var xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      
      let userMessage = document.getElementById("messages").value;

      let param = "userMessages=" + userMessage;
      
      xhr.open("POST", 'bot2.php', true );

          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

      xhr.send(param);

      xhr.onreadystatechange = function(){

          if( xhr.readyState == 4 && xhr.status == 200 ){

              console.log(xhr.responseText);
              let obj = JSON.parse( xhr.responseText );
              console.log(obj);

              messageDisplaySection.innerHTML = obj.resultat; 
              
          }
      }
      document.getElementById('messages').value = '';

  }
  
  
   
