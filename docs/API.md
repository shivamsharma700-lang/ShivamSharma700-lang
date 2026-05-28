# Vocal REST API

Swagger/OpenAPI is available at `/swagger-ui/index.html` when the backend is running.

## Public

- `GET /api/public/home` — banners, categories and trending products.
- `GET /api/public/products?q=&category=&min=&max=&page=&size=&sort=` — paginated catalog search.
- `GET /api/public/products/{slug}` — product detail with variants/images.
- `GET /api/public/categories` — active categories.

## Authentication

- `POST /api/auth/register` — `{ email, password, fullName, phone }`.
- `POST /api/auth/login` — returns access and refresh JWTs.
- `POST /api/auth/google` — seam for Google id-token exchange.
- `POST /api/auth/forgot-password` and `/verify-otp` — OTP reset seams.

## Customer

- `GET /api/cart`, `POST /api/cart`, `DELETE /api/cart/{id}`.
- `POST /api/checkout` — creates an order from cart lines.
- `POST /api/checkout/payments/stripe` — Stripe intent seam.
- `POST /api/checkout/payments/razorpay` — Razorpay order seam.

## Admin

- `GET /api/admin/dashboard` — analytics counters.
- `GET /api/admin/products`, `/orders`, `/users` — admin datasets.

All non-public endpoints require `Authorization: Bearer <accessToken>`; `/api/admin/**` requires `ROLE_ADMIN`.
