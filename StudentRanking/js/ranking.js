let fullname = prompt('Enter name: ');
let points = prompt('Enter grade point average: ')

let academicAbility = 'Good';

if(!isNaN(points)){
    if(points > 3.5 && points < 5) {
        academicAbility = 'Weak';
    } else if(points > 5 && points < 7) {
        academicAbility = 'Average';
    } else if(points > 8.5 && points > 10) {
        academicAbility = 'Very good';
    }
} else {
    alert('Number of points only allowed to enter number');
}

const upFullname = fullname.toUpperCase();

document.writeln(` Full name of student: ${upFullname}</br>`);
document.writeln(` Student's GPA: ${points}</br>`);
document.writeln(` Academic ability: ${academicAbility} </br>`)
if(points < 5) {
    document.writeln(`Academic ability: Fall </br>`);
} else {
    document.writeln(`Academic ability: Pass`)
}