import { useState, useEffect  } from "react";
import { Router } from "@reach/router";

import "./App.css";

import Index from "./view/indexView";
import Movie from "./view/movie";
import displayNotification from "./notification";

import { SearchContext } from "./store/searchContext";

export default function App() {
	var searchState = useState([]);

  // var [ value, setValue ] = useState("");
  // var [ db ] = useState({});



// Notification
  useEffect(function() {
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
  }, []);

  // useEffect(() => {
  //   if (!window.indexedDB) {
  //     console.log("brower is now supporting");
  //   }else{
  //     console.log("IndexDB working")
  //     // open database
  //     var request = window.indexedDB.open("movieDB", 3);
  //     request.onerror = function(e) {
  //       console.log("error")
  //       console.log("database error:", e.target.errorCode);
  //     };
  //     request.onsuccess = function(e) {
  //      setDb(e.target.result);
  //     };
  //     request.onopgradeneeded = function(e) {
  //       var database = e.target.result;
  //       var objectStore = database.createObjectStore("movies",{keyPath:"snn", autoIncrement : true})
        
  //       objectStore.createIndex("id", "id", {unique:false});
  //       objectStore.createIndex("point", "point", {unique:false});
  //     }
  //   }
  // },[]);

	return (
    <SearchContext.Provider value={searchState}>
      {/* <SearchContext.Provider value={{searchState, value, setValue, db}}> */}
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

