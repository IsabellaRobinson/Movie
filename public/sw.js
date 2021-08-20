// Skal bruges når man bruger Chrome, da den cacher meget agrassivt.
const CACHE_NAME = "movieDB"; 
var urlsToCache = [
    "/",
    "/css/style.css",
];

self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log("cache opend");
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response
            }
            return fetch(e.request);
        })
    );
});