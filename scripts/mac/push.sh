#!/bin/bash
git status
echo ""
read -p "Mensaje del commit: " msg

git add .
git commit -m "$msg" || exit 1
git push origin main