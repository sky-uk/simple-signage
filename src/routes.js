// import Home from './home';
// import About from './about';
// import GridView from './grid-view'
import { Home, About, Carousel, Parsed, Config } from './containers';

export default [
  { path: '/', title: 'Home', component: Home },
  { path: '/about', title: 'About', component: About },
  { path: '/carousel', title: 'Carousel', component: Carousel },
  { path: '/parsed', title: 'Old Home', component: Parsed },
  { path: '/config', title: 'Config', component: Config }
];
