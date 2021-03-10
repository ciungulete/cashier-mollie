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
    "revision": "077cb05e2433c34c6ef9b294fe60a6e4"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "bb3baf1285ecd1da47d9c5b013a3b9c2"
  },
  {
    "url": "03-trials.html",
    "revision": "e48ace04f1c8b1d4ea276b39c2d26c86"
  },
  {
    "url": "04-oneoffpayment.html",
    "revision": "941169a374ce724db5b673c9a093ecc5"
  },
  {
    "url": "05-metered.html",
    "revision": "d0e66b2b1897c85f528e5661e41d6f56"
  },
  {
    "url": "06-customer.html",
    "revision": "c7acbc52173df52f8fa8e6137cae2a50"
  },
  {
    "url": "07-invoices.html",
    "revision": "369c2ad26e1bccb13d6cead3eaaae6f6"
  },
  {
    "url": "08-events.html",
    "revision": "24ac56c8a7a00930b6de5e36813a2924"
  },
  {
    "url": "09-webhook.html",
    "revision": "cfcd6e6ce244aafb643ae8412a1e047c"
  },
  {
    "url": "10-testing.html",
    "revision": "458113cce825c5062d1e14df66887211"
  },
  {
    "url": "11-faq.html",
    "revision": "df578c257489e8b609c07f87f02e0a48"
  },
  {
    "url": "404.html",
    "revision": "b31147607eb5b14cfaa7b91dfa6f6f61"
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
    "url": "assets/js/12.060e862b.js",
    "revision": "0484a93e8e387898a0d9dba31a82cbd3"
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
    "url": "assets/js/app.ff6835a0.js",
    "revision": "e1420b6410919f15e29b151d220da6c7"
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
    "revision": "e49d2bd099b0b59fb70caf2499435aa3"
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
