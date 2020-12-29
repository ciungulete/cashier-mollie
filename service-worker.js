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
    "revision": "814206abbf6fd36aa1cbf6b5e9dcb7b5"
  },
  {
    "url": "02-subscriptions.html",
    "revision": "380947c3ae9cf40308123c99cd69bf9f"
  },
  {
    "url": "03-trials.html",
    "revision": "bac02fb1fc3807b54774c050561562d9"
  },
  {
    "url": "04-oneoffcharges.html",
    "revision": "e5c552ab5b698fb1161c23fa04ca57b2"
  },
  {
    "url": "05-metered.html",
    "revision": "42ff42d1e0f4e1ae25d1585cdb494720"
  },
  {
    "url": "06-customer.html",
    "revision": "250826e4f897ad761a96604868256b32"
  },
  {
    "url": "07-invoices.html",
    "revision": "80f3843c415a6ecd25f5a4a0b5d839a1"
  },
  {
    "url": "08-events.html",
    "revision": "b92979ab029830f27dbb778cebab3f4d"
  },
  {
    "url": "09-webhook.html",
    "revision": "d1cf334768a71a2404a3cab8b5eb57b9"
  },
  {
    "url": "10-testing.html",
    "revision": "d2e42e4524cb9feb945d95b337676dc9"
  },
  {
    "url": "11-faq.html",
    "revision": "ed888f9a4fba58af4efb82916ee993e6"
  },
  {
    "url": "404.html",
    "revision": "f41b57e7ceb21022871ca7f36d780522"
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
    "url": "assets/js/app.cb1a8297.js",
    "revision": "3328ed82cfcce8db98c5b921755e0954"
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
    "revision": "5ede807ba43c6b057bc8e2c5698e391e"
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
