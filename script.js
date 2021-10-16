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

// when you enter a number, you need to store that as the starting point
// and then save that to be used in an operation you perform with the operation you choose next
// when you enter another number after, you need to store that as the newValue

ops.forEach((op)=>{
    op.addEventListener("click",function(){
        if(currentOp == ''){
            currentOp = op.textContent;
            soFar = parseInt(display.textContent);
        }else{
            soFar = operate(currentOp,soFar,parseInt(display.textContent));
            currentOp = op.textContent;
        }
        clearDisplay();
    })
})

equals.addEventListener("click",function(){
    display.textContent = operate(currentOp,soFar,parseInt(display.textContent));
    
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