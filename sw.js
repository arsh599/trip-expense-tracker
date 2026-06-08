const CACHE_NAME = 'trip-tracker-v1';
const urlsToCache = [
  '/trip-expense-tracker/',
  '/trip-expense-tracker/index.html',
  '/trip-expense-tracker/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(() => {});
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => {});
    })
  );
});
