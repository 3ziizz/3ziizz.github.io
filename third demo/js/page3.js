function Sound (id, src) {
    this.id = id;
    this.src = src;
    this.setsource=function(){
document.getElementById(this.id).src = this.src;
// audio.setAttribute('src',this.src);

};
  this.mute=function() {document.getElementById(this.id).muted=!document.getElementById(this.id).muted ;};
this.autoplay=function(){

document.getElementById(this.id).autoplay = true;
document.getElementById(this.id).loop=true ;
document.getElementById(this.id).load();
};
    
}



var sound1 = new Sound("myaudio1","audio/Kalimba.mp3");
sound1.setsource();
sound1.autoplay();


var btn=document.getElementById("mybtn");
btn.addEventListener('click',function(){sound1.mute()});

function char1(){
source="The Game/img/bal.ico";
}

function char2(){
source="basket";
}

function char3(){
source="rabbit";
}




var btn1=document.getElementById("1");
btn1.addEventListener('click',char1);

var btn2=document.getElementById("2");
btn2.addEventListener('click',char2);

var btn3=document.getElementById("3");
btn3.addEventListener('click',char3);



export {source};

