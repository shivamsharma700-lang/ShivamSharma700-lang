# BlinkMart — Blinkit-like Quick Commerce App

BlinkMart is a production-oriented quick-commerce scaffold inspired by Blinkit. It includes a polished React/Vite storefront, fast grocery discovery, product detail pages, cart, checkout, OTP-style login, admin operations dashboard, JWT-secured Spring Boot APIs, MySQL/Flyway schema, Redis-ready caching and deployment documentation.

## Architecture

```mermaid
flowchart LR
  Web[React + Vite + Tailwind + Framer Motion] --> Nginx[NGINX]
  Nginx --> API[Spring Boot 3 / Java 21]
  API --> MySQL[(MySQL 8)]
  API --> Redis[(Redis Cache)]
  API --> Stripe[Stripe]
  API --> Razorpay[Razorpay]
  API --> Cloudinary[Cloudinary]
  API --> Email[SMTP/OTP Emails]
```

## Monorepo Structure

- `backend/` — Spring Boot REST API with Security, JPA, Flyway, OpenAPI, DTOs and service/repository layering.
- `frontend/` — BlinkMart React storefront/admin UI with reusable components, Axios and responsive Tailwind layouts.
- `docs/` — API, database, deployment and product architecture documents.
- `docker-compose.yml` — local MySQL, Redis, API and web stack.
- `docs/CI_TROUBLESHOOTING.md` — frontend CI install/build troubleshooting notes.

## Quick Start

```bash
cp .env.example .env
docker compose up --build
```

- Storefront: http://localhost:8081
- API: http://localhost:8080
- Swagger: http://localhost:8080/swagger-ui/index.html

## Local Browser Preview

Run the Vite storefront locally:

```bash
cd frontend
npm run dev -- --port 4173
```

Open http://localhost:4173 to inspect the BlinkMart home, shop, product detail, cart, checkout, login and admin screens.


## Publish on GitHub Pages

This repository includes a GitHub Actions workflow that builds the Vite frontend and publishes it to GitHub Pages.

1. Push or merge your PR into `work`, `main`, or `master`.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab, run or wait for `deploy-pages`, then use the URL shown in the deployment output.

For this repository, the default project-page URL will look like:

```text
https://<your-github-username>.github.io/ShivamSharma700-lang/
```

GitHub Pages hosts the static React frontend only. The Spring Boot API, MySQL, and Redis still need a backend host such as Render, Railway, Fly.io, AWS, or the Docker Compose setup.

## Production Notes

1. Replace all placeholder secrets in `.env.example`.
2. Use managed MySQL/Redis and configure daily backups.
3. Serve the frontend behind a CDN with immutable asset caching.
4. Configure Stripe/Razorpay webhooks to verify payment signatures before marking orders as paid.
5. Configure Cloudinary upload presets and restrict media API keys by environment.
