let images = [
    '../images/1.jpg',
    '../images/2.jpg',
    '../images/3.jpg',
    '../images/4.jpg',
    '../images/5.jpg'
]

let position = 0;

function showFirstPosition() {
    position = 0
    const image = document.getElementById('image');
    image.src = images[position];
}

function showLastPosition() {
    position = images.length - 1;
    const image = document.getElementById('image');
    image.src = images[position];
}

function showNextPosition() {
    if (position < images.length - 1) {
        position++;
    } else if(position == images.length - 1) {
        position = 0;
    }
    const image = document.getElementById('image');
    image.src = images[position];
}

function showPreviousPosition() {
    if (position > 0) {
        position--;
    } else if (position == 0) {
        position = images.length - 1;
    }
    const image = document.getElementById('image');
    image.src = images[position];
}