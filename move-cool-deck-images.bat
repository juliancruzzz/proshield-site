@echo off
echo Moving cool deck images from Downloads to project...

if not exist "public\images\cool-deck" mkdir "public\images\cool-deck"

echo Looking for Pexels images in Downloads...
dir "%USERPROFILE%\Downloads\pexels-*" /b 2>nul

REM Try common Pexels filename patterns
for %%f in ("%USERPROFILE%\Downloads\pexels-curtisadams-36777952*") do (
    copy "%%f" "public\images\cool-deck\pool-deck-hero.jpg"
    echo Copied pool-deck-hero.jpg
)
for %%f in ("%USERPROFILE%\Downloads\pexels-curtis-adams-36777952*") do (
    copy "%%f" "public\images\cool-deck\pool-deck-hero.jpg"
    echo Copied pool-deck-hero.jpg
)

for %%f in ("%USERPROFILE%\Downloads\pexels-max-vakhtbovych-8143681*") do (
    copy "%%f" "public\images\cool-deck\patio-backyard.jpg"
    echo Copied patio-backyard.jpg
)
for %%f in ("%USERPROFILE%\Downloads\pexels-maxvakhtbovych-8143681*") do (
    copy "%%f" "public\images\cool-deck\patio-backyard.jpg"
    echo Copied patio-backyard.jpg
)

for %%f in ("%USERPROFILE%\Downloads\pexels-alena-evseenko-34299555*") do (
    copy "%%f" "public\images\cool-deck\pool-deck-lounge.jpg"
    echo Copied pool-deck-lounge.jpg
)
for %%f in ("%USERPROFILE%\Downloads\pexels-alenaevseenko-34299555*") do (
    copy "%%f" "public\images\cool-deck\pool-deck-lounge.jpg"
    echo Copied pool-deck-lounge.jpg
)

for %%f in ("%USERPROFILE%\Downloads\pexels-curtisadams-36777953*") do (
    copy "%%f" "public\images\cool-deck\pool-deck-spa.jpg"
    echo Copied pool-deck-spa.jpg
)
for %%f in ("%USERPROFILE%\Downloads\pexels-curtis-adams-36777953*") do (
    copy "%%f" "public\images\cool-deck\pool-deck-spa.jpg"
    echo Copied pool-deck-spa.jpg
)

echo.
echo Done! Check public\images\cool-deck\:
dir "public\images\cool-deck" /b
echo.
pause
