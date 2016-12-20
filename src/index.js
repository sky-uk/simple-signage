import App from './app';
import routes from './routes';
import { Layout } from './containers';

export const reducers = {
  title: state => state,

  // TODO: this is incorrectand needs reimplementing.
  config: (state = initialState, action) => {
    switch (action.type) {
      console.log(type);
      case 'actions/SET_CONFIG':
        return {
          ...state,
          config: action.config
        }
      default:
        return state
    }
  }
};

export const initialState = {
  title: 'simple-signage',
  config: '{"foo": "bar"}'
};

App({
  reducers,
  initialState,
  Layout,
  routes
}).render();
