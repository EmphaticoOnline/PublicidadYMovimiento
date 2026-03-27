@echo off
setlocal enabledelayedexpansion

REM Navega a la raíz del proyecto
pushd "%~dp0..\.." || exit /b 1

echo [1/4] Construyendo frontend...
pushd frontend || exit /b 1
call npm run build
if errorlevel 1 (
  echo ❌ Error al construir el frontend.
  exit /b 1
)
popd

echo [2/4] Subiendo frontend...
scp -r frontend\dist\* ubuntu@148.113.192.7:/var/www/pm
if errorlevel 1 (
  echo ❌ Error al subir frontend.
  exit /b 1
)

echo [3/4] Subiendo backend...
scp -r backend\src\* ubuntu@148.113.192.7:/home/ubuntu/pmpublicidad-backend/src
if errorlevel 1 (
  echo ❌ Error al subir backend.
  exit /b 1
)

echo [4/4] Reiniciando backend (PM2)...
ssh ubuntu@148.113.192.7 "pm2 restart pm-publicidad-api"
if errorlevel 1 (
  echo ❌ Error al reiniciar PM2.
  exit /b 1
)

echo ✅ Deploy completo exitoso.

popd
endlocal
exit /b 0