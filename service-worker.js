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
    "revision": "238efd53708ac849a64c8ac57dd9c033"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "0d4fed649bb40b4fcf437db66e8cca3c"
  },
  {
    "url": "03-trials.html",
    "revision": "9a342352ae8fd81e4ec610185333d516"
  },
  {
    "url": "04-oneoffcharges.html",
    "revision": "857b74b6fe0598d8c805dce76bc4be9f"
  },
  {
    "url": "05-metered.html",
    "revision": "c340f8698012014057d8f512d43fa885"
  },
  {
    "url": "06-customer.html",
    "revision": "55874e3ce9486b8fa0f81f9c3f8bed32"
  },
  {
    "url": "07-invoices.html",
    "revision": "9a4313469551515f31dfb92b004a50bc"
  },
  {
    "url": "08-events.html",
    "revision": "5de07a55ab715e2ce1caade044d53ed6"
  },
  {
    "url": "09-webhook.html",
    "revision": "234dfd1cbe10434d9b329dc14cd10921"
  },
  {
    "url": "10-testing.html",
    "revision": "14ed8e2200a435d36961e0ed296558d5"
  },
  {
    "url": "11-faq.html",
    "revision": "d8881f06b924ef91aba00b4e33eada1e"
  },
  {
    "url": "404.html",
    "revision": "5f19295b158c98f7a791e4fd69884353"
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
    "url": "assets/js/12.7679b1f8.js",
    "revision": "dbab39d50104f2f258465a140ac49253"
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
    "url": "assets/js/15.3b827652.js",
    "revision": "de79d41ff2ef66e34f23142f93875b71"
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
    "url": "assets/js/app.27442b18.js",
    "revision": "051632c2569c0ed4c4dfd33fdf7cc384"
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
    "revision": "80aa037d320e5a0740ef2ffb5e4147ec"
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
