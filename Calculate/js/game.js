let rnd = Math.round(Math.random() * 100);

let guessNum;

do {
    guessNum = Number(prompt('Nhap so du doan'));
    if(guessNum == rnd){
        alert('Ban da nhap dung');
    } else if(guessNum > rnd) {
        alert('So ban nhap lon hon so du doan')
    } else {
        alert('So ban nhap be hon so du doan')
    }
} while(rnd != guessNum)