head=document.getElementById("start");
main_game=document.getElementById("game");
option_page=document.getElementById("option");
exit_page=document.getElementById("exit");

start_btn=document.getElementsByClassName("button1");
option_btn=document.getElementsByClassName("button2");
exit_btn=document.getElementsByClassName("button3");

start_btn[0].addEventListener("click",game);
option_btn[0].addEventListener("click",options)
exit_btn[0].addEventListener("click",out);
function game()
{
    head.style.display="none"
    main_game.style.display="initial"
    option_page.style.display="none"
    exit_page.style.display="none"
    script1 = document.createElement("script");
    var script1_src = document.createAttribute("src");
    script1_src.value = "js/drop-ball.js";
    script1.setAttributeNode(script1_src);
    document.body.appendChild(script1);



}
function options()
{
    head.style.display="none"
    main_game.style.display="none"
    option_page.style.display="initial"
    exit_page.style.display="none"

}

function out()
{
    head.style.display="none"
    main_game.style.display="none"
    option_page.style.display="none"
    exit_page.style.display="initial"
}