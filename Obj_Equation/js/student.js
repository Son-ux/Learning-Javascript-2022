let student = new Object();

student.hoTen = prompt('Ho ten: ');
student.diemTb = prompt('Diem trung binh: ');

student.hienThi = function() {
    document.writeln(`<h1>${student.hoTen}</h1>`);
    document.writeln(`<h1>${student.diemTb}</h1>`);
    if(student.diemTb > 5) {
        document.writeln(`<h1>Ket Qua: Dau</h1>`);
    } else {
        document.writeln(`<h1>Ket Qua: Rot</h1>`);
    }
}

student.hienThi();