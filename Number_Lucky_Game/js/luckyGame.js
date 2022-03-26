let number = prompt('Enter your number from 10 to 15: ');
let x = 10 + Math.round(Math.random() * 5);

if(!isNaN(number)) {
    if(number >= 10 && number <= 15) {
        if(x == number){
            alert('Congrats you have entered successfully');
        } else if(number > x) {
            alert('The number is large');
        } else {
            alert('The number is small');
        }
    } else {
        alert('The number is not between 10 and 15')
    }
} else {
    alert('Only allow numeric input');
}