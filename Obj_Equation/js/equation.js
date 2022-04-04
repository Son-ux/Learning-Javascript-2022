const equation = new Object();

equation.caculation = function() {
    numberA = equation.numberA = Number(document.getElementById('numberA').value);
    numberB = equation.numberB = Number(document.getElementById('numberB').value);
    numberC = equation.numberC = Number(document.getElementById('numberC').value);

    

    if(isNaN(numberA) || isNaN(numberB) || isNaN(numberC)) {
        alert('Only numbers are allowed');
        return;
    }
    
    if(numberA =! 0){
        let delta = (numberB ^ 2) - (4 * numberA * numberC);

        let nghiem1 = (-numberB - Math.sqrt(delta)) / (2 * numberA);
        let nghiem2 = (-numberB + Math.sqrt(delta)) / (2 * numberA);

        document.getElementById('result').innerHTML = `Phuong trinh co 2 nghiem` 
                                                       + `x1 = ${nghiem1}, x2 = ${nghiem2}`;

        if(delta < 0) {
            document.getElementById('result').innerHTML = 'Phuong trinh vo nghiem';
        } else if(delta == 0) {
            let nghiemKep = -numberB / (2 * numberA);
            document.getElementById('result').innerHTML = `Phuong trinh co 2 nghiem kep x1, x2 = ${nghiemKep}`;
        }
    } else {
        //bx + c = 0;
    }
}