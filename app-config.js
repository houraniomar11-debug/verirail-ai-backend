// Public configuration only. Never put an API key here.
(() => {
  const staticSpace = /(?:^|\.)hf\.space$/i.test(window.location.hostname);
  const http = ['http:', 'https:'].includes(window.location.protocol);
  window.VERIRAIL_CONFIG = { apiBase: !staticSpace && http ? window.location.origin : '' };
})();
// For a separate frontend/backend deployment, set the public apiBase to the
// backend HTTPS origin, or use the Static Space's VERIRAIL_API_BASE variable.
