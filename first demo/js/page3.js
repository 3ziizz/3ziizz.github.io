
var aud = document.getElementById("myaudio1");

var btn=document.getElementById("mybtn");
btn.addEventListener('click',mute);

function mute() {
    document.getElementById("myaudio1").muted=!document.getElementById("myaudio1").muted ;
}1

function autoplay(){
aud.autoplay = true;
aud.loop=true ;
aud.load();
}

autoplay();