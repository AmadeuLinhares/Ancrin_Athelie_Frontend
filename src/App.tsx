import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';

import ToastGroup from './hooks/index';

const App: React.FC = () => (
  <>
    <ToastGroup>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </ToastGroup>
  </>
);

export default App;
