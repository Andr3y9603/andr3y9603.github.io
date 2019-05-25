importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3c4aba3cf6ae4d075bf6.js",
    "revision": "87424bf7c7fed5f7df9524d7f59645c5"
  },
  {
    "url": "/_nuxt/754793fcdbe46dc180d0.js",
    "revision": "aaf4a2c863528b8fca5f378f4c0e7682"
  },
  {
    "url": "/_nuxt/95d94ce8a8aa71ae9f1d.js",
    "revision": "041ebf24c67aede2856f1088b13907e1"
  },
  {
    "url": "/_nuxt/96852719ae270c040d96.js",
    "revision": "cf6ff6d1bd821280ffa552d8be753792"
  }
], {
  "cacheId": "portofoliu",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
