// import Home from './home';
// import About from './about';
// import GridView from './grid-view'
import { Home, Parsed, Config } from './containers';

export default [
  { path: '/', title: 'Home', component: Home },
  { path: '/parsed', title: 'Start', component: Parsed },
  { path: '/config', title: 'Config', component: Config }
];
