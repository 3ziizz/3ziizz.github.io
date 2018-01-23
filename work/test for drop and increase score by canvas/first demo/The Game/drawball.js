/*var context;
  function init()
  {
    context= myCanvas.getContext('2d');
    context.beginPath();
    context.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    context.arc(100,100,20,0,Math.PI*2,true); context.closePath();
    context.fill();
  }*/
/*var context;
var x=50;
var y=50;
var dx=0;
var dy=1;

function init()
{
  context= myCanvas.getContext('2d');
  setInterval(draw,10);
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
  /*if( x<0 || x>300) dx=-dx; 
  if( y<0 || y>300) dy=-dy; */
  /*x+=dx;
  y+=dy;
}*/