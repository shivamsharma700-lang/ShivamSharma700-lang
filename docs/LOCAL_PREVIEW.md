# Run Vocal locally on your desktop

The fastest way to see the working Vocal website is the dependency-free preview. It does **not** need Maven, npm, MySQL, Redis, Docker, or API keys.

## Windows

1. Install Python 3 if it is not already installed.
2. Open Command Prompt or PowerShell in the project folder.
3. Run:

```bat
scripts\start-preview.bat
```

4. Your browser should open automatically at `http://localhost:4173`.

## macOS / Linux

1. Open Terminal in the project folder.
2. Run:

```bash
./scripts/start-preview.sh
```

3. Your browser should open automatically at `http://localhost:4173`.

## Manual fallback

If the scripts do not open the browser automatically, run:

```bash
cd frontend/preview
python3 -m http.server 4173
```

Then manually open `http://localhost:4173` in Chrome, Edge, Safari, or Firefox.

## What you can review

- Sticky navbar and desktop mega menu.
- Mobile drawer menu.
- Home hero and premium Vocal brand styling.
- Trending collections and shop product grids.
- Product detail gallery with size/color choices.
- Cart summary with tax/shipping totals.
- Checkout payment-method UI.
- Admin dashboard preview.
- About and footer sections.

## Full React/Spring Boot app

The full app is configured for Docker and CI, but it requires package/dependency registry access:

```bash
docker compose up --build
```

Then open:

- Storefront: `http://localhost:8081`
- Backend API: `http://localhost:8080`
- Swagger: `http://localhost:8080/swagger-ui/index.html`

If `npm install` or Maven dependency resolution fails with HTTP 403, use the dependency-free preview above until registry access is available.
