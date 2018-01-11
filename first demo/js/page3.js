
var aud = document.getElementById("myaudio1");
function autoplay(){
aud.autoplay = true;
aud.loop=true
aud.load();
}

autoplay();