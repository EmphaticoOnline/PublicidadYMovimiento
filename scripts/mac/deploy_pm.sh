#!/bin/bash

echo "🔨 Building frontend..."
cd frontend || exit 1
npm run build || exit 1

echo "🚀 Uploading to server..."
scp -r dist ubuntu@148.113.192.7:/var/www/pm

echo "✅ Deploy completed"
