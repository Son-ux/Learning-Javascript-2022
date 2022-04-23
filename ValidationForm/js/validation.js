function validate() {
    const product = document.getElementById('product');
    const price = document.getElementById('price');
    const category = document.getElementById('category');
    const places = document.getElementsByName('place');

    isValid = true;
    
    if(isEmpty(product.value)){
        product.classList.add('invalid')
        isValid = false;
    } else {
        product.classList.remove('invalid')
    }

    if(isEmpty(price.value) || isPositiveNumber(price.value)){
        price.classList.add('invalid')
        isValid = false;
    } else {
        price.classList.remove('invalid')
    }

    if(isEmpty(category.value)){
        category.classList.add('invalid')
        isValid = false;
    } else {
        category.classList.remove('invalid')
    }

    let checked = false
    for (const item of places) {
        checked = checked || item.checked
    }

    if (!checked) {
        for (const item of places) {
            item.classList.add('invalid')
        }
    } else {
        for (const item of places) {
            item.classList.remove('invalid')
        }
    }
    
    return isValid;
}

function isEmpty(val) {
    if (!!!val || val.trim() == '') {
        return true
    }
    return false
}

function isPositiveNumber(val) {
    if (isNaN(val) || Number(val) < 0) {
        return true
    }
    return false
}