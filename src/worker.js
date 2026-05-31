/**
 * Trishul Aero — static asset worker with hostname routing.
 *
 * Default behaviour: serve the repo root as static assets (the marketing site
 * at trishulaero.com).
 *
 * Override: when the request hostname is `command.trishulaero.com`, the root
 * path is rewritten to `/trishuleye.html` so operators land on the TrishulC2
 * chooser (Fleet Dashboard / Live Operations). All other paths pass through
 * unchanged so the chooser's links into /trishuleye/dashboard.html and
 * /trishuleye/livestream.html resolve normally on the same subdomain.
 *
 * To disable this override, either:
 *   1. Remove the `command.trishulaero.com` custom domain from this worker in
 *      the Cloudflare dashboard (immediate, no code change), or
 *   2. Revert this file and the `main` field in wrangler.jsonc.
 */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === 'command.trishulaero.com') {
      // Land the operator on the TrishulC2 chooser (Fleet / Live Ops).
      if (url.pathname === '/' || url.pathname === '/index.html') {
        const rewritten = new URL(request.url);
        rewritten.pathname = '/trishuleye.html';
        return env.ASSETS.fetch(new Request(rewritten.toString(), request));
      }
    }

    // Default: serve from the static assets directory.
    return env.ASSETS.fetch(request);
  }
};
