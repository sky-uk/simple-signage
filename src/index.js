import App from './app';
import routes from './routes';
import { Layout } from './containers';

export const reducers = {
  title: state => state,
  config: (state = initialState, action) => {
    switch (action.type) {
      case 'actions/SET_CONFIG':
        return action.config
      default:
        return state
    }
  }
};

export const initialState = {
  title: 'simple-signage',
  config: '{"restart": "true"}'
};

App({
  reducers,
  initialState,
  Layout,
  routes
}).render();
