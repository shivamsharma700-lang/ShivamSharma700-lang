#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PREVIEW_DIR="$ROOT_DIR/frontend/preview"
PORT="${PORT:-4173}"
URL="http://localhost:${PORT}"

if ! command -v python3 >/dev/null 2>&1; then
  echo "Python 3 is required to run the dependency-free Vocal preview." >&2
  exit 1
fi

cd "$PREVIEW_DIR"
echo "Starting Vocal preview at $URL"
echo "Press Ctrl+C in this terminal to stop the server."

if command -v xdg-open >/dev/null 2>&1; then
  (sleep 1 && xdg-open "$URL" >/dev/null 2>&1 || true) &
elif command -v open >/dev/null 2>&1; then
  (sleep 1 && open "$URL" >/dev/null 2>&1 || true) &
fi

python3 -m http.server "$PORT"
