import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import "@fontsource/open-sans";
import './index.css'
import store from './store';
// import ContextComp from './contexts/GlobalContext';

// with redux
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    
  </Provider>
);

// with context
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ContextComp>
//     <App />
//   </ContextComp>
// );
