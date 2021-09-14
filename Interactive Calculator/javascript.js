let usrInput1 = document.getElementById("firstUserInput");
let usrInput2 = document.getElementById("secondUserInput");
let result = document.getElementById("resultOut");


// add
document.getElementById("plus").addEventListener("click",function(){
    result.value=parseInt(usrInput1.value)+parseInt(usrInput2.value);
})
// subtract
document.getElementById("minus").addEventListener("click",function(){
    result.value=parseInt(usrInput1.value)-parseInt(usrInput2.value);
})
// multiply
document.getElementById("multiply").addEventListener("click",function(){
    result.value=parseInt(usrInput1.value)*parseInt(usrInput2.value);
})
// divide
document.getElementById("divide").addEventListener("click",function(){
    result.value=parseInt(usrInput1.value)/parseInt(usrInput2.value);
})

// dark mode
function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }
