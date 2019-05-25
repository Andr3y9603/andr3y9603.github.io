importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3c4aba3cf6ae4d075bf6.js",
    "revision": "87424bf7c7fed5f7df9524d7f59645c5"
  },
  {
    "url": "/_nuxt/7de63c30e731f9dda755.js",
    "revision": "bdb874bf3b29dfb43685e9aee0b03535"
  },
  {
    "url": "/_nuxt/9ad23ac635becab4aca0.js",
    "revision": "4a9cb7520d93bd447a8dae54df249488"
  },
  {
    "url": "/_nuxt/ca1a6bc0d53d3f408c0d.js",
    "revision": "f22fcbd31f171e4ff29a6002a37054c7"
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
