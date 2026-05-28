# CI Troubleshooting

## Frontend install step

The frontend workflow runs inside the `frontend/` directory. This is important because `package.json` lives there, not at the repository root.

The workflow now installs dependencies with:

```bash
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi
```

This avoids the common GitHub Actions error where `npm ci` fails because `package-lock.json` has not been generated yet. After a lockfile is committed, CI will automatically switch to deterministic `npm ci` installs.

## Frontend build step

The build command is executed from `frontend/`:

```bash
npm run build
```

This runs the Vite production build defined in `frontend/package.json`.

## Recommended next step

When registry access is available locally, generate and commit a lockfile with:

```bash
cd frontend
npm install
```

Then commit `frontend/package-lock.json` so CI uses `npm ci`.
