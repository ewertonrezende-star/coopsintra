// Service Worker simples para o Mapa Stock Coopsintra
const CACHE_NAME = "mapa-stock-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// Instalação – guarda os ficheiros principais
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(() => {
        // Se algum ficheiro falhar, continua na mesma
        console.log("Alguns assets não foram cacheados");
      });
    })
  );
  self.skipWaiting();
});

// Ativação – limpa caches antigos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Estratégia: Network first, fallback para cache
self.addEventListener("fetch", (event) => {
  // Não cacheia pedidos ao Supabase ou CDNs externas
  if (
    event.request.url.includes("supabase") ||
    event.request.url.includes("cdn.") ||
    event.request.url.includes("sheetjs")
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Guarda uma cópia no cache se for válida
        if (response && response.status === 200 && response.type === "basic") {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Se estiver offline, tenta o cache
        return caches.match(event.request).then((cached) => {
          return cached || caches.match("./index.html");
        });
      })
  );
});
