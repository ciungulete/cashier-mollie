/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01-instalation.html",
    "revision": "d50ad37dfe3877a509b1488a082918e1"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "2fbc8e593f340cef644abf00603d59d3"
  },
  {
    "url": "03-trials.html",
    "revision": "f55cc29b999cf12cb61c311a506df60c"
  },
  {
    "url": "04-charges.html",
    "revision": "0876ae6491ae6bd5491cdc6a6f26b72b"
  },
  {
    "url": "05-metered.html",
    "revision": "f8d41efac7ff020dd1f51b8d150c3e1a"
  },
  {
    "url": "06-customer.html",
    "revision": "f4f07a5f1a6ae8acc6d67cf7ea0c7656"
  },
  {
    "url": "07-invoices.html",
    "revision": "ea480e4d3621f811ed9c4a649ab540fe"
  },
  {
    "url": "08-events.html",
    "revision": "5c7508d0bc787ebcbe9bba79a7bf8587"
  },
  {
    "url": "09-webhook.html",
    "revision": "1db844f9c4a4dfd3d88d8e2b7b1c8a25"
  },
  {
    "url": "10-testing.html",
    "revision": "08e63ba76204e424f496ce27d43e78fd"
  },
  {
    "url": "11-faq.html",
    "revision": "c1529d23c019389a525573ab81602ea1"
  },
  {
    "url": "12-upgrade.html",
    "revision": "cecb7f8d989507ce379823b77527b459"
  },
  {
    "url": "404.html",
    "revision": "f55d308dd1e1bc046af7015e07b883b3"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "7f1890f254594de8c4b514dee90ed629"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "bc31b03048d4a3ba4fe82ce2389b0b38"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "19f3e3722c9d450ecfa73e8a92aaa47a"
  },
  {
    "url": "assets/css/0.styles.85d7d458.css",
    "revision": "0b584f1c5c2d60efb337517871c01dbb"
  },
  {
    "url": "assets/img/cashier-mollie.svg",
    "revision": "06f0ab467b31062098cffb5ff5d18bc6"
  },
  {
    "url": "assets/img/laravelcashiermollie.a7bde0e4.jpg",
    "revision": "a7bde0e4173f90acd2d72e0eb69d2764"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c367706.js",
    "revision": "dea163f1fe74324aa94279fcb1166996"
  },
  {
    "url": "assets/js/11.06d05664.js",
    "revision": "8391d618e495df214600643dd0ebb2de"
  },
  {
    "url": "assets/js/12.2e7ca3c4.js",
    "revision": "9e634db5b4e22aebb8d51b44dfa7a7f0"
  },
  {
    "url": "assets/js/13.ed9f3ad0.js",
    "revision": "e940647fa4e05bfc5f7e69944de1da62"
  },
  {
    "url": "assets/js/14.19d1c1de.js",
    "revision": "8df951404cef71792774448a31f0090c"
  },
  {
    "url": "assets/js/15.3a0c6e8f.js",
    "revision": "c838b5d84703ddb0779c8a572d3c1d6e"
  },
  {
    "url": "assets/js/16.a3247daf.js",
    "revision": "a326bd57b1ae7454b9039c7b0ecbced5"
  },
  {
    "url": "assets/js/17.b7f0fb7f.js",
    "revision": "493a9ba9d7352857ae887e32a208e035"
  },
  {
    "url": "assets/js/18.c4988b2a.js",
    "revision": "1daf3b3cbdd4b0b43d1e6ca08e2b4d8f"
  },
  {
    "url": "assets/js/19.d790ad54.js",
    "revision": "b55a12a462e345ac5bd5f579aa2dfb20"
  },
  {
    "url": "assets/js/2.f1cc6911.js",
    "revision": "88282339e72c995bc76beb8508e6f118"
  },
  {
    "url": "assets/js/20.21cd8978.js",
    "revision": "bee5df0b3442a3974c6fb8ed7281f77c"
  },
  {
    "url": "assets/js/21.e63c44b2.js",
    "revision": "c9908ca71571534cbb08368d9df9ae52"
  },
  {
    "url": "assets/js/3.c5a105dd.js",
    "revision": "139acdd724e1d3f513fda356e264aa37"
  },
  {
    "url": "assets/js/4.fca2665f.js",
    "revision": "729314fd59377e398bfff26408c47788"
  },
  {
    "url": "assets/js/5.36aa556b.js",
    "revision": "ed71e08eaf6d4e58a483f665d157a3ff"
  },
  {
    "url": "assets/js/6.dd96bc00.js",
    "revision": "9197d34108e50ae9ab8868b1f4b4af81"
  },
  {
    "url": "assets/js/7.fe3fef82.js",
    "revision": "a5be685c707c6a8733fb586ff2b760af"
  },
  {
    "url": "assets/js/8.ebb547cf.js",
    "revision": "279ed4f6b7584996c8380b1af4cf23b7"
  },
  {
    "url": "assets/js/9.681b0260.js",
    "revision": "390b77f51277478e73f6a51c99b7e76a"
  },
  {
    "url": "assets/js/app.bded2464.js",
    "revision": "a0ccbd52c3ee2e2e83fb9029faa9a8c4"
  },
  {
    "url": "assets/pages/laravelcashiermollie.jpg",
    "revision": "a7bde0e4173f90acd2d72e0eb69d2764"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "e8cead60a31ba0059df44368227bba35"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2f21759d559a5e952851228adbb628ec"
  },
  {
    "url": "index.html",
    "revision": "8baf1469e5927e84031b0dc1f4baeabb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
