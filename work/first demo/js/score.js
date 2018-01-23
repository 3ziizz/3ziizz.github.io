var score=0;
var input= document.body;
input.addEventListener("click",countscore)
function countscore(event){
    score++;
}
console.log(score);