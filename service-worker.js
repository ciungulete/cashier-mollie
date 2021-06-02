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
    "revision": "60020fc69e94f2b9621e8d87eaec4b5a"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "196756214247eb3f6f8f0abde29d4934"
  },
  {
    "url": "03-trials.html",
    "revision": "158ebff16d5237ba5c1e02d3fdd8b5b6"
  },
  {
    "url": "04-charges.html",
    "revision": "cb2ef696e2995299803ae9a12ba12c89"
  },
  {
    "url": "05-metered.html",
    "revision": "995ac32b5c7e5e4deae7e6c95d80ce03"
  },
  {
    "url": "06-customer.html",
    "revision": "cf5b8d0d73ed7c06e4b35b5a03386a09"
  },
  {
    "url": "07-invoices.html",
    "revision": "bf27ee401593098dd3ea3efda2aa7160"
  },
  {
    "url": "08-events.html",
    "revision": "012c83ad643f08561c8205095c4f6745"
  },
  {
    "url": "09-webhook.html",
    "revision": "95aa1d74850c2e8c022baa7238c4a245"
  },
  {
    "url": "10-testing.html",
    "revision": "d494f0e2eb1646a0bf67878192c57f53"
  },
  {
    "url": "11-faq.html",
    "revision": "d4c35f16610d6b955e91a80c2f2c698d"
  },
  {
    "url": "12-upgrade.html",
    "revision": "c8429f8116e5f56d5ba7c6a61f800c0d"
  },
  {
    "url": "404.html",
    "revision": "a7db1c65031a22e2a528c0ed0ab37423"
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
    "url": "assets/js/12.70fce8e2.js",
    "revision": "c279776153b2f4641813c2344dfb53b3"
  },
  {
    "url": "assets/js/13.e7f9933f.js",
    "revision": "617256ac0c26d8f72d07f49aaae13a02"
  },
  {
    "url": "assets/js/14.de1adec5.js",
    "revision": "6fe226c53301f3fb28e533fb8a23226b"
  },
  {
    "url": "assets/js/15.7fc8ec73.js",
    "revision": "04692d66b3868b27c6048b2b8169217a"
  },
  {
    "url": "assets/js/16.7ea19247.js",
    "revision": "609e865e6915434ff3cc809f1c00e241"
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
    "url": "assets/js/20.59f1b1ec.js",
    "revision": "2fe6d120369dfde9f088c8d0c13acbf5"
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
    "url": "assets/js/7.0ac957aa.js",
    "revision": "bf10bc92eb22788573cd1a3ab64c8160"
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
    "url": "assets/js/app.7e99dab6.js",
    "revision": "968c4a38c33c36bc38869009635a1864"
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
    "revision": "73706ef652fbab00db1d512d2e7933fb"
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
