import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function DoorsView() {
    const swiper = new Swiper('.best-door__swiper', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.best-door__next',
            prevEl: '.best-door__prev',
        },
    });
}