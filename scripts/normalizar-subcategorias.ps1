# ============================================
# Normalizar nombres de subcategorias
# (sin acentos, sin espacios, sin caracteres raros)
# ============================================

$BASE = "C:\OpenSource\PublicidadYMovimiento\frontend\public\images\categories"

if (!(Test-Path $BASE)) {
    Write-Host "❌ Ruta no encontrada: $BASE"
    exit
}

function Normalize-Name($text) {

    # 1. Normalizar Unicode (quita acentos)
    $normalized = $text.Normalize([Text.NormalizationForm]::FormD)

    # 2. Quitar diacríticos
    $sb = New-Object System.Text.StringBuilder
    foreach ($char in $normalized.ToCharArray()) {
        if ([Globalization.CharUnicodeInfo]::GetUnicodeCategory($char) -ne "NonSpacingMark") {
            [void]$sb.Append($char)
        }
    }

    $clean = $sb.ToString()

    # 3. Minusculas
    $clean = $clean.ToLower()

    # 4. Reemplazos finales
    $clean = $clean -replace '[^a-z0-9\s-]', ''
    $clean = $clean -replace '\s+', '-'

    return $clean
}

Write-Host "==========================================="
Write-Host "Renombrando subcategorias"
Write-Host "==========================================="

Get-ChildItem $BASE -Directory | ForEach-Object {
    Get-ChildItem $_.FullName -Directory | ForEach-Object {

        $oldName = $_.Name
        $newName = Normalize-Name $oldName

        if ($oldName -ne $newName) {
            Write-Host "Renombrando: '$oldName' -> '$newName'"
            Rename-Item $_.FullName $newName
        }
    }
}

Write-Host "✅ Normalizacion completada"
