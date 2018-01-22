score=0;
var input1= document.body;
var get_Hscore=document.getElementById("score");
//input1.addEventListener("click",countscore)
var updatescore=document.getElementById("currscore")
var lev=0;
var updatelevel=document.getElementById("level")
if(localStorage.getItem("highest-score")!=null)
{
    get_Hscore.textContent="Highest Score :"+localStorage.getItem("highest-score");
}else
{
    localStorage.setItem("highest-score",score);
}
function countscore(e){
    score+=1;
    updatescore.textContent="Score:"+score;
    
    if(score>localStorage.getItem("highest-score"))
    {
        localStorage.setItem("highest-score",score);
        get_Hscore.textContent="Highest Score :"+localStorage.getItem("highest-score");
    }
    

    if (score == 10 || score == 20 ||score == 30 || score == 40 || score == 50 ){
        lev+=1;
        updatelevel.textContent="Level:"+lev;
    }  
}
//input2.addEventListener("keydown",removeheart_fun)
var removeheart=[3];
var count_lives=0;
removeheart[0]=document.getElementById("first-heart")
removeheart[1]=document.getElementById("second-heart")
removeheart[2]=document.getElementById("third-heart")
function removeheart_fun(e){
    removeheart[count_lives].src="../The Game/img/dieheart.png";
    count_lives+=1;
    if(count_lives>=3){
        count_lives=0;
        alert('Game Over');
        score=0;
    }
}
function collision_ball()
{
    var dropped_ball=document.getElementsByClassName("balls");
    var collector=document.getElementById("box");
    for (var i=0;i<dropped_ball.length;i++)
    {

        
        if( (dropped_ball[i].getBoundingClientRect().top >= collector.getBoundingClientRect().top )
      && (dropped_ball[i].getBoundingClientRect().right<collector.getBoundingClientRect().right)&&((dropped_ball[i].getBoundingClientRect().left>collector.getBoundingClientRect().left))) 
        {
                document.body.removeChild(dropped_ball[i]);
                countscore();
			    bagdes();
			   
            }
     if( (dropped_ball[i].getBoundingClientRect().top > collector.getBoundingClientRect().top )
      && ((dropped_ball[i].getBoundingClientRect().right>collector.getBoundingClientRect().right)||((dropped_ball[i].getBoundingClientRect().left<collector.getBoundingClientRect().left)))) 
        {
                document.body.removeChild(dropped_ball[i]);
                removeheart_fun();
            }

    }
}
function collision_heart()
{
    var dropped_heart=document.getElementsByClassName("hearts");
    var collector=document.getElementById("box");
    for (var i=0;i<dropped_heart.length;i++)
    {      
        if( (dropped_heart[i].getBoundingClientRect().top >= collector.getBoundingClientRect().top )
      && (dropped_heart[i].getBoundingClientRect().right<collector.getBoundingClientRect().right)&&((dropped_heart[i].getBoundingClientRect().left>collector.getBoundingClientRect().left))) 
        {
                document.body.removeChild(dropped_heart[i]);
                score+=4;
                countscore();
            }
    }
}
setInterval(collision_ball,1);
setInterval(collision_heart,1);

function badges()
{
if(score==6 && count_lives==0)
{
var gold =document.getElementById('Gold');
gold.style.display='inline'
} 
}
/*if(score==10 && count_lives==1)
{

}
if(score==10 && count_lives==2)
{

}*/



     

