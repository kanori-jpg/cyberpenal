'use strict';
/* Cyberpénal hors connexion (version GitHub seulement).
   - La page : la version en ligne si le réseau répond vite, sinon celle gardée sur l'appareil.
   - Les fichiers numérotés ?v= (site.js, site.css, icônes) : gardés une fois pour toutes, renouvelés quand le numéro change.
   - Les polices et la bibliothèque PDF : la copie tout de suite, mise à jour en arrière-plan.
   - GitHub (synchronisation) et tout le reste : jamais interceptés. */
const COQUILLE = 'cyberpenal-coquille', EXTERNES = 'cyberpenal-externes';
const RACINE = new URL('./', self.registration.scope).href;

self.addEventListener('install', (e) => { e.waitUntil(majCoquille().catch(() => {}).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });

function fichiersDe(html) {
  const urls = new Set([RACINE, new URL('manifest.webmanifest', RACINE).href, new URL('icons/icon-192.png', RACINE).href, new URL('icons/icon-512.png', RACINE).href]);
  for (const m of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) urls.add(new URL(m[1], RACINE).href);
  return urls;
}
async function majCoquille(reponseHtml) {
  const rep = reponseHtml || await fetch(RACINE, { cache: 'no-store' });
  if (!rep.ok) return;
  const html = await rep.clone().text();
  const cache = await caches.open(COQUILLE);
  await cache.put(RACINE, rep);
  const voulus = fichiersDe(html), deja = new Set((await cache.keys()).map((r) => r.url));
  await Promise.all([...voulus].filter((u) => !deja.has(u)).map((u) => fetch(u, { cache: 'no-store' }).then((r) => (r.ok ? cache.put(u, r) : null)).catch(() => null)));
  for (const req of await cache.keys()) if (!voulus.has(req.url)) await cache.delete(req);
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin && url.href.startsWith(RACINE)) {
    if (req.mode === 'navigate') return e.respondWith(page(e));
    return e.respondWith(fichier(req));
  }
  if (/^fonts\.(googleapis|gstatic)\.com$/.test(url.hostname) || url.hostname === 'cdnjs.cloudflare.com') return e.respondWith(externe(e));
});

async function page(e) {
  const enLigne = fetch(e.request).then((rep) => { if (rep.ok) e.waitUntil(majCoquille(rep.clone()).catch(() => {})); return rep; });
  const delai = new Promise((ok) => setTimeout(ok, 4000, null));
  try { const rep = await Promise.race([enLigne, delai]); if (rep) return rep; } catch (err) { /* hors connexion */ }
  const copie = await caches.match(RACINE);
  return copie || enLigne;
}
async function fichier(req) {
  const copie = await caches.match(req.url, { cacheName: COQUILLE });
  if (copie) return copie;
  const rep = await fetch(req);
  if (rep.ok) { const c = await caches.open(COQUILLE); c.put(req.url, rep.clone()); }
  return rep;
}
async function externe(e) {
  const cache = await caches.open(EXTERNES), copie = await cache.match(e.request);
  const reseau = fetch(e.request).then((r) => { if (r.ok || r.type === 'opaque') cache.put(e.request, r.clone()); return r; }).catch(() => null);
  if (copie) { e.waitUntil(reseau); return copie; }
  return (await reseau) || Response.error();
}
