import { useEffect, useState } from "react";
import { Router } from "@reach/router";

import "./App.css";

import Index from "./view/indexView";
import Movie from "./view/movie";
import displayNotification from "./notification";

import SearchContext from "./store/searchContext";

export default function App() {
	var searchState = useState([]);



// Notification
  useEffect(function() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
  }, []);

  // function displayNotification() {
  //   if (Notification.permission === 'granted') {
  //     navigator.serviceWorker.getRegistration().then(function(reg) {
  //       reg.showNotification('Hello world!', {
  //         vibrate: [100, 50, 100, 75, 25, 25, 50, 250]
  //       });
  //     });
  //   }
  // }

	return (
		// <SearchContext.Provider value={searchState}>
    <SearchContext.Provider value={searchState}>
			<div className="App">
				<Router>
					<Index path="/" />
					<Movie path="/movie/:id" />

				</Router>
        <button className="AppBtn" onClick={() => displayNotification("Hello world!")}>Notify me</button>
			</div>
		</SearchContext.Provider>
	);
}