@echo off
setlocal enabledelayedexpansion

REM Navega a la raíz del proyecto sin importar desde dónde se ejecute
pushd "%~dp0..\.." || exit /b 1

echo [1/3] Construyendo frontend...
pushd frontend || exit /b 1
call npm run build
if errorlevel 1 (
  echo ❌ Error al construir el frontend.
  exit /b 1
)
popd

echo [2/3] Subiendo archivos al servidor...
rem Copiar solo el contenido de dist al root /var/www/pm
scp -r frontend\dist\* ubuntu@148.113.192.7:/var/www/pm
if errorlevel 1 (
  echo ❌ Error al copiar con scp. Verifica tu clave SSH y permisos en /var/www/pm.
  exit /b 1
)

echo [3/3] Deploy completado.
popd
endlocal
exit /b 0
