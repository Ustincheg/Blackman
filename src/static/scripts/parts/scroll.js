// создаем массив ссылок соответсвующих заданному селектору
const smoothLinks = document.querySelectorAll('a[href^="#"].aside-nav-list__link');
// проходим циклом по массиву
for (let smoothLink of smoothLinks) {
    // вешаем слушателя на каждую ссылку
    smoothLink.addEventListener('click', function (e) {
        // сбрасываем нативное поведение ссылок
        e.preventDefault();
        
        const id = smoothLink.getAttribute('href');
        
        document.querySelector('a[href^="#"].aside-nav-list__link._current')
            .classList.remove('_current');

        smoothLink.classList.add('_current');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

