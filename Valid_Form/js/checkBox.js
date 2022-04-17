function chonKem() {
    let str = 'Nhung loai kem ban da chon la: <br/>'
    let kem = document.getElementsByName('ckKem');
    let size = document.getElementsByName('rdSize')
    for (let index = 0; index < kem.length; index++) {
        if (kem[index].checked) {
            str = str + kem[index].value + '<br/>';
        }
    }

    for (let index = 0; index < size.length; index++) {
        if (size[index].checked) {
            str = str + 'Kich thuoc ban chon la: ' + size[index].value;
        }
    }
    document.getElementById('pKemDaChon').innerHTML = str;
}