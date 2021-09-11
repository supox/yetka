$(function() {
    const current = document.querySelector('#switching_image');
    const img = document.querySelectorAll('.galleryImage');
    const imagesList = Array.prototype.slice.call(img);

    function nextImage(e) {
        var index = imagesList.map(x => x.src).indexOf(current.src);
        index = (index + 1) % imagesList.length;
        setMainImage(imagesList[index].src);
    }

    function setMainImage(src) {
        if (src === undefined) {
            return;
        }
        current.src = src;
        current.classList.add('fade-in');
        setTimeout(() => current.classList.remove('fade-in'), 200);
    }

    function rotate() {
        nextImage();
        setTimeout(rotate, 2000);
    }

    rotate();
});