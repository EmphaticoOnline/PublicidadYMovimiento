@echo off
setlocal

REM ============================================
REM Renombrar subcarpetas SKY DANCER (robusto)
REM ============================================

set BASE=C:\OpenSource\PublicidadYMovimiento\frontend\public\images\categories\sky-dancer

if not exist "%BASE%" (
  echo ❌ No existe la carpeta SKY DANCER
  pause
  exit /b
)

echo Renombrando subcarpetas en:
echo %BASE%
echo.

REM ------------------------------------------------
REM RENOMBRES ROBUSTOS (evitan problemas de acentos)
REM ------------------------------------------------

powershell -NoProfile -Command ^
  "$base='%BASE%';" ^
  "Get-ChildItem -LiteralPath $base -Directory |" ^
  "Where-Object { $_.Name -like 'Dise*o Especial' } |" ^
  "Rename-Item -NewName 'diseno-especial'"

powershell -NoProfile -Command ^
  "$base='%BASE%';" ^
  "Get-ChildItem -LiteralPath $base -Directory |" ^
  "Where-Object { $_.Name -eq 'Doble Turbina' } |" ^
  "Rename-Item -NewName 'doble-turbina'"

powershell -NoProfile -Command ^
  "$base='%BASE%';" ^
  "Get-ChildItem -LiteralPath $base -Directory |" ^
  "Where-Object { $_.Name -eq 'Tiras Locas' } |" ^
  "Rename-Item -NewName 'tiras-locas'"

powershell -NoProfile -Command ^
  "$base='%BASE%';" ^
  "Get-ChildItem -LiteralPath $base -Directory |" ^
  "Where-Object { $_.Name -eq 'Una Turbina' } |" ^
  "Rename-Item -NewName 'una-turbina'"

powershell -NoProfile -Command ^
  "$base='%BASE%';" ^
  "Get-ChildItem -LiteralPath $base -Directory |" ^
  "Where-Object { $_.Name -eq 'Ventilador' } |" ^
  "Rename-Item -NewName 'ventilador'"

echo.
echo ✅ Subcarpetas SKY DANCER renombradas correctamente
pause
