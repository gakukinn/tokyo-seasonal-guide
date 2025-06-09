Write-Host "Cleaning environment..." -ForegroundColor Green

# Kill all node processes
Write-Host "Terminating existing Node.js processes..." -ForegroundColor Yellow
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Wait 1 second
Start-Sleep -Seconds 1

# Remove .next build cache
if (Test-Path ".next") {
    Write-Host "Cleaning build cache..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
}

# Clean npm cache
Write-Host "Cleaning npm cache..." -ForegroundColor Yellow
npm cache clean --force 2>$null

Write-Host "Starting development server..." -ForegroundColor Green
npm run dev 