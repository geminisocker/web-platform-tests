self.addEventListener('fetch', function(event) {
  if (event.request.url.indexOf('dummy.js') != -1) {
    event.respondWith(new Promise(resolve => {
      // Slightly delay the response so we ensure we get a non-zero
      // duration.
      setTimeout(_ => resolve(new Response('// Empty javascript')), 50);
    }));
  }
  else if (event.request.url.indexOf('import-scripts-redirect-worker.js') != -1) {
    event.respondWith(fetch('import-scripts-redirect-import.js'));
  }
  else if (event.request.url.indexOf('missing.png') != -1) {
    event.respondWith(fetch('dummy.txt'));
  }
});
