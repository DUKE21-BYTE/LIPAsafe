# LipaSafe Security Content Security Policy (CSP)

To enhance the security of the LipaSafe application, the following `Content-Security-Policy` header should be applied. This policy helps mitigate Cross-Site Scripting (XSS), data injection attacks, and other code injection vulnerabilities.

### Recommended CSP Header

```http
Content-Security-Policy: default-src 'self'; script-src 'self' https://fonts.googleapis.com; style-src 'self' https://fonts.googleapis.com 'unsafe-inline'; font-src https://fonts.gstatic.com 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; form-action 'self';
```

### Policy Breakdown

- **`default-src 'self'`**: Only allow content from the application's own origin by default.
- **`script-src 'self' https://fonts.googleapis.com`**: Allow scripts from the same origin. (Note: Only internal scripts the developer writes should be used; no external script tags like CDN-hosted libraries are currently present in the core logic, which is good for security).
- **`style-src 'self' https://fonts.googleapis.com 'unsafe-inline'`**: Allow CSS from own origin and Google Fonts. `'unsafe-inline'` is currently required for some micro-animations/dynamic styles applied via JS, but we should aim to move those to CSS classes.
- **`font-src https://fonts.gstatic.com 'self'`**: Allow fonts from Google Fonts and local.
- **`img-src 'self' data:`**: Allow images from same origin and data URIs (useful for icons).
- **`frame-ancestors 'none'`**: Prevent the site from being embedded in iframes (Clickjacking protection).
- **`form-action 'self'`**: Restrict for submission to site's own origin.

### Implementation Checklist

1. [ ] **Meta Tag**: Add the CSP meta tag to the `<head>` of all HTML files (`index.html`, `categories/*.html`).
2. [ ] **XSS Audit**: Review all `innerHTML` usage in `script.js` and category pages. (Current use of `esc()` function is good, but should be strictly enforced).
3. [ ] **HTTPS Only**: Ensure the production environment enforces HTTPS and provides `Strict-Transport-Security` (HSTS).
4. [ ] **No Eval**: Avoid using `eval()` or `new Function()` in any JavaScript.
