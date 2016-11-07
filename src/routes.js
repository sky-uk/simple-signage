// import Home from './home';
// import About from './about';
// import GridView from './grid-view'
import { Home, About /*, GridView */ } from './containers'

export default [
  { path: '/', title: 'Home', component: Home },
  { path: '/about', title: 'About', component: About }
  // , { path: '/grid', title: 'Grid', component: GridView }
];
