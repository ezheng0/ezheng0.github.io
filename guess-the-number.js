let num;
let guesses;
startGame();
function startGame(){
    clearPage();
    guesses = [];
    num = Math.floor(Math.random() * 101);
}
function onGuess(){
    let guess = document.getElementById("numberGuess").value;
    let guessResponse = document.getElementById("guessResponse");
    recordOnce(guess, guesses, v => !(v >= 0) || !(v <= 100));
    respond(guessResponse, valueCheck(guess, 0, 100));
}

function clearPage(){
    document.getElementById("guessResponse").innerHTML = "";
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
    if(!exclusionCheck(val) && !arr.includes(val)){
        arr.push(val);
    }
} 
function respond(element, message){
    element.innerHTML = message;
}