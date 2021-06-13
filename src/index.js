import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
import store from './store';
import { Provider } from 'react-redux';
import Cookies from 'universal-cookie';
import { SET_CURRENT_USER } from './actions/authAction';
import { setAuthorizationToken } from './helper';

const cookies = new Cookies()

const token = cookies.get('token')

const configureStore = store()
if (token) {
  setAuthorizationToken(token);
  configureStore.dispatch({
    type: SET_CURRENT_USER
  });
}
ReactDOM.render(
  <Provider store={configureStore} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
