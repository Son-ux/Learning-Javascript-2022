function displayTime() {
    const now = new Date();

    const timeString = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`

    document.writeln('<h1>'+ timeString +'</h1>');
    setInterval(refresh, 1000);
}

function refresh() {
    location.reload();
}

displayTime();