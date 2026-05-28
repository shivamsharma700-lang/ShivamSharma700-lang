# Vocal Website QA Review

## Preview status

A dependency-free preview was added at `frontend/preview/index.html` so the website can be reviewed even when the package registry is blocked. Run it with:

```bash
cd frontend/preview
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Sections reviewed in the preview

- Sticky navbar with Vocal branding, primary links, icons, mobile drawer and desktop mega menu.
- Home hero with premium dark/luxury styling and clear calls to action.
- Trending products and new-season shop grids with product cards, hover states, badges and pricing.
- Feature blocks for fit, flash sale and membership/recommendation surfaces.
- Product detail section with gallery, size selection, color selection and add-to-cart CTA.
- Cart section with line items, totals, tax, shipping and checkout CTA.
- Checkout section with address/payment inputs and security checklist.
- Admin dashboard preview with revenue, orders, users, inventory and management-module copy.
- About and footer sections with original Vocal content.

## Local verification notes

- The static preview is self-contained and can be served without npm or Maven dependencies.
- The React/Vite application still requires dependency installation before `npm run dev` or `npm run build` can execute.
- Backend verification still requires Maven access to download Spring Boot dependencies.
