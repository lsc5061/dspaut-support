Add-Type -AssemblyName System.Drawing
$dir = "e:\DS_LSC\dsvault\Marketing\08. Sub Website\dspaut-portal\src\content\blog\ko\images"
$dir2 = "e:\DS_LSC\dsvault\Marketing\08. Sub Website\dspaut-portal\public\images\blog\ko"
$targetFilters = @("*slide003_1.jpg", "*slide007_10.jpg")

function Rotate-And-Strip-Metadata($file) {
    try {
        $img = [System.Drawing.Image]::FromFile($file)
        # Rotate 90 degrees CCW
        $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
        
        # Create a new bitmap to strip EXIF and force orientation
        $newImg = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
        $g = [System.Drawing.Graphics]::FromImage($newImg)
        $g.DrawImage($img, 0, 0)
        $g.Dispose()
        $img.Dispose()
        
        # Save as a clean JPEG
        $tmp = $file + ".clean.jpg"
        $newImg.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $newImg.Dispose()
        
        Move-Item -Force $tmp $file
        return $true
    } catch {
        Write-Host "Error: $_"
        return $false
    }
}

foreach ($d in @($dir, $dir2)) {
    foreach ($filter in $targetFilters) {
        $files = Get-ChildItem -Path $d -Filter $filter
        foreach ($f in $files) {
            if (Rotate-And-Strip-Metadata $f.FullName) {
                Write-Host "Perfectly rotated and stripped: $($f.FullName)"
            }
        }
    }
}
