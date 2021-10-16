const display = document.querySelector('.result');
const prev = document.querySelector('.prev');
const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');
const equals = document.querySelector('.eq');
const clearButton = document.querySelector('.ce');

var soFar = 0;
let currentOp = '';
let divZeroError = "CAN'T DIVIDE BY 0! CLEARING EVERYTHING!";


function clearEverything(){
    display.innerHTML='';
    prev.innerHTML='';
    soFar = 0;
    currentOp = '';
}


function divideByZero(){
    return (currentOp == '/' && parseFloat(display.textContent) == 0.00000)
}

nums.forEach((num)=>{
    num.addEventListener("click", function(){
        display.textContent += num.textContent;
    })
})

ops.forEach((op)=>{
    op.addEventListener("click",function(){
        if(currentOp == ''){
            currentOp = op.textContent;
            soFar = parseFloat(display.textContent);
            prev.textContent = `${soFar} ${currentOp}`;
        }else{
            if(divideByZero()){
                clearEverything();
                alert(divZeroError);
            } else{
                soFar = operate(currentOp,soFar,parseFloat(display.textContent));
                currentOp = op.textContent;
                prev.textContent = `${soFar} ${currentOp}`;
            }
        }
        display.innerHTML='';
    })
})

equals.addEventListener("click",function(){
    if(divideByZero()){
        clearEverything();
        alert(divZeroError);
    }else{
        display.textContent = operate(currentOp,soFar,parseFloat(display.textContent)).toFixed(5);
        soFar = 0;
        currentOp = '';
    }
})

clearButton.addEventListener("click",(function(){
    clearEverything();
}))




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