# Deployment Guide

## Local Docker

```bash
docker compose up --build
```

## Production Checklist

- Build backend with `mvn -B -pl backend -am package`.
- Build frontend with `cd frontend && npm ci && npm run build`.
- Configure `JWT_SECRET`, MySQL, Redis, Stripe, Razorpay, Cloudinary and SMTP secrets through your platform secret manager.
- Run Flyway migrations before routing production traffic.
- Enable HTTPS, HSTS, CSP, rate limiting and WAF rules at the edge.
- Configure payment webhooks and verify signatures server-side.
- Enable observability: API metrics, logs, DB slow query monitoring and frontend error tracking.
