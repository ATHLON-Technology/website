'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1290dcb0d9285ab589284e922f75c572",
"assets/AssetManifest.bin.json": "1c63ae63e11282380fdb7d2ae4ccf2f4",
"assets/AssetManifest.json": "47cce7d43e679f227ed6c3a9bbefd53b",
"assets/assets/fonts/InterTight-Black.ttf": "6c9e974eef4d6d7988dca4616cd79d48",
"assets/assets/fonts/InterTight-Bold.ttf": "d992d45d0373e33b3d75e471af494b7b",
"assets/assets/fonts/InterTight-ExtraBold.ttf": "2b9ea8f49ca23242e25172a4fd06f995",
"assets/assets/fonts/InterTight-ExtraLight.ttf": "f8f2e25a6c86927cfc3bf7e3c71706e1",
"assets/assets/fonts/InterTight-Light.ttf": "a838133e540468c71092d9a071f5e7c8",
"assets/assets/fonts/InterTight-Medium.ttf": "b4ab32bca9dae366fa7193b1b7bb1b4c",
"assets/assets/fonts/InterTight-Regular.ttf": "6c7bcaa885b5c58fe97d7f025e26bd30",
"assets/assets/fonts/InterTight-SemiBold.ttf": "701cf433d42ef71e28080e88d58354e1",
"assets/assets/fonts/InterTight-Thin.ttf": "0d30450031845dab0d691219ece4ee2f",
"assets/assets/fonts/MontserratAlt1-Bold.ttf": "4571c7793d017d574972bcdf28fbe154",
"assets/assets/images/1.jpg": "a94b0c3e309866dad0fbb0d8e1229e45",
"assets/assets/images/bolt.png": "6e5e0cf33acb931ab671167cb3ce70fa",
"assets/assets/images/feature1.jpeg": "85be0a3b91fc46b56d3f1216d4db0c40",
"assets/assets/images/feature2.png": "7e31ea652384d9151794d278b9c18a33",
"assets/assets/images/feature3.jpg": "5f9d5c9fb29852a380950881ab3bd58a",
"assets/assets/images/feature4.gif": "b27edea641497270442088f4a1705588",
"assets/assets/images/heart.png": "18cba2da4744f6288af1a7ea8c3579e2",
"assets/assets/images/linkedin.png": "a0dd1deba35a399989c76f3cf8f5e4d8",
"assets/assets/images/spot1.png": "65712ee12ed34a55cba51d02f7d35ca5",
"assets/assets/images/spot2.png": "54adab376225dfe05db0f4d8b2b728d6",
"assets/assets/images/spot3.png": "cf4c99413573960ded75be9ad5bca509",
"assets/assets/images/spot4.png": "29fb6cb3871a1b8a6964027c8552a431",
"assets/assets/images/star.png": "84f47827bff9b6d8ca7e2fc20a6ebeee",
"assets/assets/images/step1.jpg": "5630a23fb496d28e045b659a8ccf0957",
"assets/assets/images/step2.jpg": "eac9c2e85d9bd4a522c9feead03ae2a0",
"assets/assets/images/step3.jpg": "6d5276da923f4848cd94f0c871392966",
"assets/assets/images/web.png": "6eb8a5d1590a761fe87068d68eeda4b8",
"assets/assets/videos/1.mp4": "a559fe806561926ac7e97e660f3ef36d",
"assets/assets/videos/2.mp4": "abf16c0098b07606764294110b703498",
"assets/assets/videos/3.mp4": "b0cf5f3b27106e9d4b3ccd43522dd0a8",
"assets/FontManifest.json": "1910f0f0b7d27028df0443a5168fc6ad",
"assets/fonts/MaterialIcons-Regular.otf": "edb2df426012538b693cce7f52ef4e2d",
"assets/NOTICES": "4eace067bb051b37f715f1def84bb611",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "511a2cef291603c248766be21dbfe88f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "10890be50af2219e2c0fe8799db168be",
"icons/Icon-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"icons/Icon-maskable-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-maskable-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"index.html": "be38d39617b18e84460db4aa3f74a90a",
"/": "be38d39617b18e84460db4aa3f74a90a",
"main.dart.js": "3ee4305441c9d0b5505cd4f5d14078b4",
"manifest.json": "d71dca02dde351808f649c00d1745a14",
"version.json": "f610633f80cc20001dfbfdc7e6c8e90a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
