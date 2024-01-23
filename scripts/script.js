const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});
