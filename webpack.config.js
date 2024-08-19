const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        // Main files.
        index: './src/index.js',

        // Console Application.
        // projectsBoard: './src/backend/projectsBoard.js',

        // Utility files.
        // utilityFunctions: './src/resources/utitilityFunctions.js',

        // Frontend files.
        // loadProjects: './src/frontend/loadProjects.js'

        // Decoupler (Link Btn console app and DOM).
        // decoupler: './src/front-back-link/decoupler.js',
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