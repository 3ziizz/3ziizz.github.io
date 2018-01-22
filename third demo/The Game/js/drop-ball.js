import {source} from '../../js/page3.js' 


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var character=function(source)
{
    this.source=source;
    ball = document.createElement("img");
    var src1 = document.createAttribute("src");
    src1.value = this.source;
    ball.setAttributeNode(src1);
    var pos1 = document.createAttribute("class");
        if(source=="img/Bal.ico"){
        pos1.value="balls";
        }else{
            pos1.value="hearts";
        }
    ball.setAttributeNode(pos1);
    ball.style.right=randomIntFromInterval(350,1000)+"px";
    //console.log(typeof(ball));
    document.body.appendChild(ball);
   

}
character.prototype.dropball=function()
{   
    var ball_arr=document.getElementsByClassName("balls");
    for (var i=0;i<ball_arr.length;i++)   
    {
            var top_pos=(getComputedStyle(ball_arr[i]).top).split("p");
            if(top_pos[0]<600)
        {
            ball_arr[i].style.top=(top_pos[0]-0)+20+"px";

        }else
        {
            document.body.removeChild(ball_arr[i]);
            
        }
    }
    
}
character.prototype.dropheart=function()
{   
    var heart_arr=document.getElementsByClassName("hearts");
    for (var i=0;i<heart_arr.length;i++)   
    {
            var top_pos=(getComputedStyle(heart_arr[i]).top).split("p");
            if(top_pos[0]<600)
        {
            heart_arr[i].style.top=(top_pos[0]-0)+10+"px";

        }else
        {
            document.body.removeChild(heart_arr[i]);
        }
    }
    
}






var down =new character(source);
function cteate(){new character(source)};
    setInterval(cteate,create_rate);
    xx=setInterval(down.dropball,drop_rate); 
    
    function level()
    {   
        clearInterval(xx);
        setInterval(down.dropball,drop_rate/4);
    }
    setTimeout(level,6000); 
}



var heart=new character("img/prize.jpg");
function cheate(){new character("img/prize.jpg")};
setInterval(cheate,15000);
setInterval(heart.dropheart,300);
