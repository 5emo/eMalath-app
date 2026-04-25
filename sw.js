const CACHE_NAME = 'medtrack-cache-v1';
const ASSETS = [
  'login.html',
  'signup.html',
  'care_hub.html',
  'admin.html',
  'hospital.html',
  'staff.html',
  'manifest.json',
  'home.html',
  'Medication.html',
  'profile.html',
  'sos.html',
];

// Install event - caching the app files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch event - serving files from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});