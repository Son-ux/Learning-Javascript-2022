let result;
document.getElementById("count").addEventListener("click", function() {
    let a = document.getElementById("numberA").value;
    let b = document.getElementById("numberB").value;
    let c = document.getElementById("numberC").value;
    if(a == 0) {
        //b x + c = 0;
        let nghiem =  -c / b;
        result = 'Phương trình có 1 nghiệm duy nhất ' + nghiem;
    } else {
        let delta = Math.pow(b, 2) - 4 * a * c;
        if(delta < 0) {
            result = 'Phương trình vô nghiệm';
        } else if (delta == 0) {
            let nghiemKep = -b / 2*a;
            result = 'Phương trình có nghiệm kép: ' + nghiemKep;
        } else {
            let nghiem1 = (-b + Math.sqrt(delta)) / (2*a);
            let nghiem2 = (-b - Math.sqrt(delta)) / (2*a);
            result = 'Phương trình có 2 nghiệm là ' + nghiem1 + 'và ' + nghiem2;
        }
    }
    document.getElementById("result").innerHTML = result;
});
