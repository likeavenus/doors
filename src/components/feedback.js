import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

export default function Feedback() {
   const swiper = new Swiper(".feedback__swiper", {
      direction: "horizontal",
      loop: true,
      navigation: {
      nextEl: ".feedback__btn-next",
      prevEl: ".feedback__btn-prev",
      },
   });
}
