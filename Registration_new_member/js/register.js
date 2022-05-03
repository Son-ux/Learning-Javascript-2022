function validate() {
    const studentIdCtrl = document.getElementById('idMember');
    const nameCtrl = document.getElementById('name');
    const emailCtrl = document.getElementById('email');
    const nationalCtls = document.getElementById('national');
    const noteCtls = document.getElementById('note');

    const genderCtrls = document.getElementsByName('gender');
    const hobbieCtrls = document.getElementsByName('hobbies');
    

    let isValid = true;

    if (isEmpty(studentIdCtrl.value)) {
        studentIdCtrl.classList.add('invalid');
        isValid = false;
    } else {
        studentIdCtrl.classList.remove('invalid');
    }

    if (isEmpty(nameCtrl.value)) {
        nameCtrl.classList.add('invalid');
        isValid = false;
    } else {
        nameCtrl.classList.remove('invalid');
    }

    if (isEmpty(emailCtrl.value) || !isEmail(emailCtrl.value)) {
        emailCtrl.classList.add('invalid');
        isValid = false;
    } else {
        emailCtrl.classList.remove('invalid');
    }

    if (!isChecked(genderCtrls)) {
        document.getElementById('genderControls').classList.add('invalid')
        isValid = false;
    } else {
        document.getElementById('genderControls').classList.remove('invalid')
    }

    if (!isChecked(hobbieCtrls)) {
        document.getElementById('hobbiesId').classList.add('invalid')
        isValid = false;
    } else {
        document.getElementById('hobbiesId').classList.remove('invalid')
    }

    if (isEmpty(nationalCtls.value)) {
        nationalCtls.classList.add('invalid');
        isValid = false;
    } else {
        nationalCtls.classList.remove('invalid');
    }

    if (isEmpty(noteCtls.value)) {
        noteCtls.classList.add('invalid');
        isValid = false;
    } else {
        noteCtls.classList.remove('invalid');
    }

    if(isValid) {
        alert('Thong tin dang ky thanh cong');
    } else {
        alert('Vui long nhap dung thong tin')
    }
}

function isEmpty(value) {
    if (!!!value || value.length <= 0) {
        return true;
    }
    return false;
}

function isEmail(value) {
    return value.match(/^\S+\@\S+\.\S+$/)
}

function isChecked(ctrls) {
    let isCheck = false;
    for (const element of ctrls) {
        if (element.checked){
            isCheck = true;
        }
    }
    return isCheck;
}