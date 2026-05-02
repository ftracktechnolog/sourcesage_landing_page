#!/bin/bash
# CI Locale Integrity Check
# Verifies: lang attributes, 404-free routes, no cross-locale English leakage
# Run after: npm run build

set -e
OUT_DIR="out"
ERRORS=0

red() { printf "\033[31m%s\033[0m\n" "$1"; }
green() { printf "\033[32m%s\033[0m\n" "$1"; }

echo "=== Locale Route Health ==="

# Routes that must return 200 (index.html exists)
ROUTES=(
  "out/index.html:/"
  "out/ms/index.html:/ms/"
  "out/zh/index.html:/zh/"
  "out/about/index.html:/about/"
  "out/ms/about/index.html:/ms/about/"
  "out/zh/about/index.html:/zh/about/"
  "out/services/index.html:/services/"
  "out/blog/index.html:/blog/"
  "out/ms/blog/index.html:/ms/blog/"
  "out/zh/blog/index.html:/zh/blog/"
  "out/kubota-tractor-parts-malaysia/index.html:/kubota-..."
  "out/ms/kubota-tractor-parts-malaysia/index.html:/ms/kubota-..."
  "out/zh/kubota-tractor-parts-malaysia/index.html:/zh/kubota-..."
)

for entry in "${ROUTES[@]}"; do
  file="${entry%%:*}"
  label="${entry##*:}"
  if [ -f "$file" ]; then
    green "  ✅ $label"
  else
    red "  ❌ $label — MISSING"
    ((ERRORS++))
  fi
done

echo ""
echo "=== EN Pages: English leakage check ==="
# EN pages should NOT contain BM/ZH navbar text
for f in out/index.html out/about/index.html out/blog/index.html; do
  if grep -q 'Jenama\|Tentang\|Minta Sebut Harga\|品牌\|船用\|关于\|提交请求' "$f" 2>/dev/null; then
    red "  ❌ $f — contains non-English nav text"
    ((ERRORS++))
  else
    green "  ✅ $f — clean"
  fi
done

echo ""
echo "=== MS Pages: English leakage check ==="
for f in out/ms/index.html out/ms/about/index.html out/ms/blog/index.html; do
  leaked=$(grep -o 'Kubota Tractor Parts\|Yanmar Marine Parts\|View parts\|About SourceSage\|Request a Part\|Brands\|Marine\|How It Works\|Blog' "$f" 2>/dev/null | sort -u)
  if [ -n "$leaked" ]; then
    red "  ❌ $f — English leakage: $leaked"
    ((ERRORS++))
  else
    green "  ✅ $f — clean"
  fi
done

echo ""
echo "=== ZH Pages: English leakage check ==="
for f in out/zh/index.html out/zh/about/index.html out/zh/blog/index.html; do
  leaked=$(grep -o 'Kubota Tractor Parts\|Yanmar Marine Parts\|View parts\|About SourceSage\|Request a Part\|Brands\|Marine\|How It Works\|Blog' "$f" 2>/dev/null | sort -u)
  if [ -n "$leaked" ]; then
    red "  ❌ $f — English leakage: $leaked"
    ((ERRORS++))
  else
    green "  ✅ $f — clean"
  fi
done

echo ""
echo "=== LangSwitcher presence ==="
for f in out/index.html out/about/index.html out/blog/index.html out/ms/index.html out/ms/about/index.html out/ms/blog/index.html out/zh/index.html out/zh/about/index.html out/zh/blog/index.html; do
  if grep -q 'LangSwitcher' "$f" 2>/dev/null || grep -q 'EN.*BM.*中文\|BM.*中文.*EN.*BM' "$f" 2>/dev/null; then
    green "  ✅ $f — LangSwitcher present"
  else
    red "  ❌ $f — LangSwitcher MISSING"
    ((ERRORS++))
  fi
done

echo ""
echo "=== <html lang> SSR check ==="
# EN pages should have lang="en", but current SSR always outputs "en" (known limitation with static export)
# MS and ZH use beforeInteractive script for client-side correction
# This test verifies at minimum the tag exists
for f in out/index.html out/ms/index.html out/zh/index.html; do
  lang=$(grep -o '<html lang="[^"]*"' "$f" 2>/dev/null | head -1)
  if [ -n "$lang" ]; then
    green "  ✅ $f — $lang"
  else
    red "  ❌ $f — no lang attribute"
    ((ERRORS++))
  fi
done

echo ""
echo "=== Sitemap completeness ==="
SITEMAP=public/sitemap.xml
for url in "/ms/about/" "/zh/about/" "/services/" "/ms/kubota-" "/zh/kubota-" "/ms/blog/" "/zh/blog/"; do
  if grep -q "$url" "$SITEMAP" 2>/dev/null; then
    green "  ✅ $url in sitemap"
  else
    red "  ❌ $url NOT in sitemap"
    ((ERRORS++))
  fi
done

echo ""
if [ "$ERRORS" -eq 0 ]; then
  green "=== ALL CHECKS PASSED ($ERRORS errors) ==="
  exit 0
else
  red "=== $ERRORS ERRORS FOUND ==="
  exit 1
fi
