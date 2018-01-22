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
character.prototype.createheart=function()
{
    heart1 = document.createElement("img");
    var src1 = document.createAttribute("src");
    src1.value = this.source;
    heart1.setAttributeNode(src1);
    var pos1 = document.createAttribute("class");
    pos1.value="hearts";
    heart1.setAttributeNode(pos1);
    heart1.style.right=randomIntFromInterval(280,1030)+"px";
    document.body.appendChild(heart1);
    this.dropheart();
    
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
    
<<<<<<< HEAD
var ball2=new character("Bal.ico");
/*ball2.createball();
setInterval(function(){ball2.dropball()},300); 
*/

/*
ball2.createball();
for(var i=0;i<100;i++){    

//setTimeout(ball2.dropball,1000);
setInterval(function(){ball2.dropball()},300);
}
*/


function all()
{   
    ball2.createball();
    // g=setInterval(function(){ball2.dropball()},60);  
     //clearInterval(k);
     ball2.dropball();
}
var g;
var k;
//clearInterval(g);
var k=setInterval(all,3000);



//setInterval(all,500);

/*var heart=new character("prize.jpg");
heart.createheart();
setInterval(heart.dropheart,100);
*/
=======
    
var ball2=new character("Bal.ico");
ball2.createball();
setInterval(ball2.dropball,30); 

var heart=new character("prize.jpg");
heart.createheart();
setInterval(heart.dropheart,100);
>>>>>>> Aziz-1
