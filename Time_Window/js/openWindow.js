let windowId;

function openWindow() {
    let options;

    let ua = navigator.userAgent;
    options = "menubar = yes,toolbar=yes,width=150,heigh=150"
    if (ua.indexOf("Trident")) {
        options = "menubar = yes,toolbar=yes,width=100,heigh=100"
    }

    windowId = window.open("http://google.com", "Tim kiem", options);
}

function closeWindow() {
    if(windowId){
        windowId.close();
        alert('Window is close');
    } else {
        alert('Window is not open')
    }
}

function checkWindowClose() {
    if(windowId.closed) {
        alert('Window is close');
    } else {
        alert('Window is open');
    }
}