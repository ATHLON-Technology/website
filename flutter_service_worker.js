'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "f5fc7217e3f31039307409e76e34c87e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9616e7cc4af6a169b425041bd3e0e98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "668a5de8dfa22c52aa3568fadbd3ff5d",
".git/logs/refs/heads/main": "668a5de8dfa22c52aa3568fadbd3ff5d",
".git/objects/00/5949db93ea082d95f5dcdac38fdcb4c441e521": "c40618876f5d4506beded80a778c2fe8",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0c/f5bf18bedcf35e9f481122a002b1c510eb6542": "23fa72b6d11fb8568f59d3eda4af1413",
".git/objects/0f/f7521b9b84bac13ecb4fa2a08145803275d604": "9d6694e4353e195150e7b020931cdd7b",
".git/objects/10/20392a9335bbe624609ab2ab5f9d6c84a9fc25": "a84861b73bf005b23a015a0bef09b2a3",
".git/objects/14/f9358f0ab4f95bf0b85f603aa1b45494aad56a": "2a394503cb46cc0ef2559b37735a25e8",
".git/objects/15/7ddbe60c4063049927a411256320106db8f9c6": "30b896c15789c3c1e203971c74102b3e",
".git/objects/1f/8eb6eb00cc469bbbaa75763a750db0c01ce842": "eb67420380fb745e6833e51cfab7062e",
".git/objects/22/5aef77d3725e40ad4f3ab5ad00f6401054e39e": "e43932251c019638b9e0113852019bf4",
".git/objects/23/84067efcf4a81270f2bd94ecd3718142af77fb": "464f404281ed7cb35f5e1ced3cd32f6e",
".git/objects/23/ed02bb521804c6ab1ce26f2d64f02403b66684": "16c4511c872382c5485e262d6e36863d",
".git/objects/26/141d58ec7a6b18c04fd054a7e3f414383ddf87": "40b8c5ab7316cba9cd9261a76cf6e4ec",
".git/objects/2b/7af24ac5ee2206567c162ef071b32cd127670c": "dbcd9866816842c36383d00fe44a856f",
".git/objects/2e/e62bcaaa619bfc3337f378b883430d9b7cb29f": "85ddb08e9e1840f7c763367b9024eac8",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/07e48a9a4597aac0a8389ca0039dacbc73eb54": "4036d7b9e02fe01d3f8db93bc0b84c1f",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/7cadf3ac3698a5634f6fded2d73c7299fe59ff": "f80abb69f8533c3d19c11740ecf3a5c7",
".git/objects/37/a128b70608d0779f6e1e284667e74c38c5135f": "ce72f387601184c921118b513501ea91",
".git/objects/37/acd168ca54193a3646876a509c7bd93b4f057f": "2cff418f73651d896ea68d59a14ac3ba",
".git/objects/38/e48421e729e33c277b9760d59b4c3b431b2663": "e48541124b91177b104c308189bfe83e",
".git/objects/3b/e7d6f3ecf5ea01d0eca07768d9fffbca3b16fc": "8d0b4d370b00ae869819d8d628acd337",
".git/objects/3f/de525d78e1ea05508fb6f441de69fa85fb7b9c": "a6f016aea63bde475e61d5809b752cf2",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/0c785ab6e22fa0ba8e037825bd4592c1902f94": "45f40a3b7e85035924dfcacb867dfd67",
".git/objects/45/1a2b6ae26360557b72fa567417c99680447ea3": "f6cb5d61a499e4adacaa7549c85ebf3b",
".git/objects/4d/6232dfdd5dcdf722a29c73af0587232ee60583": "4ce231623d215b1ad46c67e7d8f8684c",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/56/d9ca962aa7f745d71cae4162bf5cd5943fa8be": "1d3f3f4f62dacc988a5d027f76260fd3",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/0fe7f354e5d3bdd41371656ee9c16b7045fc5a": "84aeb1c7df24643a16db66fdcc0b35be",
".git/objects/69/0b8ed1e9f89c9cf3f29e92c82786e95410ff52": "a45225fdddb5281d5a4eca11838a1a12",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/7b/2868abd7507f7d9d8c6e731246da0de5256338": "e8193ba24a1a46f285bb7bf307106f24",
".git/objects/7b/71643ff3e685d020656c12ec2faa2d4e9ebee0": "53519830e5fca72626250f75ecc30741",
".git/objects/81/9f147bb38d1503a4339128d9b5906ba5575be2": "4fef4e522f3dfb16f02018c942b39cdf",
".git/objects/82/f1166329a358e80184fed0a9165e8ce9f06c3e": "90dfb53794ef38f438b6e8cec166cf90",
".git/objects/83/9f01d7ac891b4ca8e9f04835483dc25245f32c": "0e673965a6a506d5344c959ed54ee0b9",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/a261eaefb4b4174a5102920b394bb0bc20cd1e": "c5a9de50b2b281c4af494c5432108603",
".git/objects/8c/cc3e74c7a567da6dada2473090b8dd5e9c8b71": "92c7135a6820790b192b5b1c904f7e26",
".git/objects/8d/bffabbb6cb8f54e87490c33cbc5a04273b9955": "53a059327feb70522950be2e529e6661",
".git/objects/8e/4eb52707c3c275346f40d97a8c11479e0eecdf": "7d637c03c69b4946e103c562788f9e0a",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/39e898715872818a2c880c398e8b5bd85ae746": "35ba61e6abe8072a5fc357a1c365b3bf",
".git/objects/95/4764d96c65e45fce89683a98ff9a13bf016004": "43104227f8238e6559a4f59ec8d3a3fe",
".git/objects/9b/d8adedf02e7bf91ed1f913ca338c27a78ae8bc": "4c00a95988ae9bebf0e29c0a20249e8b",
".git/objects/9e/990a16d41abb3450ea2dca91ae0d84cede5e28": "71fd0b83734babc14ab019d903738cf5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/47e22525660971df1235d045dcf7de0566bcc6": "917b1ea727a34bcd151696456e32ca52",
".git/objects/ad/e958603db3259e603c20c2950a1d4ebc9183c5": "48290833f5690ec5ee57506409779c17",
".git/objects/b1/04beecaed161b8b67c4a155554ea6ede657b5e": "41cd6d356fc16c5b4f24f2ae04e212da",
".git/objects/b9/77ab76fc952380850f37f329f0713faa1030a8": "8d42b9aa91b75a9aae30813d3b8470d4",
".git/objects/b9/88a809cb144c33659a037a4cbed5b5772f64f7": "79f5ef311c35a8e735a8dbc6eae82a3c",
".git/objects/be/2b03c7c44c5f6acd32bb3bb583425d7d9affbc": "a7189a718444d5b77e7e40458875d2b8",
".git/objects/c1/0ea032e9b3f942eafdb9a0f8162c6e14ef6316": "afd9d9dca45d51c8ae963ce0d7fda489",
".git/objects/c5/8bae25ab05b1c24060e49258d76c6e1bbb29be": "d7c21f732e787638defb1aad39a35682",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e5/bb21be083796e94b12081b0a81dbd2f169c243": "0e199d4045c0d60a7e51583dd20d21d2",
".git/objects/e7/31422f86ab610313c376e5fe65795b8a62211d": "5be832131139ccbf0465658f45a7978a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/685989142ae7d0302954e66a16232a277cd868": "0164ce8a2ca4963e32633aa29053625f",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/1d933f5714ba6fcaaae341201730f2cb38ebbd": "6a87500516f65a5f86eafcae98d923a6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/028516c9641c1a14d32af1a2d6c24953d45337": "74a7de3aee3986d60631e41376e9f516",
".git/objects/f8/74048240c921ab1fd2c030c3a31f27b67ae2d9": "17e12ac59daafee2bfa429e559458bdd",
".git/objects/f8/8c4abbc210639356b1995e354e0389273f5227": "f49c4fdbc8e3b0c9b56fec0bf725d056",
".git/refs/heads/main": "fbbc01ac6a51fd1b2074e14e799d4afb",
"assets/AssetManifest.bin": "1290dcb0d9285ab589284e922f75c572",
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
"flutter_bootstrap.js": "95e02d5ea3db72448f4ed437acf7bb4f",
"icons/Icon-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"icons/Icon-maskable-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-maskable-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"index.html": "e97469be9bf394b3baa4afe1b96c256a",
"/": "e97469be9bf394b3baa4afe1b96c256a",
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
