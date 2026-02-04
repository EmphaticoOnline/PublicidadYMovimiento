@echo off
setlocal

set BASE=C:\OpenSource\PublicidadYMovimiento\frontend\public\images\categories

echo ============================================
echo Renombrando subcategorias
echo ============================================

REM --- ARCOS META ---
rename "%BASE%\arcos-meta\De Diseño Especial" diseno-especial
rename "%BASE%\arcos-meta\Estandar" estandar

REM --- BOTARGAS ---
rename "%BASE%\botargas\Inflables" inflables
rename "%BASE%\botargas\Rigidas" rigidas

REM --- BRINCOLINES ---
rename "%BASE%\brincolines\Acuaticos" acuaticos
rename "%BASE%\brincolines\Escaladoras" escaladoras
rename "%BASE%\brincolines\Interactivo" interactivo
rename "%BASE%\brincolines\Tema deportivo" tema-deportivo
rename "%BASE%\brincolines\Tipo cubo" tipo-cubo
rename "%BASE%\brincolines\TOBOGANES" toboganes

REM --- CARPAS Y TOLDOS ---
rename "%BASE%\carpas-toldos\Desmontable" desmontable
rename "%BASE%\carpas-toldos\Inflables" inflables
rename "%BASE%\carpas-toldos\Plegable" plegable

REM --- DISPLAY ---
rename "%BASE%\display\Demo set" demo-set
rename "%BASE%\display\Mesa Counter" mesa-counter
rename "%BASE%\display\Mesa tubular" mesa-tubular
rename "%BASE%\display\Mochila banner" mochila-banner
rename "%BASE%\display\Paredes araña, Pared Plegable, Back Araña" pared-arana
rename "%BASE%\display\Pop Gol O Pop golf" pop-gol
rename "%BASE%\display\Roll up" roll-up
rename "%BASE%\display\X banner" x-banner

REM --- FLAG BANNER ---
rename "%BASE%\flag-banner\ Base para Flag Banner" base
rename "%BASE%\flag-banner\Estandar" estandar
rename "%BASE%\flag-banner\Flag Banner 3 en 1" flag-banner-3-en-1

REM --- GLOBOS ---
rename "%BASE%\globos-aerostaticos\Esferas" esferas
rename "%BASE%\globos-aerostaticos\zepellin" zeppelin

REM --- JUEGOS INTERACTIVOS ---
rename "%BASE%\juegos-interactivos\Basquetbol" basquetbol
rename "%BASE%\juegos-interactivos\Caja de bateo" caja-de-bateo
rename "%BASE%\juegos-interactivos\cancha de futbol" cancha-futbol
rename "%BASE%\juegos-interactivos\Gladiadores" gladiadores
rename "%BASE%\juegos-interactivos\Porterias" porterias
rename "%BASE%\juegos-interactivos\Rin de box" rin-box
rename "%BASE%\juegos-interactivos\Tiro al blanco" tiro-al-blanco
rename "%BASE%\juegos-interactivos\Tornado" tornado

REM --- LINEA AUTOS ---
rename "%BASE%\linea-autos\Cabinas Inflables" cabinas-inflables
rename "%BASE%\linea-autos\Funda o Cubierta" funda-cubierta
rename "%BASE%\linea-autos\Porta Bicicletas" porta-bicicletas
rename "%BASE%\linea-autos\Truck Bags" truck-bags

REM --- PANTALLAS ---
rename "%BASE%\pantallas-carteleras\De Diseño Especial" diseno-especial
rename "%BASE%\pantallas-carteleras\Estandar" estandar

REM --- PUBLIBACK ---
rename "%BASE%\publiback\Estandar" estandar

REM --- REPLICAS ---
rename "%BASE%\replicas-inflables\Animales" animales
rename "%BASE%\replicas-inflables\Botellas" botellas
rename "%BASE%\replicas-inflables\Costales" costales
rename "%BASE%\replicas-inflables\Envanses y Latas" envases-latas
rename "%BASE%\replicas-inflables\Figuras" figuras

REM --- TOMI ---
rename "%BASE%\tomi-publicitario\Diseño Especial" diseno-especial
rename "%BASE%\tomi-publicitario\Estandar" estandar

echo.
echo ✅ Renombrado completado
pause
