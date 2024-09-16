const cacheName = 'barcode-app-v1';
const appShellFiles = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  'https://serratus.github.io/quaggaJS/dist/quagga.min.js',
  'https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.add​⬤