import ReactDOM from 'react-dom/client';
import App from './router'
import { Provider } from 'react-redux';
import { store } from './Store/store';

import "./style/mainStyle.css";
import './style/Layouts.css';
import './style/components.css';
import './style/UserWorkSpace.css';
import './style/shells.css';
import './style/PopUps.css';
import './style/Aside.css';
import React from 'react';





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
