@echo off
echo ========================================
echo    JJ Blog - GitHub Upload Script
echo ========================================
echo.

echo Checking if git is initialized...
if not exist .git (
    echo Initializing git repository...
    git init
) else (
    echo Git repository already exists.
)

echo.
echo Adding all files to git...
git add .

echo.
echo Committing changes...
set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=Clean blog application ready for deployment

git commit -m "%commit_message%"

echo.
echo Setting up remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/PiyushJi040/blog.git

echo.
echo Setting main branch...
git branch -M main

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo Upload complete! 
echo Repository: https://github.com/PiyushJi040/blog
echo ========================================
echo.
pause