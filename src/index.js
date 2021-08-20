import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// serviceWorkerRegistration.register();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
      navigator.serviceWorker.register("/sw.js").then(function(registration) {
          console.log("ServiceWorker registered successfully!");
      }, function(err) {
          console.log("ServiceWorker has failed!", err);
      });
  });
}

