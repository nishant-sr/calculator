const display = document.querySelector('.result');
const prev = document.querySelector('.prev');
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const equals = document.querySelector('.eq');
const clearButton = document.querySelector('.ce');

let currentVal = 0;
let displayVal = 0;
let currentOp = '';

nums.forEach((num)=>{
    num.addEventListener("click", function(){
        display.textContent += num.textContent;
    })
})


ops.forEach((op)=>{
    op.addEventListener("click",function(){
        // displayVal = parseInt(display.textContent);
        // console.log("DISPLAY VAL: " + displayVal)
        // currentOp = op.textContent;
        // currentVal = operate(currentOp,currentVal,displayVal)
        // console.log("CURRENT VAL: " + currentVal);
        // clearDisplay();
    })
})

equals.addEventListener("click",function(){
    display.textContent = operate(currentOp,currentVal,displayVal);
})

function clearDisplay(){
    display.innerHTML='';
}

clearButton.addEventListener("click",() => clearDisplay())

function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function operate(operator,x,y){
    switch(operator.toLowerCase()){
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "*":
            return multiply(x,y);
        case "/":
            return divide(x,y);
    }
}