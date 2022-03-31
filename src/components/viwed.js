import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function Wiewed() {
    const swiper = new Swiper('.viewed__swiper', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 1000,
        navigation: {
            nextEl: '.viewed__button-next',
            prevEl: '.viewed__button-prev',
        },
    });
}
