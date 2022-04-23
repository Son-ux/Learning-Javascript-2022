function swap(type) {
    const img = document.getElementById('image')
    img.src = '/images/1.jpg'
    if (type) {
        img.src = '/images/2.jpg'
    }
}