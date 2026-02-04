@echo off
chcp 65001 > nul
setlocal

REM === RUTAS (AJUSTADAS AL NOMBRE REAL) ===
set "ORIGEN=C:\Temp\Pagina Web\1 .-Muñecos publicitarios Sky Dancer"
set "DESTINO=C:\OpenSource\PublicidadYMovimiento\frontend\public\images\categories\sky-dancer"

echo ============================================
echo Importando SKY DANCER
echo ============================================

if not exist "%ORIGEN%" (
  echo ❌ ERROR: No existe la carpeta origen
  echo %ORIGEN%
  pause
  exit /b
)

mkdir "%DESTINO%" >nul 2>&1

robocopy "%ORIGEN%" "%DESTINO%" /E

echo.
echo ✅ SKY DANCER importado correctamente
pause
