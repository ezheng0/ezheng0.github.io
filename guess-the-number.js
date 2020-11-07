startGame();
function startGame(){
    clearPage();
    num = Math.floor(Math.random() * 101);
}
function clearGame(){
    document.getElementById("guessResponse").innerHTML = "";
    document.getElementById("replay").style.display = "none";
}
function valueCheck(val, min, max){
    if(!(val >= min) || !(val <= max)){
        return "Enter a number from 0 to 100";
    }
    if(val == num){
        return `Correct, good job. You took: ${guesses.length} guesses`
    }else if(val < num){
        return "Too low"
    }else if(val > num){
        return "Too high";
    }
}