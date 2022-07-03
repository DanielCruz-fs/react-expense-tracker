import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//* This is the first file that is executed
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /**
     * * A COMPONENT RENDERS TWICE (strict mode)
     * It's not a bug. Indeed the very reason they do the extra render is to "catch bugs" in development.
     * (The extra render won't happen in prod.) If the extra render breaks your component,
     * it means your component has a bug (most probably) according to the react team's philosophy
     */
//   <React.StrictMode>
    <App />
//   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
