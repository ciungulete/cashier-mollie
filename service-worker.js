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
    "revision": "8319c51e902b84b6a0f9bc39cfca44b8"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "576445d4b3a8fb06795475778be12094"
  },
  {
    "url": "03-trials.html",
    "revision": "fd938048d8123160251b967c523dfd5f"
  },
  {
    "url": "04-oneoffcharges.html",
    "revision": "4c9e61c94c6a4f38663dbf4a34c07108"
  },
  {
    "url": "05-metered.html",
    "revision": "90e849b554a819102f4090b4e077d76c"
  },
  {
    "url": "06-customer.html",
    "revision": "f06c6ef3ac107240f158bf6f384f966a"
  },
  {
    "url": "07-invoices.html",
    "revision": "dc730e55eab19413c6d2d335e4708f3f"
  },
  {
    "url": "08-events.html",
    "revision": "79baefdaafedc02e172e0f0bcf204c67"
  },
  {
    "url": "09-webhook.html",
    "revision": "64fd2d7ad22a08fac4fc559183fd804f"
  },
  {
    "url": "10-testing.html",
    "revision": "d0195f96c278f0b826303dbd496a6924"
  },
  {
    "url": "11-faq.html",
    "revision": "8db3d4e5421c9475aeef86214f920338"
  },
  {
    "url": "404.html",
    "revision": "848436c61463ea16218e4abd261c7abd"
  },
  {
    "url": "assets/css/0.styles.85d7d458.css",
    "revision": "0b584f1c5c2d60efb337517871c01dbb"
  },
  {
    "url": "assets/favicons/android-chrome-192x192.png",
    "revision": "7f1890f254594de8c4b514dee90ed629"
  },
  {
    "url": "assets/favicons/android-chrome-384x384.png",
    "revision": "bc31b03048d4a3ba4fe82ce2389b0b38"
  },
  {
    "url": "assets/favicons/apple-touch-icon.png",
    "revision": "19f3e3722c9d450ecfa73e8a92aaa47a"
  },
  {
    "url": "assets/favicons/favicon-16x16.png",
    "revision": "e8cead60a31ba0059df44368227bba35"
  },
  {
    "url": "assets/favicons/favicon-32x32.png",
    "revision": "2f21759d559a5e952851228adbb628ec"
  },
  {
    "url": "assets/favicons/favicon.svg",
    "revision": "06f0ab467b31062098cffb5ff5d18bc6"
  },
  {
    "url": "assets/favicons/mstile-150x150.png",
    "revision": "19f3e3722c9d450ecfa73e8a92aaa47a"
  },
  {
    "url": "assets/favicons/safari-pinned-tab.svg",
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
    "url": "assets/js/12.70318d7a.js",
    "revision": "f0ebccc31b4a5d556561003f3796f2bb"
  },
  {
    "url": "assets/js/13.e7f9933f.js",
    "revision": "617256ac0c26d8f72d07f49aaae13a02"
  },
  {
    "url": "assets/js/14.4638779b.js",
    "revision": "e9e15300b9833a0764a61f5ad68c1f9e"
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
    "url": "assets/js/7.441ac488.js",
    "revision": "c926d538c7b3f320131e2c44da4b26da"
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
    "url": "assets/js/app.7d1ce803.js",
    "revision": "38b183ca563d07f24afa03c1c56b8715"
  },
  {
    "url": "assets/pages/laravelcashiermollie.jpg",
    "revision": "a7bde0e4173f90acd2d72e0eb69d2764"
  },
  {
    "url": "favicon.svg",
    "revision": "06f0ab467b31062098cffb5ff5d18bc6"
  },
  {
    "url": "index.html",
    "revision": "36ef4b50a9aeb81c8b8910b89043d83a"
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
