function deleteItem(confirmResult) {
    let message = 'The product is deleted';

    if (!confirmResult) {
        message = 'No product is deleted'
    }

    return message;
}

let confirmResult = confirm('Do you want to delete?');

let msg = deleteItem(confirmResult);

alert(msg);