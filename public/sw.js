// Skal bruges når man bruger Chrome, da den cacher meget agrassivt.
const CACHE_NAME = "movieDB"; 
var urlsToCache = [
    "/",
    "/css/style.css",
    "/sounds/mlg-air-horn.mp3"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log("cache opend");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response
            }
            return fetch(event.request);
        })
    );
});