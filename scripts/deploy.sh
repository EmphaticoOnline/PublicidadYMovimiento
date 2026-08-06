#!/bin/bash

SERVER="ubuntu@148.113.192.7"

echo "[1/5] Pushing cambios al repositorio..."
git push || exit 1

echo "[2/5] Build frontend..."
cd frontend || exit 1
npm run build || exit 1
cd ..

echo "[3/5] Subiendo frontend (rsync rapido)..."
rsync -avz --delete frontend/dist/ $SERVER:/var/www/pm || exit 1

echo "[4/5] Backend (git pull)..."
ssh $SERVER "cd /home/ubuntu/PublicidadYMovimiento && git pull" || exit 1

echo "[5/5] Reiniciando backend..."
ssh $SERVER "pm2 restart pm-publicidad-api" || exit 1

echo "✅ Deploy listo 🚀"