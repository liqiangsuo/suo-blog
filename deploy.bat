@echo off
cd /d C:\codex_learn\codex_list\blog
git add .
git commit -m "Update blog content"
git push
echo.
echo ? Pushed to GitHub. Vercel is auto-deploying...
echo.
echo Wait 1-2 min and refresh: https://suo-blog.vercel.app
pause
