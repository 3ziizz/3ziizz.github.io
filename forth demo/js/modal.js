var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal 

function check_score()
{
    if(score>=6 && count_lives==0)
    {   
        console.log(score);
        modal.style.display ="block";
        console.log( modal.style.display);
    } 
    
    
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
setInterval(check_score,200);