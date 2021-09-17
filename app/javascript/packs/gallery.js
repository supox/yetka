$(function() {
    const current = document.querySelector('#current');
    const imgs = document.querySelector('.imgs');
    const img = document.querySelectorAll('.imgs img');
    const imagesList = Array.prototype.slice.call(img);
    const opacity = 0.6;
    const prevButton = document.querySelector('.carousel-control-prev')
    const nextButton = document.querySelector('.carousel-control-next')


    function imgClick(e) {
        setMainImage(e.target.src);
    }

    function nextImage(e) {
        switchImage(1);
    }

    function prevImage(e) {
        switchImage(-1);
    }

    function modulo(n, m) {  // faster and without the negative number result issue - https://stackoverflow.com/a/17323608/15499087
        return ((n % m) + m) % m;
    }

    function switchImage(delta) {
        var index = imagesList.map(x => x.src).indexOf(current.src);
        index = modulo(index + delta, imagesList.length);
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
    prevButton.addEventListener('click', nextImage);  // ltr, all is mixed up
    nextButton.addEventListener('click', prevImage);
    setMainImage(img[0].src);

    document.onkeydown = checkKey;
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
            nextImage(e);
        } else if (e.keyCode == '39') {
            prevImage(e);
        }
    }

});