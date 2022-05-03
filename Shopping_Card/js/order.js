function Product(id, name, price, quantity, amount) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.amount = amount;

    this.renderRow = function() {
        const row = `
        <tr>
            <td class="checkColumn">
                <input type="checkbox" id="chk${this.id}" onchange="enable(this, ${this.id})" class="check-input">
            </td>
            <td>${this.name}</td>
            <td>${this.price}</td>
            <td>
                <input type="text" id="qty${this.id}" 
                value="${this.quantity > 0 ? this.quantity : ""}" 
                disabled onchange="calculateAmount(this, ${this.id}, ${this.price})"
                class="quantity">
            </td>
            <td>
                <span id="amount${this.id}" class="amount">
                    ${this.quantity > 0 ? this.quantity * this.price : 0}
                </span>
            </td>
        </tr>`;
        return row;
    }
}

const productList = [
    new Product(1, 'IPhone 7', 100, 0, 0),
    new Product(2, 'IPhone 8', 200, 0, 0),
    new Product(3, 'IPhone 9', 300, 0, 0),
    new Product(4, 'IPhone 10', 400, 0, 0),
    new Product(5, 'IPhone 11', 500, 0, 0),
    new Product(6, 'IPhone 12', 600, 0, 0)
];

function filterPriceLevel() {
    const tbodyCtrls = document.getElementById('tbody');
    const priceLevelCtrl = document.getElementById('priceLevel');
    const priceLevel = Number(priceLevelCtrl.value)

    let tbodyContent = '';
    for (const item of productList) {
        let priceValue = item.price;
        switch (priceLevel) {
        case 1:
            if(priceValue <= 100){
                tbodyContent += item.renderRow();
            }
            break;
        case 2:
            if(priceValue <= 200 && priceValue >= 100){
                tbodyContent += item.renderRow();
            }
            break;
        case 3:
            if(priceValue <= 300 && priceValue >= 200){
                tbodyContent += item.renderRow();
            }
            break;
        case 4:
            if(priceValue <= 400){
                tbodyContent += item.renderRow();
            }
            break;
        case 5:
            if(priceValue >= 400){
                tbodyContent += item.renderRow();
            }
            break;
        default:
            tbodyContent += item.renderRow();
            break;
        }

        tbodyCtrls.innerHTML = tbodyContent;
    }
}

function enable(chk, id) {
    const qtyCtrl = document.getElementById('qty' + id);
    if (chk.checked) {
        qtyCtrl.removeAttribute('disabled');
    } else {
        qtyCtrl.setAttribute('disabled', '');
        const amountCtrl = document.getElementById('amount' + id)
        amountCtrl.innerText = '0';
        qtyCtrl.value = ''
    }
    calculateTotal();
}

function calculateAmount(qty, id, price) {
    const value = Number(qty.value)
    const amountCtrl = document.getElementById('amount' + id);

    if (value > 0) {
        amountCtrl.innerText = (value * price)
    } else {
        amountCtrl.innerText = '';
    }
    calculateTotal();
}

function calculateTotal() {
    const amountSpans = document.getElementsByClassName('amount');
    const totalSpan = document.getElementById('total')

    if (!!amountSpans && amountSpans.length > 0) {
        let total = 0;

        for(const spn of amountSpans) {
            total += Number(spn.innerText)
        }

        totalSpan.innerText = total
        return;
    }
    totalSpan.innerText = 0
}

function checkAll(chk) {
    const checkInputCtrls = document.getElementsByClassName('check-input')

    for (const element of checkInputCtrls) {
        element.checked = chk.checked;
        var event = new Event('change');
        element.dispatchEvent(event)
    }
}