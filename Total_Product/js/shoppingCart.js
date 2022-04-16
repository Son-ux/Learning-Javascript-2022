function caculate() {
    const lblPrice = document.getElementById('product');
    const txtQuantity = document.getElementById('qty');

    const price = Number(lblPrice.getAttribute('data-price'));
    const qty = Number(txtQuantity.value);

    const nameSpan = document.getElementById('name');
    const amountspan = document.getElementById('amount');

    nameSpan.innerText = 'iPhone 9';
    amountspan.innerText = "$" + (price * qty);
}