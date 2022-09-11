const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: 'bundle.js'
    },
    mode: 'development',
    serve: {
        content: path.resolve(__dirname, "dist")
      },
    module: {
      rules: [
          {
            test: /\.module\.s(a|c)ss$/,
            use: [
                  MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {
                      modules: true,
                  }
                }, 
                {
                    loader: 'sass-loader',
                }
            ]
          },
          {
            test: /\.s(a|c)ss$/,
            exclude: /\.module\.(s(a|c)ss)$/,
            use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader', 
                {
                    loader: 'sass-loader',
                }
            ]
          },
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: ['babel-loader']
          },
          {
              test: /\.(jpeg|jpg|png)$/,
              use: [
                {
                  loader: 'url-loader?name=app/images/[name].[ext]'
                }
              ]
            }
      ]
      
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css"
      })
    ]
}