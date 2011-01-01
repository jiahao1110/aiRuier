@echo off
xcopy D:\kissy\build\*.* F:\aiRuier /s /e /c /h /r /k /y /f /z
del *pkg.js /s /q
del calendar.css /s /q
del base.css /s /q
del build.xml /s /q
del common.css /s /q
del grids.css /s /q
del reset.css /s /q
del reset-grids.css /s /q
del kissy.js /s /q
del kissy-min.js
del kissy-aio.js /s /q
del seed.js /q
del packages\seed.js /q
del test.css /s /q
del test.js /s /q
pause