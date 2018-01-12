function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function drop ()
{
    ball1 = document.createElement("img");
    var src1 = document.createAttribute("src");
    src1.value = "bal.ico";
    ball1.setAttributeNode(src1);
    var pos1 = document.createAttribute("class");
    pos1.value="balls";
    ball1.setAttributeNode(pos1);
    ball1.style.right=randomIntFromInterval(280,1030)+"px";
    console.log(getComputedStyle(ball1).right);
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
            ball_arr[i].style.top=(top_pos[0]-0)+50+"px";

        }else
        {
            document.body.removeChild(ball_arr[i]);
            //clearInterval(interval);
        }
    }
    

}
setTimeout(drop,2000);
setTimeout(drop,3000);
setTimeout(drop,5000);
var interval =setInterval(move,300); 


    
    
    
