const express = require('express')
const path = require('path')
const chalk = require('chalk')

const app = express()
const port = 3100

app.use(express.static(path.resolve(__dirname, '../coverage/lcov-report')))

console.log('> Starting dev server...')

app.listen(port, () => {
  console.log(`> App Listening at: ${chalk.green.bold(`http://localhost:${port}`)}`)
})
