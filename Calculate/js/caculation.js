let operand1 = '';
let operand2 = '';
let opt;

function buttonHandler(btn) {
    const pressedValue = btn.innerText;
    const resultInput = document.getElementById('resultInput');

    if (isNaN(pressedValue)) {
        if(pressedValue == 'C') {
            operand1 = '';
            operand2 = '';
            opt = undefined;
            resultInput.value = "";
            return;
        }

        if(pressedValue == '=') {
            const result = perform(operand1, operand2, opt);
            resultInput.value = result;
            operand1 = "";
            operand2 = "";
            opt = undefined;
        } else {
            opt = pressedValue; 
        }
    } else {
        if (opt) {
            operand2 += pressedValue;
            resultInput.value = operand2
        } else {
            operand1 += pressedValue;
            resultInput.value = operand1;
        }
    }
}

function perform(param1, param2, opt) {
    param1 = Number(param1);
    param2 = Number(param2);

    switch (opt) {
        case '+':
            return param1 + param2;
            break;
        case '-':
            return param1 - param2;
            break;
        case '*':
            return param1 * param2;
            break;
        case ':':
            return param1 / param2;
            break;
    }
}