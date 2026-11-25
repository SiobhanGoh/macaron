/* Offline support: keeps a copy of the app on the phone. Bump VERSION when files change. */
const VERSION="tingkat-v43";
const SHELL=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","i18n/ms.json","i18n/zh-Hans.json","i18n/zh-Hant.json","i18n/ko.json","i18n/ja.json"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;
  const page=r.mode==="navigate"||r.url.endsWith("index.html")||r.url.endsWith("labels.json")||r.url.includes("/i18n/");
  if(page){e.respondWith(fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match("index.html")||Response.error())));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(res=>{if(res.ok||res.type==="opaque"){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res})))});
