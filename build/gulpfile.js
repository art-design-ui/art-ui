const gulp = require('gulp')
const babel = require('gulp-babel')
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano')
const through2 = require('through2')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const size = require('gulp-filesize')

const paths = {
  dest: {
    lib: '../lib',
    es: '../es',
    dist: '../dist',
  },
  styles: '../src/components/**/*.less',
  scripts: [
    '../src/components/**/*.{ts,tsx}',
    '!../src/components/**/demo/*.{ts,tsx}',
    '!../src/components/**/__tests__/*.{ts,tsx}',
  ],
}

/**
 * 当前组件样式 import './index.less' => import './index.css'
 * 依赖的其他组件样式 import '../test-comp/style' => import '../test-comp/style/css.js'
 * 依赖的其他组件样式 import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * @param {string} content
 */
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.less/g, '.css')
}

/**
 * 编译脚本文件
 * @param {string} babelEnv babel环境变量
 * @param {string} destDir 目标目录
 */
function compileScripts(babelEnv, destDir) {
  const { scripts } = paths
  process.env.BABEL_ENV = babelEnv
  return gulp
    .src(scripts)
    .pipe(babel(require('../.babelrc.js'))) // 使用gulp-babel处理
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone())
        // 找到目标
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding)
          file.contents = Buffer.from(cssInjection(content)) // 处理文件内容
          file.path = file.path.replace(/index\.js/, 'css.js') // 文件重命名
          this.push(file) // 新增该文件
          next()
        } else {
          next()
        }
      }),
    )
    .pipe(gulp.dest(destDir))
}

/**
 * 编译cjs
 */
function compileCJS() {
  const { dest } = paths
  return compileScripts('cjs', dest.lib)
}

/**
 * 编译es
 */
function compileESM() {
  const { dest } = paths
  return compileScripts('esm', dest.es)
}

const buildScripts = gulp.series(compileCJS, compileESM)

/**
 * 拷贝less文件
 */
function copyLess() {
  return gulp.src(paths.styles).pipe(gulp.dest(paths.dest.lib)).pipe(gulp.dest(paths.dest.es))
}

/**
 * 生成css文件
 */
function less2css() {
  return gulp
    .src(paths.styles)
    .pipe(less()) // 处理less文件
    .pipe(autoprefixer()) // 根据browserslistrc增加前缀
    .pipe(cssnano({ zindex: false, reduceIdents: false })) // 压缩
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.es))
}

/**
 * 生成umd模块的css文件
 */

function less2UmdCss() {
  return gulp
    .src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(
      less({
        outputStyle: 'compressed',
      }),
    )
    .pipe(autoprefixer())
    .pipe(concat(`art.css`))
    .pipe(size())
    .pipe(gulp.dest(paths.dest.dist))
    .pipe(sourcemaps.write())
    .pipe(rename(`art.css.map`))
    .pipe(size())
    .pipe(gulp.dest(paths.dest.dist))
    .pipe(cssnano())
    .pipe(concat(`art.min.css`))
    .pipe(size())
    .pipe(gulp.dest(paths.dest.dist))
    .pipe(sourcemaps.write())
    .pipe(rename(`art.min.css.map`))
    .pipe(size())
    .pipe(gulp.dest(paths.dest.dist))
}

const build = gulp.parallel(buildScripts, copyLess, less2css, less2UmdCss)

exports.build = build
exports.default = build

// DEBUG
exports.less2css = less2css
exports.copyLess = copyLess
