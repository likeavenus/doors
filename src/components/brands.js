export default function Brands(Swiper, Navigation, Pagination, Autoplay) {
  Swiper.use([Navigation, Pagination, Autoplay]);
  const swiper = new Swiper(".brands__swiper", {
    slidesPerView: 'auto',
    loop: true,
    speed: 6000,
    slidesPerView: '1',
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
          slidesPerView: 4,
      },
      1280: {
          slidesPerView: 4,
      },
      1440: {
          slidesPerView: 4,
      },
      1920: {
          slidesPerView: 5,
      }
    },
    autoplay: {
    enabled: true,
    delay: 1,
    },
  });
}
