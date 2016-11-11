import App from './app';
import routes from './routes';
import { Layout } from './containers';

export const reducers = {
  title: state => state
};

export const initialState = {
  title: 'neo-test'
};

App({
  reducers,
  initialState,
  Layout,
  routes
}).render();
