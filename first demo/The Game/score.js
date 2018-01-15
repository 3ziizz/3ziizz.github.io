<<<<<<< HEAD
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
    score+=1;
    updatescore.textContent="Score:"+score;
    
    if(score>localStorage.getItem("highest-score"))
    {
        localStorage.setItem("highest-score",score);
        get_Hscore.textContent="Highest Score :"+localStorage.getItem("highest-score");
    }
    
=======
var score=0;
var input1= document.body;
var input2= document.body;
input1.addEventListener("click",countscore)
var updatescore=document.getElementById("currscore")
var lev=0;
var leveltag= document.body;
var updatelevel=document.getElementById("level")
function countscore(e){
    console.log("e");
    score+=1;
    updatescore.textContent="Score:"+score;
>>>>>>> origin/Aziz-1
    if (score == 10 || score == 20 ||score == 30){
        lev+=1;
        updatelevel.textContent="Level:"+lev;
    }  
}
<<<<<<< HEAD
input1.addEventListener("keydown",removeheart_fun)
=======
input2.addEventListener("keydown",removeheart_fun)
>>>>>>> origin/Aziz-1
var removeheart=[3];
var count_lives=0;
removeheart[0]=document.getElementById("first-heart")
removeheart[1]=document.getElementById("second-heart")
removeheart[2]=document.getElementById("third-heart")
function removeheart_fun(e){
<<<<<<< HEAD
=======
    console.log("rrrr");
>>>>>>> origin/Aziz-1
    removeheart[count_lives].src="dieheart.png";
    count_lives+=1;
    
}
<<<<<<< HEAD
=======

     

>>>>>>> origin/Aziz-1
