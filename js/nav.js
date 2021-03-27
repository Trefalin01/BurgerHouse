const burger = document.querySelector('.logo_img');
const promo = document.querySelector('.promo');
const nav = document.querySelector('.nav-sec');
burger.addEventListener('click', () => {
    if(promo.classList.contains('is-active')){
        nav.classList.remove('is-active'); 
        promo.classList.remove('is-active'); 
    } else {
        nav.classList.add('is-active'); 
        promo.classList.add('is-active');
    }
})