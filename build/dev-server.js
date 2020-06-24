const express = require('express')
const webpack = require("webpack")

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require("./webpack.dev.js")
const compiler = webpack(config)
const app = express()

const instance = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    logLevel: 'silent'
})


app.use(instance)

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr'
}))

app.use(express.static('.'))

console.log('> Starting dev server...')

instance.waitUntilValid(() => {
    console.log("> App Listening at:http://localhost:3000")

})
app.listen(3000)
