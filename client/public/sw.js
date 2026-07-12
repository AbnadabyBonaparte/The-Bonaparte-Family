// Minimal, network-first service worker — enables Android "Install app" prompt.
// No aggressive caching: always try the network, fall back to any cached match.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
