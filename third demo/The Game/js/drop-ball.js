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
    pos1.value="balls";
    ball.setAttributeNode(pos1);
    ball.style.right=randomIntFromInterval(280,1030)+"px";
    console.log(typeof(ball));
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

var down =new character("img/Bal.ico");
function cteate(){new character("img/Bal.ico")};
setInterval(cteate,2000);
setInterval(down.dropball,200);




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
    

var heart=new character("img/prize.jpg");
heart.createheart();
setInterval(heart.dropheart,100);
