startGame();
function startGame(){
    clearPage();
    num = Math.floor(Math.random() * 101);
}
function clearGame(){
    document.getElementById("guessResponse").innerHTML = "";
    document.getElementById("replay").style.display = "none";
}