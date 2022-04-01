import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function Welcome() {
    const swiper = new Swiper('.welcome__swiper', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.welcome__next',
            prevEl: '.welcome__prev',
        },
    });
}
