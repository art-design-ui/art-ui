const path = require('path');
const rootDir = path.resolve(__dirname, '../');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        'art': path.join(rootDir, 'src/components/index.ts'),
        'art.mini': path.join(rootDir, 'src/components/index.ts'),
    },
    output: {
        path: path.join(rootDir, 'dist'),
        filename: '[name].js',
        // output.library 和 output.libraryTarget 一起使用 对外暴露 library 及定义输出组件库格式
        library: ['art', '[name]'],
        libraryTarget: 'umd',
        // cdn域名
        publicPath: './',
        libraryExport: "default"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    externals: {
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    },
    module: {
        rules: [
            {
                test: /\.js|\.ts|\.tsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/imgs/[name].[ext]'
                }
            }
        ]
    },
    devtool: 'cheap-source-map',
    plugins: [
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                include: /\.mini\.js/,
                sourceMap: true,
                extractComments: false
            })
        ],
        noEmitOnErrors: true
    }
}
