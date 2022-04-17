function validateForm() {
    let name = document.forms[0].txtName.value;
    if (name == '') {
        alert('Please enter your name ')
        return false;
    } else {
        alert('Hi ' + name + '!')
    }
}