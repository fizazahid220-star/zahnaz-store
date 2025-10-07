Write-Host "Updating and zipping Zahnaz Store project..."

$projectPath = "C:\Users\Dr.pc\Documents\GitHub\zahnaz-store"
$zipPath = "C:\Users\Dr.pc\Documents\GitHub\zahnaz-store.zip"

# Remove old ZIP if it exists
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

# Create ZIP of project
Compress-Archive -Path "$projectPath\*" -DestinationPath $zipPath -Force

Write-Host "ZIP created successfully at $zipPath"
