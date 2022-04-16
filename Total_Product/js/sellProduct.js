function addToCart(btn) {
    const trNode = btn.parentElement.parentElement;

    //Giá trị true cho phép tạo ra bản sao của thẻ tr cùng các thành phần con
    const trNodeClone = trNode.cloneNode(true);
    const btnAdd = trNodeClone.getElementsByTagName('button');
    btnAdd[0].innerText = 'Remove';
    btnAdd[0].setAttribute('onclick', 'removeCardItem(this)');
    const cartBody = document.getElementById('card-body');

    cartBody.appendChild(trNodeClone);

    const cartTable = document.getElementById('cartItems');
    cartTable.style.display = 'table';

    const msgNoProduct = document.getElementById('emptyCart');
    msgNoProduct.style.display = 'none'

    const grandTotal = document.getElementById('grandTotal');
    grandTotal.style.display = 'block'
    caculateGrandTotal();
}

function removeCardItem(btn) {
    const trNode = btn.parentElement.parentElement
    const tbodyNode = trNode.parentElement
    tbodyNode.removeChild(trNode)
    if (tbodyNode.children.length <= 0) {
        const cartTable = document.getElementById('cartItems');
        cartTable.style.display = 'none';

        const msgNoProduct = document.getElementById('emptyCart');
        msgNoProduct.style.display = 'block'

        const grandTotal = document.getElementById('grandTotal');
        grandTotal.style.display = 'none'

        grandTotal.childNodes[1].innerText = '0';
    }
    caculateGrandTotal();
}

function caculateGrandTotal() {
    const cartItemsTable = document.getElementById('cartItems');
    const amountSpans = cartItemsTable.getElementsByClassName('amount');

    let total = 0;

    for (const item of amountSpans) {
        total += Number(item.innerText)
    }

    const totalSpan = document.getElementById('total');
    totalSpan.innerText = total;
}