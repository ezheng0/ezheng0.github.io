let num;
let guesses = [];
startGame();
function startGame(){
    clearPage();
    num = Math.floor(Math.random() * 101);
}
function clearGame(){
    document.getElementById("guessResponse").innerHTML = "";
    document.getElementById("replay").style.display = "none";
}
function onGuess(){
    let guess = document.getElementById("numberGuess").value;
    let guessResponse = document.getElementById("guessResponse");
    valueCheck(guess, 0, 100);
    recordOnce(guess, guesses, val => !(val >= 0) || !(val <= 100));
    respond(guessResponse, valueCheck);
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
function recordOnce(val, arr, exclusionCheck){
    if(!exclusionCheck() && !arr.includes(val)){
        arr.push(val);
    }
} 
function respond(element, message){
    element.innerHTML = message;
}