let turn = true;
let clickCount = 0;

function play(btn) {
    btn.innerText = turn ? 'X' : "O"
    btn.classList.add(turn ? 'xbtn' : 'obtn') 
    btn.setAttribute('disabled', 'disabled')
    turn = !turn;
    clickCount++;

    setTimeout(() => {
        if (clickCount == 16) {
            alert('Game is finish!')
        }
    }, 1000);
}

function reset() {
    if (!confirm('Do you want to reset the game?')) {
        return;
    }

    let btns = document.getElementsByClassName("btn");

    for (let index = 0; index < btns.length; index++) {
        btns[index].innerText = "";
        btns[index].classList.remove("xbtn");
        btns[index].classList.remove("obtn");
        btns[index].removeAttribute("disabled");
    }

    turn = true;
    clickCount = 0;
}