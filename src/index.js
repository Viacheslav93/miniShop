import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter } from 'react-router-dom/dist';
import { AppRoutes } from './routes/AppRoutes';

const storeApp = store()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeApp}>
      <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

