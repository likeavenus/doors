import Swiper, { Navigation, Pagination } from 'swiper';

import Welcome from './components/welcome';
import Feedback from './components/feedback';
import Wiewed  from './components/viwed';
import DoorsView from './components/doorsview';
import './assets/css/styles.scss';

Welcome(Swiper, Navigation, Pagination);
Feedback(Swiper, Navigation, Pagination);
DoorsView(Swiper, Navigation, Pagination);
Wiewed();
