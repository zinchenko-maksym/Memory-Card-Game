import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './store';

import * as theme from './config/theme';

ReactDOM.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={rootReducer}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
