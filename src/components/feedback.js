export default function Feedback(Swiper, Navigation, Pagination) {
   Swiper.use([Navigation, Pagination]);
   const swiper = new Swiper(".feedback__swiper", {
      direction: "horizontal",
      loop: true,
      navigation: {
      nextEl: ".feedback__btn-next",
      prevEl: ".feedback__btn-prev",
      },
   });
}
