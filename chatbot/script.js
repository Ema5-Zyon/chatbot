document.addEventListener("DOMContentLoaded", function(e){

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
                
                xhr.open("POST", 'bot.php', true );
    
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
            
       

})
