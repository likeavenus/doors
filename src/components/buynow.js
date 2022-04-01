import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function BuyNow() {
    const swiper = new Swiper(".buy-now__swiper", {
        slidesPreView:1,
        spaceBetween: 1000,
        direction: 'horizontal',
        loop: false,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 97
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: 50
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        },
        navigation: {
            nextEl: '.buy-now__button-next',
            prevEl: '.buy-now__button-prev',
        },
    });
}
