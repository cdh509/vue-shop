var gulp         = require('gulp');
var htmlmin      = require('gulp-htmlmin');
var imagemin     = require('gulp-imagemin');
var cssmin       = require('gulp-clean-css');
var uglify       = require('gulp-uglify');
var less         = require('gulp-less');
var gulpSequence = require('gulp-sequence');

gulp.task('testHtml', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/'));

});

gulp.task('testImage', function () {
    gulp.src('src/**/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/'));
});

gulp.task('testCss', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
    
 
gulp.task('jsmin', function () {
    gulp.src(['src/datas/**'])
        .pipe(gulp.dest('dist/datas'));
});

gulp.task('jsmins', function () {
    gulp.src(['src/js/*.js', 'src/js/**/*.js', '!src/js/libs/*'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('libs', function () {
    gulp.src(['src/js/libs/*'])
        .pipe(gulp.dest('dist/js/libs/'));
});
    
gulp.task('testLess', function () {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});

// gulp.task('watch', ['less'], function () {
//     gulp.watch(Asset.less, ['less']);
// });

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['less'], function() {
    var files = [
        ".src/js/*.js",
        ".src/*.html"
    ]
    browserSync.init(files, {
        server: {
            baseDir: "./src",
            // index: "homepage.html",
            online: true
        }
    });

    gulp.watch("src/less/*.less", ['less']);
    gulp.watch("src/*.html").on('change', reload);
    gulp.watch("src/js/*.js").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('less', function() {
    return gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("src/css"))
        .pipe(reload({stream: true}));
});

// 默认监听事件
gulp.task('default', ['serve']);

var del = require('del');

gulp.task('clean', function () {
  del(['dist/*']);
});

// 多任务进行
gulp.task('compless', ['clean'], gulpSequence( 'testHtml', 'testImage', 'testCss', 'jsmin', 'libs', 'testLess','jsmins' ));