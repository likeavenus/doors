export default function Welcome(Swiper, Navigation, Pagination) {
    Swiper.use([Navigation, Pagination]);
    const swiper = new Swiper('.welcome__swiper', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.welcome__next',
            prevEl: '.welcome__prev',
        },
    });
}
