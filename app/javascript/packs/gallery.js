$(function() {
    const current = document.querySelector('#current');
    const imgs = document.querySelector('.imgs');
    const img = document.querySelectorAll('.imgs img');
    const imagesList = Array.prototype.slice.call(img);
    const opacity = 0.6;


    function imgClick(e) {
        setMainImage(e.target.src);
    }

    function nextImage(e) {
        var index = imagesList.map(x => x.src).indexOf(current.src);
        index = (index + 1) % imagesList.length;
        setMainImage(imagesList[index].src);
    }

    function setMainImage(src) {
        if (src === undefined) {
            return;
        }
        img.forEach(img => (img.style.opacity = 1));
        current.src = src;
        current.classList.add('fade-in');
        setTimeout(() => current.classList.remove('fade-in'), 200);
        var index = imagesList.map(x => x.src).indexOf(src);
        if (index >= 0) {
            img[index].style.opacity = opacity;
        }
    }

    imgs.addEventListener('click', imgClick);
    current.addEventListener('click', nextImage);
    setMainImage(img[0].src);
});