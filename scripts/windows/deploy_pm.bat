@echo off
setlocal enabledelayedexpansion

set SERVER=ubuntu@148.113.192.7

REM Ir a la raíz del proyecto
pushd "%~dp0..\.." || exit /b 1

echo [1/4] Construyendo frontend...
pushd frontend || exit /b 1
call npm run build
if errorlevel 1 (
  echo ❌ Error al construir frontend.
  exit /b 1
)
popd

echo [2/4] Subiendo frontend (solo dist)...
scp -r frontend\dist\* %SERVER%:/var/www/pm
if errorlevel 1 (
  echo ❌ Error al subir frontend.
  exit /b 1
)

echo [3/4] Actualizando backend (git pull)...
ssh %SERVER% "cd /home/ubuntu/PublicidadYMovimiento && git pull"
if errorlevel 1 (
  echo ❌ Error en git pull.
  exit /b 1
)

echo [4/4] Reiniciando backend...
ssh %SERVER% "pm2 restart pm-publicidad-api"
if errorlevel 1 (
  echo ❌ Error al reiniciar PM2.
  exit /b 1
)

echo ✅ Deploy completo y rápido 🚀

popd
endlocal
exit /b 0