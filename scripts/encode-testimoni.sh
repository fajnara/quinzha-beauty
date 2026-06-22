#!/usr/bin/env bash
# =============================================================================
# Encode testimonial clips into small, web-optimized assets.
# For each raw video it produces, in public/testimoni/:
#   <slug>.mp4          H.264, faststart (plays before full download)
#   <slug>-poster.webp  first-frame poster (tiny → instant paint)
#
# Usage:   bash scripts/encode-testimoni.sh [INPUT_DIR]
#          (default INPUT_DIR = raw-testimoni)
# Needs:   ffmpeg on PATH. Run from the project root (Git Bash works on Windows).
#
# Then in app/page.js point a testimonials[] entry at the outputs, e.g.:
#   poster:"/testimoni/dinda-poster.webp", video:"/testimoni/dinda.mp4"
# =============================================================================
set -euo pipefail

IN_DIR="${1:-raw-testimoni}"
OUT_DIR="public/testimoni"
WIDTH=540        # cards render ~260px wide → 540 is already 2x retina
DURATION=12      # max seconds; looping hides the cut

command -v ffmpeg >/dev/null 2>&1 || { echo "ffmpeg not found on PATH."; exit 1; }
mkdir -p "$OUT_DIR"

shopt -s nullglob nocaseglob
files=("$IN_DIR"/*.{mp4,mov,m4v,mkv,webm})
shopt -u nocaseglob

if [ ${#files[@]} -eq 0 ]; then
  echo "No videos in '$IN_DIR'. Put your raw clips there (or pass a directory)."
  exit 1
fi

vf="scale=${WIDTH}:-2:flags=lanczos"

for f in "${files[@]}"; do
  base="$(basename "$f")"
  slug="$(echo "${base%.*}" | tr '[:upper:] ' '[:lower:]-' | tr -cd 'a-z0-9-')"
  echo "→ $base  ⇒  $slug.{mp4,webm,webp}"

  # H.264 MP4 — universal fallback, faststart for early playback
  ffmpeg -y -hide_banner -loglevel error -i "$f" -t "$DURATION" -vf "$vf" -r 30 \
    -c:v libx264 -profile:v high -crf 30 -preset slow -pix_fmt yuv420p \
    -c:a aac -b:a 96k -movflags +faststart \
    "$OUT_DIR/$slug.mp4"

  # Poster — single early frame, tiny, gives instant paint
  ffmpeg -y -hide_banner -loglevel error -ss 0.5 -i "$f" -frames:v 1 -vf "$vf" \
    "$OUT_DIR/$slug-poster.webp"

  ls -lh "$OUT_DIR/$slug".mp4 "$OUT_DIR/$slug-poster.webp" \
    | awk '{printf "   %-7s %s\n", $5, $NF}'
done

echo "Done → $OUT_DIR/"
