var getbox=document.getElementById("box");
document.documentElement.addEventListener("keydown",move);
function move(e)
{
if(e.keyCode==39)
{   
    var arr =(getComputedStyle(getbox).right).split("p")
    if(arr[0]<310)
    {
        getbox.style.right=(arr[0])+"px"
    }else
    {
        getbox.style.right=(arr[0]-40)+"px"
    }
  
}else if (e.keyCode==37)
{
    var arr =(getComputedStyle(getbox).right).split("p")
    
    if(arr[0]>815)
    {
        getbox.style.right=(arr[0])+"px"
    }else
    {
        getbox.style.right=(arr[0]-0)+30+"px"
    }
}
}


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