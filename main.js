var SpeechRecognition = window.webkitSpeechRecognition;//crea una variable que se llame SpeechRecognition que sea igual con window.webkitSpeechRecognition; este comando se usa para reconocer lo que decimos y convertirlo a texto, almacenamos el comando en la variable

var recognition = new SpeechRecognition(); //crea una variable que se llame recognition que sea igual con new SpeechRecognition(); new es la palabra clave para crear Web Speech API 

var textbox = document.getElementById("textbox"); //crea una variable que se llame Textbox que sea ingual con document.getElementById("textbox")
 
 function start() //crea una funcion que se llame start
{//inicio de la funcion 
textbox.innerHTML = " "; //usa la variable Textbox y el comnado innerHTML para vaciar el contenido de la variable
 recognition.start(); // usa la variable recognition y llama la funcion start dentro de la variable para convertir la voz en texto
 }// fin de la funcion

 
recognition.onresult = function(event) { //La función onresult contiene todos los valores de la voz convertida en texto.
 //usa la variable recognition y usa la funcion onresult junto con la variable, almacenamos en esta variable la function(event)

 console.log(event); 
   var Content = event.results[0][0].transcript;//event.results tiene el output de nuestra voz a texto, y vamos a almacenar esto en una variable.
       textbox.innerHTML = Content;
       console.log(Content);
         if ( Content == "Toma mi selfie" ) //usa la condicional If y compara si Content es igual con "toma mi selfie"
         {
           console.log("tomando selfie..."); //imprime en la consola la frase tomando selfie
            speak(); // llamamos a la función speak que crearemos en la próxoma clase 
         }
   }
   
   function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Tomando tu selfie";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout (function()
      {
      take_selfie();
      save();

    },5000);
   }
   camera = document.getElementById("camera");
   Webcam.set({
    width: 360, height: 250, image_format: 'jpeg', jpeg_quality: 90
   });

function take_selfie() {
  Webcam.snap(function(data_uri)
  {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src= "'+ data_uri+'"/> ';
  }
  );
}

function save(){
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src;
  link.href = image;
  link.click();

}