let a = Number(prompt('Nhập a: '));
let b = Number(prompt('Nhập b: '));
let opt = prompt('Nhập toán tử  (+, -, x, :): ');
let result = 0;

if(!isNaN(a) && !isNaN(b)){
    switch(opt) {
    
        case '+': 
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case ':':
            result = a / b;
            break;
        default:
            result = 'Invalid input'
            break;
    }   
} else {
    alert('Please enter the number');
}

if(typeof result == "number") {
    alert(`${a} ${opt} ${b} = ${result}`);
} else {
    alert(result);
}