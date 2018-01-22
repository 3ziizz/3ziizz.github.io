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
                badges();
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
function badges() {
    if (score == 6 && count_lives == 0) {
        var gold = document.getElementById('Gold');
        gold.style.display = 'inline'
    }
}

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