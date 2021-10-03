const path = require('path');


module.exports = {
    mode: "production",
    entry: {
        main: './src/index.tsx',
    },
    output: {
        path: path.resolve('lib'),
        library: {
            name: 'FunkyBar',
            type: 'umd',
        },
        globalObject: 'this',
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {loader: 'ts-loader'},
                exclude: /node_modules/,
            },
            {
                test: /\.css?$/,
                use: [{loader: "style-loader"}, {loader: 'css-loader'}],
                exclude: /node_modules/,
            },
        ]
    },
    externals: {
        "react": "react",
        "react-dom": "react-dom"
    }
}
