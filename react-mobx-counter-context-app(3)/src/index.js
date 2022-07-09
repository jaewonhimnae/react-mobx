import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterStore from './store';
import { CounterProvider } from './context/counterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 인스턴스 생성
const store = new counterStore();

root.render(
  <React.StrictMode>
    <CounterProvider value={store}>
      <App />
    </CounterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
