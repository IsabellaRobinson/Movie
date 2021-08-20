import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if("serviceWorker" in navigator){
  window.addEventListener("load", function(){
      navigator.serviceWorker.register("/sw.js").then(function(registration) {
          console.log("SW registered successfully");
      }, function(error){
          console.log("Something went wrong", error);
      });
  });
}