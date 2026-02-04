@echo off
chcp 65001 > nul
setlocal ENABLEDELAYEDEXPANSION

REM ==============================
REM CONFIGURACIÓN BASE
REM ==============================

set "ORIGEN_BASE=C:\Temp\Pagina Web"
set "DESTINO_BASE=C:\OpenSource\PublicidadYMovimiento\frontend\public\images\categories"

REM ==============================
REM FUNCIÓN DE COPIA
REM ==============================

call :COPIAR "1 .-Muñecos publicitarios Sky Dancer" "sky-dancer"
call :COPIAR "2.-Tomi publicitario" "tomi-publicitario"
call :COPIAR "3.-Publiback" "publiback"
call :COPIAR "4.- Cilindros publicitarios" "cilindros-publicitarios"
call :COPIAR "5.-Publitubo" "publitubo"
call :COPIAR "6.- Replicas Inflables" "replicas-inflables"
call :COPIAR "7.- Pantallas, Carteleras o Espectacular Inflable" "pantallas-carteleras"
call :COPIAR "8.- Arcos meta" "arcos-meta"
call :COPIAR "9.-Flag Banner" "flag-banner"
call :COPIAR "10.-Botargas" "botargas"
call :COPIAR "11.-Display" "display"
call :COPIAR "12.- Carpas y toldos" "carpas-toldos"
call :COPIAR "13.- Tuneles" "tuneles"
call :COPIAR "14.- Globos aerostaricos" "globos-aerostaticos"
call :COPIAR "15.- Juegos Interactivos" "juegos-interactivos"
call :COPIAR "16.- Brincolines" "brincolines"
call :COPIAR "17.- Peluches Publicitarios" "peluche-publicitario"
call :COPIAR "18.- DOMIS  Rellenables" "domis-rellenables"
call :COPIAR "19.- Linea para AUTOS" "linea-autos"
call :COPIAR "20.- TURBINAS" "turbinas"

echo.
echo ============================================
echo ✅ IMPORTACIÓN COMPLETA FINALIZADA
echo ============================================
pause
exit /b


REM ==============================
REM FUNCIÓN
REM ==============================
:COPIAR
set "ORIGEN=%ORIGEN_BASE%\%~1"
set "DESTINO=%DESTINO_BASE%\%~2"

echo.
echo ============================================
echo Importando %~2
echo ============================================

if not exist "%ORIGEN%" (
  echo ❌ NO EXISTE: %ORIGEN%
  goto :EOF
)

mkdir "%DESTINO%" >nul 2>&1
robocopy "%ORIGEN%" "%DESTINO%" /E /NFL /NDL

echo ✅ %~2 importado correctamente
goto :EOF
