const express = require('express')
const webpack = require("webpack")

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require("./webpack.dev.js")
const compiler = webpack(config)
const app = express()


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr'
}))

app.use(express.static('.'))

app.listen(3000, () => {
    console.log("app listen in port:3000")
})
