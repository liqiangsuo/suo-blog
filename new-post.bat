@echo off
set /p title="????: "
if "%title%"=="" exit /b

setlocal enabledelayedexpansion
set "slug=%title: =-%"
set "slug=%slug:??=-%"
set "slug=%slug:?=-%"
set "slug=%slug:?=%"
set "slug=%slug:?=%"
set "slug=%slug:?=%"
set "slug=%slug:?=%"
set "slug=%slug:?=%"
set "slug=%slug:?=%"

for /f "tokens=1-3 delims=/ " %%a in ('date /t') do set "today=%%c-%%a-%%b"
if "%today%"=="" set "today=%date:~0,4%-%date:~5,2%-%date:~8,2%"

set "file=C:\codex_learn\codex_list\blog\content\articles\!slug!.md"

if exist "%file%" (
  echo ?????: !slug!.md
  exit /b
)

(
echo ---
echo title: %title%
echo description: ????
echo date: %today%
echo tags: []
echo published: true
echo ---
echo.
echo ## ???????
echo.
echo ? Markdown ?????...
) > "%file%"

echo ? ???: content\articles\%slug%.md
start notepad "%file%"
