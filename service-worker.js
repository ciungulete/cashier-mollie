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
    "revision": "c1f8b3099872de2400a9c504f782f763"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "e1585ea3009c5d3fb8b131d8a550efc5"
  },
  {
    "url": "03-trials.html",
    "revision": "21e13cc78e2b29a0cfb9359d33ec6ad0"
  },
  {
    "url": "04-charges.html",
    "revision": "9c79aa164fd05452f116c744e7df0b63"
  },
  {
    "url": "05-metered.html",
    "revision": "147597e5d33a220b66c30bf54fd5c283"
  },
  {
    "url": "06-customer.html",
    "revision": "7ba803076126a22049bf5da46f63136d"
  },
  {
    "url": "07-invoices.html",
    "revision": "71a15118667e31a7604d9fbf3ca4a832"
  },
  {
    "url": "08-events.html",
    "revision": "931d38aa4b6a7fb2186e4130605de7e5"
  },
  {
    "url": "09-webhook.html",
    "revision": "403e66b05784dce8e55bba967b9dad6b"
  },
  {
    "url": "10-testing.html",
    "revision": "fed8e27ef9b83f75ff5873d01e54879f"
  },
  {
    "url": "11-faq.html",
    "revision": "1dc377b7cf8959087815b809002516b3"
  },
  {
    "url": "12-upgrade.html",
    "revision": "1bc2c76dfc2e7d907f83d1f2bb452886"
  },
  {
    "url": "404.html",
    "revision": "6e8216331d431b614dd3f00cf0c72eb6"
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
    "url": "assets/js/11.5377cf68.js",
    "revision": "a24b73817591319818f9c27d5c030b98"
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
    "url": "assets/js/app.bea7df8d.js",
    "revision": "0ca27c8bfb9ae0f40c2981a510c9586e"
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
    "revision": "29e2ede2d73a6ccd0a0bf88d6bb8c6c0"
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
