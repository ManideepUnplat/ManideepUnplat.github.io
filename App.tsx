import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { light, dark } from '@foundation-base/theme';

import { store } from './src/redux/store';
import { Provider } from 'react-redux';

import Main from './src/pages/Main';

import './styles/output.css';

const App: React.FC = (props) => {
  const [theme, setConfig] = useState<any>(dark);

  return theme ? (
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
          <ThemeProvider theme={theme}>
              <Main/>
          </ThemeProvider>
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  ) : null;
};

export default App;
