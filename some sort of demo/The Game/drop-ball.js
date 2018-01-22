function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

/*function drop (image)
{
    ball1 = document.createElement("img");
    var src1 = document.createAttribute("src");
    src1.value = image;
    ball1.setAttributeNode(src1);
    var pos1 = document.createAttribute("class");
    pos1.value="balls";
    ball1.setAttributeNode(pos1);
    ball1.style.right=randomIntFromInterval(280,1030)+"px";
    document.body.appendChild(ball1);
    move();
    
}
function move()
{   
    var ball_arr=document.getElementsByClassName("balls");
    for (var i=0;i<ball_arr.length;i++)   
    {
            var top_pos=(getComputedStyle(ball_arr[i]).top).split("p");
            if(top_pos[0]<600)
        {
            ball_arr[i].style.top=(top_pos[0]-0)+10+"px";

        }else
        {
            document.body.removeChild(ball_arr[i]);
        }
    }
    

}*/
//setTimeout(drop("live.jpg"),1000);
//setTimeout(drop,2000);
//setTimeout(drop,4000);
//var interval =setInterval(move,30); 

var character=function(source)
{
    this.source=source;

}

character.prototype.createball=function()
{
    ball1 = document.createElement("img");
    var src1 = document.createAttribute("src");
    src1.value = this.source;
    ball1.setAttributeNode(src1);
    var pos1 = document.createAttribute("class");
    pos1.value="balls";
    ball1.setAttributeNode(pos1);
    ball1.style.right=randomIntFromInterval(280,1030)+"px";
    document.body.appendChild(ball1);
    this.dropball();
    
}
character.prototype.dropball=function()
{   
    var ball_arr=document.getElementsByClassName("balls");
    for (var i=0;i<ball_arr.length;i++)   
    {
            var top_pos=(getComputedStyle(ball_arr[i]).top).split("p");
            if(top_pos[0]<600)
        {
            ball_arr[i].style.top=(top_pos[0]-0)+10+"px";

        }else
        {
            document.body.removeChild(ball_arr[i]);
        }
    }
    
}
    
    
var ball2=new character("Bal.ico");
ball2.createball();
setInterval(ball2.dropball,100); 

var heart=new character("live.jpg");
heart.createball();
setInterval(heart.dropball,100);