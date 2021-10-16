const display = document.querySelector('.result');
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const equals = document.querySelector('.eq');
const clearButton = document.querySelector('.ce');

var soFar = 0;
let currentOp = '';

nums.forEach((num)=>{
    num.addEventListener("click", function(){
        display.textContent += num.textContent;
    })
})

ops.forEach((op)=>{
    op.addEventListener("click",function(){
        if(currentOp == ''){
            currentOp = op.textContent;
            soFar = parseInt(display.textContent);
        }else{
            soFar = operate(currentOp,soFar,parseInt(display.textContent));
            currentOp = op.textContent;
        }
        display.innerHTML='';
    })
})

equals.addEventListener("click",function(){
    display.textContent = operate(currentOp,soFar,parseInt(display.textContent));
    
})

clearButton.addEventListener("click",function(){
    display.innerHTML='';
    soFar = 0;
    currentOp = '';
})

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