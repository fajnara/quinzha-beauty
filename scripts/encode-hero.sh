#!/usr/bin/env bash
# =============================================================================
# Encode the HERO clip into a small, web-optimized loop + poster.
# Output (public/):
#   hero.mp4          H.264, NO audio, faststart (plays before full download)
#   hero-poster.webp  first-frame poster (tiny → instant paint / LCP)
#
# Usage:   bash scripts/encode-hero.sh [INPUT_FILE]
#          default INPUT_FILE = first video found in raw-hero/
# Needs:   ffmpeg on PATH. Run from project root in Git Bash (NOT cmd.exe → WSL).
# =============================================================================
set -euo pipefail

command -v ffmpeg >/dev/null 2>&1 || { echo "ffmpeg not found on PATH."; exit 1; }

IN="${1:-}"
if [ -z "$IN" ]; then
  shopt -s nullglob nocaseglob
  cand=(raw-hero/*.{mp4,mov,m4v,mkv,webm})
  shopt -u nocaseglob
  [ ${#cand[@]} -gt 0 ] || { echo "No clip in raw-hero/. Put your landscape clip there (or pass a file)."; exit 1; }
  IN="${cand[0]}"
fi

OUT_DIR="public"
WIDTH=1280     # framed hero; 1280 = good balance (bump to 1600 if you want sharper)
DURATION=12    # max seconds; loop hides the cut
vf="scale=${WIDTH}:-2:flags=lanczos"

echo "→ $IN  ⇒  public/hero.mp4 + public/hero-poster.webp"

# H.264 MP4 — no audio (-an), faststart
ffmpeg -y -hide_banner -loglevel error -i "$IN" -t "$DURATION" -vf "$vf" -r 30 -an \
  -c:v libx264 -profile:v high -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart \
  "$OUT_DIR/hero.mp4"

# Poster — early frame, tiny
ffmpeg -y -hide_banner -loglevel error -ss 0.5 -i "$IN" -frames:v 1 -vf "$vf" \
  "$OUT_DIR/hero-poster.webp"

ls -lh "$OUT_DIR/hero.mp4" "$OUT_DIR/hero-poster.webp" | awk '{printf "   %-7s %s\n", $5, $NF}'
echo "Done."
