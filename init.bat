mkdir src && cd src
mkdir css && mkdir js && mkdir fonts && mkdir img
cd js
echo. 2>main.js 
mkdir partials && cd partials
echo. 2>app.js
cd ../../css
echo. 2>main.scss
mkdir partials && cd partials
echo. 2>app.scss
cd ../../../
mkdir dist
call npm link browser-sync
call npm link gulp
call npm link gulp-autoprefixer
call npm link gulp-imagemin
call npm link gulp-minify-css
call npm link gulp-pug
call npm link gulp-rigger
call npm link gulp-sass
call npm link gulp-uglify
call npm link gulp-watch
call npm link imagemin-pngquant
call npm link rimraf