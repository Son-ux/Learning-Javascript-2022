const imageNames = [
    "/images/1.jpg", 
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
]

let images = []
let position = 0;

function loadImages() {
    for (const name of imageNames) {
        const img = new Image();
        img.src = name;
        images.push(img);
    }
    document.getElementById('caption').innerText = `Anh ${position+1}/${images.length}`;
}

function next() {
    if(position == images.length -1) {
        position = 0;
    } else {
        position++;
    }

    document.getElementById('image').src = images[position].src;
    document.getElementById('caption').innerText = `Anh ${position+1}/${images.length}`;
}

function previous() {
    if(position == 0) {
        position = images.length - 1;
    } else {
        position--;
    }
    document.getElementById('image').src = images[position].src;
    document.getElementById('caption').innerText = `Anh ${position+1}/${images.length}`;
}