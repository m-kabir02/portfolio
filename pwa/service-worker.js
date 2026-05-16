const CACHE_NAME = 'scribepulse-flashcard-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './app.js',
  './data.json',
  './manifest.json',
  './logo.png',
  './AS.jpg',
  './brady.jpg',
  './SOB.jpg',
  './GERD.jpg',
  './HTN.avif',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/dist/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Pre-Caching system media layouts asset arrays completed successfully.');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});