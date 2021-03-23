
const gambar = document.querySelector('.bagan-3 img');
document.body.onload = function() {
    gambar.style.transition = '2s';
    gambar.style.transform = 'translate(-500px,0px)';
}

const carousel = document.querySelector('.navbar .carousel');
const on = document.querySelector('.carousel ul');
const isiCarousel = document.querySelector('.isi-carousel');
carousel.addEventListener('click', function() {
    on.classList.toggle('toggle');
    isiCarousel.classList.toggle('slide');
})

