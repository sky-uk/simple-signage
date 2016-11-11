// import Home from './home';
// import About from './about';
// import GridView from './grid-view'
import { Home, About, Carousel, Parsed } from './containers';

export default [
  { path: '/', title: 'Parsed', component: Parsed },
  { path: '/about', title: 'About', component: About },
  { path: '/carousel', title: 'Carousel', component: Carousel },
  { path: '/parsed', title: 'Old Home', component: Home }
];
