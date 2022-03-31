import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay]);

export default function Brands() {
  const swiper = new Swiper(".brands__swiper", {
    speed: 10000,
    loop: true,
    autoplay: {
      delay: 0,
    },
  });
}
