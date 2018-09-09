import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/reactotron';
import store from './store';

import './config/toast';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

import './styles/global';

const App = () => (
  <Fragment>
    <ToastContainer />
    <Provider store={store}>
      <Routes />
    </Provider>
  </Fragment>
);

export default App;
