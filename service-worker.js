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
    "revision": "d7791644a7f0d1b61f52722560399ddc"
  },
  {
    "url": "02-usage.html",
    "revision": "9cbbff1b44dca606716534ab6ce65ec0"
  },
  {
    "url": "03-events.html",
    "revision": "eda82d74f114f6d348cf251a334bce59"
  },
  {
    "url": "04-metered.html",
    "revision": "21f97151f1fb3d45ffceaf109b28a45b"
  },
  {
    "url": "05-faq.html",
    "revision": "95695d5fdcdaa3a3b150999c9b278aba"
  },
  {
    "url": "06-testing.html",
    "revision": "75f6fe21398e75ab0946f2ddec491d09"
  },
  {
    "url": "404.html",
    "revision": "317d5d41fca40d6aa35dcc7d00be3f41"
  },
  {
    "url": "assets/css/0.styles.56931ce2.css",
    "revision": "3933dd91f2c3a2fc3ef9c02e12d5369e"
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
    "url": "assets/js/11.d84e8cfd.js",
    "revision": "90e377e22a78072dd909a6d0b08c8659"
  },
  {
    "url": "assets/js/12.4baf2539.js",
    "revision": "d10673dee01b44cab2b824c0e6470da0"
  },
  {
    "url": "assets/js/13.0489c8fc.js",
    "revision": "c1fe59aed2598dc675978c72a2b269ba"
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
    "url": "assets/js/2.6478b97f.js",
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
    "url": "assets/js/app.7be701b0.js",
    "revision": "c955c767c39c9bfe621301b93d07fee6"
  },
  {
    "url": "assets/pages/laravelcashiermollie.png",
    "revision": "533e9ba96109d8f865943bf402f90083"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2f21759d559a5e952851228adbb628ec"
  },
  {
    "url": "index.html",
    "revision": "c483867dd8e0dc4e7abc18be130348d1"
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
