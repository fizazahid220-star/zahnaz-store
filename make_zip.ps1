Write-Host "🛠 Creating ZahnaZ Store ZIP..."
$source = "C:\Users\Dr.pc\Documents\GitHub\zahnaz-store"
$destination = "C:\Users\Dr.pc\Documents\GitHub\ZahnaZ_Full_Windows.zip"

if (Test-Path $destination) {
    Remove-Item $destination
}

Compress-Archive -Path "$source\*" -DestinationPath $destination
Write-Host " ZIP created successfully: $destination"
