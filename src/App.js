import { useEffect, useState } from "react";
import { Router } from "@reach/router";

import "./App.css";

import Index from "./view/indexView";
import Movie from "./view/movie";
import SearchContext from "./store/searchContext";

export default function App() {
  var searchState = useState([]);

  useEffect(function() {
    Notification.requestPermission(function(status) {
      console.log("Notification premission status:", status);
    });
  },[]);

  function displayNotification() {
    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration().then(function(reg) {
        reg.showNotification('Hello world!',{

          vibrate: [200, 100, 200, 100, 200]
        }
        );
      });
    }
  }


  return (
    <SearchContext.Provider value={searchState}>
      <div className="App">
        <Router>
          <Index path="/" />
          <Movie path="/movie/:id" />
        </Router>
        <button onClick={displayNotification}> Notify me </button>
      </div>
    </SearchContext.Provider>
  );
}

