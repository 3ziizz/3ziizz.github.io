/*function create_box (image)
{
     getbox=document.getElementById("box");
    getbox.setAttribute("src",image)
    document.documentElement.addEventListener("keydown",move_box);

}*/

/*function move_box(e)
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
<<<<<<< HEAD
}


var aud = document.getElementById("myaudio1");

var btn=document.getElementById("mybtn");
btn.addEventListener('click',mute);

function mute() {
    document.getElementById("myaudio1").muted=!document.getElementById("myaudio1").muted ;
}

function autoplay(){
aud.autoplay = true;
aud.loop=true ;
aud.load();
}

autoplay();

document.addEventListener("keyup",Gostart);
function Gostart(e)
{
if (e.which==27)
{
document.location.href = '../start_page.html' ;
}

}
=======
}*/
var collector=function(source)
{
    this.source=source;

}
collector.prototype.create_collector=function()
{
getbox=document.getElementById("box");
getbox.setAttribute("src",this.source)
document.documentElement.addEventListener("keydown",this.move_collector);
}
collector.prototype.move_collector=function(e)
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






var b1=new collector("box.jpg");
b1.create_collector();
>>>>>>> Aziz-1
