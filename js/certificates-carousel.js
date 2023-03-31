let carousel = document.querySelector('.certificates-carousel');
let inner = document.querySelector('.certificates-carousel__inner');
let images = inner.children;
let width = 0;
defineWidth();
let currentImage = 0;
let next = document.querySelector('.certificates-carousel__next');
let previous = document.querySelector('.certificates-carousel__previous');
let bubblesContainer = document.querySelector('.certificates-carousel__bubbles');
let bubbles = [];

for (let position = 0; position < images.length; position++) {
    let spanTag = document.createElement('span');
    spanTag.classList.add('bubble');
    bubblesContainer.appendChild(spanTag);
    bubbles.push(spanTag);

    spanTag.addEventListener('click', function () {
        currentImage = position;
        switchImage();
    });
};

bubbles[0].classList.add('active');

next.addEventListener('click', function () {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    switchImage();
});

previous.addEventListener('click', function () {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    switchImage();
});

const autoScroll = setInterval(autoSwitch, 3000);

function autoSwitch() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    switchImage();
};

function switchImage () {
    defineWidth();
    inner.style.left = -width * currentImage + 'px';
    
    bubbles.forEach(function (spanTag, position) {
        if (position === currentImage) {
            spanTag.classList.add('active');
        } else {
            spanTag.classList.remove('active');
        }
    });
};

function defineWidth() {
    inner.childNodes.forEach(img => {
        if (img.nodeName === "IMG") {
            width = img.clientWidth
        };
    });
};
