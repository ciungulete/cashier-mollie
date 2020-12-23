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
    "revision": "ec5b964b460248046812eba087c46aca"
  },
  {
    "url": "02-usage.html",
    "revision": "041b4e479b0037bdcad6ca28e2f5f8ac"
  },
  {
    "url": "03-events.html",
    "revision": "1e2719a4f665febae2a60829d5c90723"
  },
  {
    "url": "04-metered.html",
    "revision": "414765ed1aaf7fea5dab56e22959dd51"
  },
  {
    "url": "05-faq.html",
    "revision": "7ad3a84631a244fe40e7459b5455046e"
  },
  {
    "url": "06-testing.html",
    "revision": "8362290ea9f8a5094f65ae32be39efe6"
  },
  {
    "url": "404.html",
    "revision": "21b01d7b7aa47a9b1f721c22043ba020"
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
    "revision": "e94a7ab54c258ee8b9fa131d2233cab8"
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
    "url": "assets/favicons/mstile-150x150.png",
    "revision": "19f3e3722c9d450ecfa73e8a92aaa47a"
  },
  {
    "url": "assets/favicons/safari-pinned-tab.svg",
    "revision": "06f0ab467b31062098cffb5ff5d18bc6"
  },
  {
    "url": "assets/img/laravelcashiermollie.533e9ba9.png",
    "revision": "533e9ba96109d8f865943bf402f90083"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2aabd776.js",
    "revision": "ef432e105672631c3e838f3ca07ff4c1"
  },
  {
    "url": "assets/js/11.5e00374a.js",
    "revision": "b23d01748e66180433419ad97fa3fda5"
  },
  {
    "url": "assets/js/12.1497dbe5.js",
    "revision": "63e5b5fc833d70538aaa1fdfe550af17"
  },
  {
    "url": "assets/js/13.3d2748f5.js",
    "revision": "18dc06f5674813d87f0b1635fad5fe8a"
  },
  {
    "url": "assets/js/14.9a969541.js",
    "revision": "63f2d0653194d15e00e1bf314ffd00db"
  },
  {
    "url": "assets/js/15.3fc088c7.js",
    "revision": "467fff3aa1829f125d1265088b708072"
  },
  {
    "url": "assets/js/2.111e1301.js",
    "revision": "9ec8d93234873251e708f0de537fb390"
  },
  {
    "url": "assets/js/3.a57d0152.js",
    "revision": "a7e5a6a75c56008d837387fd5fce4b99"
  },
  {
    "url": "assets/js/4.88013e85.js",
    "revision": "fce8f473efe7176577de725a552ef15c"
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
    "url": "assets/js/7.92e639ca.js",
    "revision": "de38855facc006ccde1f5ce1f0f89234"
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
    "url": "assets/js/app.c43195d9.js",
    "revision": "911600eea9c8fd03c8d5e0ba76c14e41"
  },
  {
    "url": "assets/pages/laravelcashiermollie.png",
    "revision": "533e9ba96109d8f865943bf402f90083"
  },
  {
    "url": "favicon.svg",
    "revision": "06f0ab467b31062098cffb5ff5d18bc6"
  },
  {
    "url": "index.html",
    "revision": "2d7d99883c36db6611a9c12e2877f9e2"
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
