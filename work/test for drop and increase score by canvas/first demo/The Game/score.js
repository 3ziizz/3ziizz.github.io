score=0;
var input1= document.body;
var get_Hscore=document.getElementById("score");
input1.addEventListener("click",countscore)
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
    if(y>500){
    y=-50;
    score+=1;
    updatescore.textContent="Score:"+score;
    }
    
    if(score>localStorage.getItem("highest-score"))
    {
        localStorage.setItem("highest-score",score);
        get_Hscore.textContent="Highest Score :"+localStorage.getItem("highest-score");
    }
    
    if (score == 10 || score == 20 ||score == 30||score == 40||score == 50){
        lev+=1;
        updatelevel.textContent="Level:"+lev;
    }  
}
input1.addEventListener("keydown",removeheart_fun)
var removeheart=[3];
var count_lives=0;
removeheart[0]=document.getElementById("first-heart")
removeheart[1]=document.getElementById("second-heart")
removeheart[2]=document.getElementById("third-heart")
function removeheart_fun(e){
    removeheart[count_lives].src="dieheart.png";
    count_lives+=1;
    if(count_lives>=3){
        count_lives=0;
        alert('Game Over');
        score=0;
    }
}

var context;
var x=50;
var y=50;
var dx=0;
var dy=1;

function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,1);
}

function draw()
{
    for(var i =0 ; i<230;i++){
    context.clearRect(0,i, 300,300); //const,var,const,const
    }
  context.beginPath();
  context.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x,y,20,0,Math.PI*2,true);
  context.closePath();
  context.fill();
  /*if( x<0 || x>300) dx=-dx;*/ 
  if( y>550) {
    countscore();
    dy=0;
    dx=0;
   }

  x+=dx;
  y+=dy;
}