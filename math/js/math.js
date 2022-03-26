let num = prompt('Nhập một giá trị số: ');

if(isNaN(num)){
    alert('Số vừa nhập không hợp lệ');
} else {
    const sqrt = Math.sqrt(num);
    const pow = Math.pow(num, 2);
    const round = Math.round(num);

    document.writeln(` Giá trị nhập vào ${num} </br>`);
    document.writeln(` Căn bậc hai của ${num} là ${sqrt} </br>`);
    document.writeln(` Bình phương của ${num} là ${pow} </br>`);
    document.writeln(` Làm tròn của ${num} là ${round} </br>`);
}