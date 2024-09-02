const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // Main files.
        index: './src/index.js',

        // Console Application.
        weatherConsole: './src/Console App/weatherConsole.js',
        errorHandler: './src/Console App/errorHandler.js',
        storage: './src/Console App/storage.js',

        // Frontend files.
        weatherUI: './src/Frontend/weatherUI.js',
        loadingComponent: './src/Frontend/loadingComponent.js',

        // Resources
        resources: './src/resources/utility.js',
    },
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/index.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            scriptLoading: 'defer'
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: 'src/404.html', to: '404.html' }
            ]
          }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test:  /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
  };