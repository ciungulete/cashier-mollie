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
    "revision": "86a3fa29874edcd99e92325092284def"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "a6f5b8dca5c562be8177d230688f43d9"
  },
  {
    "url": "03-trials.html",
    "revision": "45838442c4a6b80510547615b3beb760"
  },
  {
    "url": "04-oneoffcharges.html",
    "revision": "3fb099cca5964785493b6c234b6428d7"
  },
  {
    "url": "05-metered.html",
    "revision": "c21b8843208b47fe2226a11505c5a51a"
  },
  {
    "url": "06-customer.html",
    "revision": "63f9b7c7a0d78c1948405444fba96c8c"
  },
  {
    "url": "07-invoices.html",
    "revision": "4ad8e41bd80e82979bfcc47ea5888b69"
  },
  {
    "url": "08-events.html",
    "revision": "a8a738e7f9b8d9f7166c4d2eff8d0735"
  },
  {
    "url": "09-webhook.html",
    "revision": "77cdd13824f607f8b8192461178bdc60"
  },
  {
    "url": "10-testing.html",
    "revision": "b6d3c70d8cbb86358e89a3fad35330b0"
  },
  {
    "url": "11-faq.html",
    "revision": "e2a3c54cedf4642e54b2c1afcd366ad0"
  },
  {
    "url": "404.html",
    "revision": "39d85fd830908aa1c51baa649838234b"
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
    "url": "assets/js/10.d0dfd006.js",
    "revision": "fa480e2389163134ee8c5eca4448eb4c"
  },
  {
    "url": "assets/js/11.31762be8.js",
    "revision": "907068cc7c5d6c96f30d56a7440a9cf7"
  },
  {
    "url": "assets/js/12.67c2ea5a.js",
    "revision": "a9c51a5a1b2980ec3e131b20050fdb70"
  },
  {
    "url": "assets/js/13.ed9f3ad0.js",
    "revision": "e940647fa4e05bfc5f7e69944de1da62"
  },
  {
    "url": "assets/js/14.e6bc314f.js",
    "revision": "0f06634b85d8dd30cb5485a095cc55de"
  },
  {
    "url": "assets/js/15.2475460a.js",
    "revision": "9fd6964f866850c0bb691b175c6043d8"
  },
  {
    "url": "assets/js/16.45b98ac7.js",
    "revision": "a475f64994ee8ceebed7c1fa3e154bca"
  },
  {
    "url": "assets/js/17.d10157c9.js",
    "revision": "67f2ce4cbd00440a0b15c90a1b255f4b"
  },
  {
    "url": "assets/js/18.2b60d376.js",
    "revision": "79d57202314861e4f7502091f65d4705"
  },
  {
    "url": "assets/js/19.60230e04.js",
    "revision": "de296be602a891482cede3c0ae590113"
  },
  {
    "url": "assets/js/2.f1cc6911.js",
    "revision": "88282339e72c995bc76beb8508e6f118"
  },
  {
    "url": "assets/js/20.80b8ea15.js",
    "revision": "129f66ce7eecc4d4b7702e3ba4adffc4"
  },
  {
    "url": "assets/js/3.c5a105dd.js",
    "revision": "139acdd724e1d3f513fda356e264aa37"
  },
  {
    "url": "assets/js/4.910b7cda.js",
    "revision": "4a0a897c22271badb3bfbd37f20fb443"
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
    "url": "assets/js/9.048f1141.js",
    "revision": "b6b01ba29054a7fbf467ef345420402d"
  },
  {
    "url": "assets/js/app.c35530af.js",
    "revision": "c9b796b84b97b8446378375135d3416c"
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
    "revision": "d25a88d492aa34453072da426a5f2efa"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "7febe89bb4eabf322f38e7bd9cc68327"
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
