@echo off
setlocal
set PORT=%PORT%
if "%PORT%"=="" set PORT=4173
set ROOT_DIR=%~dp0..
set PREVIEW_DIR=%ROOT_DIR%\frontend\preview
set URL=http://localhost:%PORT%

where py >nul 2>nul
if %ERRORLEVEL%==0 (
  set PYTHON_CMD=py -3
) else (
  where python >nul 2>nul
  if %ERRORLEVEL%==0 (
    set PYTHON_CMD=python
  ) else (
    echo Python 3 is required to run the dependency-free Vocal preview.
    exit /b 1
  )
)

cd /d "%PREVIEW_DIR%"
echo Starting Vocal preview at %URL%
echo Press Ctrl+C in this terminal to stop the server.
start "" "%URL%"
%PYTHON_CMD% -m http.server %PORT%
