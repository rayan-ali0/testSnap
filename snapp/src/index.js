import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { hydrate ,render} from 'react-dom';

// const { hydrate, render } = ReactDOM;

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);


// const app = (
//     <App />
// );

if (rootElement.hasChildNodes()) {
  root.hydrate(<App />);
} else {
  root.render(<App />);
}
// ReactDOM.render(<App />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
