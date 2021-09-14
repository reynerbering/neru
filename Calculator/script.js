var userInput = parseInt(prompt("Please Choose a Number for the Calculator"));
    var x = prompt ("Value for x:");
    var y = prompt ("Value for y:");

switch (userInput){
    case 1: alert (addNumbers(x,y));
    break;
    case 2: alert (subtractNumbers(x,y));
    break;
    case 3: alert (multiplyNumbers(x,y));
    break;
    case 4: alert (divideNumbers(x,y));
    break;
    default : alert("Wrong Entry");
}



// if(userInput == 1){
//     alert (addNumbers(x,y));
// }
// else if(userInput == 2){
//     alert (subtractNumbers(x,y));
// }
// else if(userInput == 3){
//     alert (multiplyNumbers(x,y));
// }
// else if(userInput == 4){
//     alert (divideNumbers(x,y));
// }
// else{
//     alert ("Wrong entry");
// }



function addNumbers(x,y){

    return parseInt(x)+parseInt(y);

}
function subtractNumbers(x,y){

    return parseInt(x)-parseInt(y);

}

function multiplyNumbers(x,y){

    return parseInt(x)*parseInt(y);

}

function divideNumbers(x,y){

    return parseInt(x)/parseInt(y);

}


