let gpa = prompt('Enter your gpa: ', 0);

if(isNaN(gpa)){
    alert('you are inputed invalid gpa');
} else if (gpa < 0 || gpa > 10) {
    alert('your inputed gpa is invalid');
} else {
    alert(`Your gpa is ${gpa}`);
}