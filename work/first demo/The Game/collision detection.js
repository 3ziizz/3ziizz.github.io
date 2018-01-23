/*var dropped_object=document.getElementsByClassName("balls");
var collector=document.getElementById("box");
var collector_right=collector.getBoundingClientRect().right;
var collector_left=collector.getBoundingClientRect().left;
var collector_top=collector.getBoundingClientRect().top;*/

function collision()
{
    var dropped_object=document.getElementsByClassName("balls");
    var collector=document.getElementById("box");
    //var collector_top=collector.getBoundingClientRect().top;
    for (var i=0;i<dropped_object.length;i++)
    {

        
        if( (dropped_object[i].getBoundingClientRect().top >= collector.getBoundingClientRect().top )
      && (dropped_object[i].getBoundingClientRect().right<collector.getBoundingClientRect().right)&&((dropped_object[i].getBoundingClientRect().left>collector.getBoundingClientRect().left))) /*&& 
       /* (dropped_object[i].getBoundingClientRect().right<collector.getBoundingClientRect().right) &&
         (dropped_object[i].getBoundingClientRect().left>collector.getBoundingClientRect().left))*/
            {
                document.body.removeChild(dropped_object[i]);
                console.log("jhch");

            }
    }
}

setInterval(collision,1);
/*
dropped_object[i].getBoundingClientRect().right>collector_right 
            &&
            dropped_object[i].getBoundingClientRect().right<collector_right+collector_right.width
            &&
            dropped_object[i].getBoundingClientRect().top>=collector_top)
            {
                document.body.removeChild(dropped_object[i]);

            }*/