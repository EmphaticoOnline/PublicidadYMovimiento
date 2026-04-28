#!/bin/bash

SERVER="ubuntu@148.113.192.7"

echo "[1/4] Build frontend..."
cd frontend || exit 1
npm run build || exit 1
cd ..

echo "[2/4] Subiendo frontend (rsync rapido)..."
rsync -avz --delete frontend/dist/ $SERVER:/var/www/pm || exit 1

echo "[3/4] Backend (git pull)..."
ssh $SERVER "cd /home/ubuntu/PublicidadYMovimiento && git pull" || exit 1

echo "[4/4] Reiniciando backend..."
ssh $SERVER "pm2 restart pm-publicidad-api" || exit 1

echo "✅ Deploy listo 🚀"