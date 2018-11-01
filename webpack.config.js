var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

var CleanWebpackPlugin = require('clean-webpack-plugin')


var CopyWebpackPlugin = require('copy-webpack-plugin');

var environment = process.env.NODE_ENV || 'development';



let pathsToClean = [
  'public'
]

// the clean options to use
let cleanOptions = {
  verbose:  true,
  dry:      false
}


var extractPlugin = new ExtractTextPlugin({
   filename: 'app/assets/main.[hash].css'
});


var webpackPlugins = [
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
    extractPlugin,
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),

      new CopyWebpackPlugin([
            {from:'app/assets/img',to:'app/assets/img'  }
        ])
]



const routesData = {
  routes: [
    {url: '/', title: '0xBitcoin', template: 'app/index.html', filename: 'index.html'},
    {url: '/index-ru', title: '0xBitcoin', template: 'app/index-ru.html', filename: 'index-ru.html'},
    {url: '/index-cn', title: '0xBitcoin', template: 'app/index-cn.html', filename: 'index-cn.html'},
    {url: '/', title: '0xBitcoin', template: 'app/index.html', filename: 'index.html'},

    {url: '/wallet', title: 'Wallet', template: 'app/wallet.html', filename: 'wallet/index.html'},
  ]
}


routesData.routes.forEach(function(element){

  var htmlPlugin = new HtmlWebpackPlugin({
        title: element.title,
        filename: element.filename,
        template: element.template
  });

 webpackPlugins.push(htmlPlugin)

})



module.exports = {
    entry: ['./app/assets/javascripts/index', './app/assets/stylesheets/application.scss' ],
    output: {
        path: path.resolve(__dirname, 'public'),
      //  filename: 'bundle.js',
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2016']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]',
                     publicPath: '/',
                  }
                }
              ]
            },

            {
              test: /\.(eot|woff|woff2|ttf|svg)(\?[\s\S]+)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]',
                     publicPath: '/',
                  }
                }
              ]
            },
        ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
      }
    },
    plugins: webpackPlugins
};
