


export default function DoorsView(Swiper, Navigation, Pagination) {
    Swiper.use([Navigation, Pagination]);

    const swiper = new Swiper('.best-door__swiper', {
        direction: 'horizontal',
        loop: false,
        navigation: {
            nextEl: '.best-door__next',
            prevEl: '.best-door__prev',
        },
    });
}