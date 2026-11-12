// Offline-Start: Die App selbst wird auf dem Gerät zwischengespeichert.
// Daten laufen nicht hierüber (die liegen verschlüsselt im Browser und bei GitHub).
const CACHE = "kantine-app-v1";
const CORE = [
  "./", "index.html", "config.js", "manifest.webmanifest", "logo.png",
  "vendor/qrcode.js", "vendor/jspdf.umd.min.js",
  "fonts/barlow-latin-400-normal.woff2", "fonts/barlow-latin-500-normal.woff2",
  "fonts/barlow-latin-600-normal.woff2", "fonts/barlow-latin-700-normal.woff2",
  "fonts/barlow-condensed-latin-600-normal.woff2", "fonts/barlow-condensed-latin-700-normal.woff2"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

function withTimeout(p, ms) { return new Promise((res, rej) => { const t = setTimeout(() => rej(new Error("timeout")), ms); p.then(v => { clearTimeout(t); res(v); }, err => { clearTimeout(t); rej(err); }); }); }

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;           // GitHub-API usw. nie abfangen
  const isPage = req.mode === "navigate" || /\/(index\.html|config\.js)$/.test(url.pathname) || url.pathname.endsWith("/");
  if (isPage) {
    // Neueste Version bevorzugen, ohne Netz die gespeicherte
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await withTimeout(fetch(req), 4000);
        if (res && res.ok) cache.put(req.mode === "navigate" ? "index.html" : req, res.clone());
        return res;
      } catch (err) {
        return (await cache.match(req.mode === "navigate" ? "index.html" : req, {ignoreSearch: true})) || (await cache.match("./")) || Response.error();
      }
    })());
    return;
  }
  // Übrige Dateien: sofort aus dem Speicher, im Hintergrund aktualisieren
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, {ignoreSearch: true});
    const net = fetch(req).then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; }).catch(() => null);
    return hit || (await net) || Response.error();
  })());
});
