let f0 = Number(prompt('Nhập F0: '));
let f1 = Number(prompt('Nhập F1: '));

document.writeln("<h1>");
for(let i = 0; i < 10; i++) {
    document.writeln(` ${f0}`);

    const temp = f0;
    f0 = f1;
    f1 = temp + f1;
}

document.writeln('</h1>');