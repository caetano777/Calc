let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let addButton = document.getElementById("addButton");
let resultSpan = document.getElementById("result");

function add() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if(!isNaN(num1) && !isNaN(num2)){
        let result = num1 + num2;
        resultSpan.textContent = result;
    }else {
        resultSpan.textContent = "Entradas Inválidas";
    }
}
addButton.addEventListener ("click", add);




function sub() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if(!isNaN(num1) && !isNaN(num2)){
        let result = num1 - num2;
        resultSpan.textContent = result;
    }else {
        resultSpan.textContent = "Entradas Inválidas";
    }

}
subtractButton.addEventListener ("click", sub);

function mult() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    
    if(!isNaN(num1) && !isNaN(num2)){
        let result = num1 * num2;
        resultSpan.textContent = result;
    }else {
        resultSpan.textContent = "Entradas Inválidas";
    }

}
multiplyButton.addEventListener ("click", mult);


function divd() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
  
    if(!isNaN(num1) && !isNaN(num2)){
        let result = num1 / num2;
        resultSpan.textContent = result;
    }else {
        resultSpan.textContent = "Entradas Inválidas";
    }

}
divideButton.addEventListener ("click", divd);


