#!/usr/bin/env bash
set -e

SLUG="${1:?Usage: bash scripts/new-post.sh your-post-slug}"
CONTENT_DIR="content/blog"
TEMPLATE="$CONTENT_DIR/_template.md"
TARGET="$CONTENT_DIR/$SLUG.md"

if [ -f "$TARGET" ]; then
  echo "Error: $TARGET already exists." >&2
  exit 1
fi

# Count existing numbered posts to get next ID
COUNT=$(ls "$CONTENT_DIR"/blog-*.md 2>/dev/null | grep -v _template | wc -l | tr -d ' ')
NEXT_NUM=$((COUNT + 1))
NEXT_ID=$(printf "blog-%02d" "$NEXT_NUM")
TODAY=$(date +%Y-%m-%d)

cp "$TEMPLATE" "$TARGET"

# Replace placeholder values (portable sed for macOS + Linux)
sed -i.bak \
  -e "s/blog-XX/$NEXT_ID/g" \
  -e "s/publish_date: \"2026-MM-DD\"/publish_date: \"$TODAY\"/" \
  -e "s/last_updated: \"2026-MM-DD\"/last_updated: \"$TODAY\"/" \
  "$TARGET"
rm "${TARGET}.bak"

echo ""
echo "✅ Created: $TARGET"
echo "   ID:      $NEXT_ID"
echo "   Date:    $TODAY"
echo "   Status:  draft: true (hidden in production until you set draft: false)"
echo ""
echo "Next steps:"
echo "  1. Edit $TARGET — fill in title, keywords, content"
echo "  2. Add images to public/images/blog/ with filenames matching the template"
echo "  3. Set draft: false and adjust publish_date when ready to publish"
echo ""

[ -n "$EDITOR" ] && "$EDITOR" "$TARGET"
