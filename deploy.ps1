# Firebase Deployment Script with Retry Logic
Write-Host "Starting Firebase deployment..." -ForegroundColor Green

$maxRetries = 3
$retryCount = 0
$success = $false

while ($retryCount -lt $maxRetries -and -not $success) {
    $retryCount++
    Write-Host "`nAttempt $retryCount of $maxRetries..." -ForegroundColor Yellow
    
    try {
        $env:FIREBASE_CLI_TIMEOUT = "900000"  # 15 minutes
        $result = firebase deploy --only hosting --force 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`nDeployment successful!" -ForegroundColor Green
            $success = $true
        } else {
            Write-Host "`nDeployment failed. Exit code: $LASTEXITCODE" -ForegroundColor Red
            if ($retryCount -lt $maxRetries) {
                Write-Host "Retrying in 10 seconds..." -ForegroundColor Yellow
                Start-Sleep -Seconds 10
            }
        }
    } catch {
        Write-Host "`nError: $_" -ForegroundColor Red
        if ($retryCount -lt $maxRetries) {
            Write-Host "Retrying in 10 seconds..." -ForegroundColor Yellow
            Start-Sleep -Seconds 10
        }
    }
}

if (-not $success) {
    Write-Host "`nDeployment failed after $maxRetries attempts." -ForegroundColor Red
    Write-Host "`nAlternative options:" -ForegroundColor Yellow
    Write-Host "1. Try deploying from a different network (mobile hotspot, etc.)" -ForegroundColor Cyan
    Write-Host "2. Use GitHub Actions for automated deployment" -ForegroundColor Cyan
    Write-Host "3. Deploy in smaller batches by excluding some locale files" -ForegroundColor Cyan
    exit 1
}

exit 0

