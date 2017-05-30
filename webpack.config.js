const autoprefixer = require('autoprefixer');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSCSS = new ExtractTextPlugin('../css/style.css')
const extractHTML = new ExtractTextPlugin('index.html')




const webpack = require('webpack')
const envFile = require('node-env-file')

const PORT = process.env.PORT || 3001;

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

module.exports = {
  context: path.join(__dirname, 'public'),
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    __dirname + '/app/app.jsx'
  ],
  devServer: {
    'content-base': __dirname + 'public',
    progress: true,
    inline: true,
    hot: true,
    port: PORT
  },
  output: {
    path: __dirname + "/public",
    filename: '../js/bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      "node_modules",
      './app/components',
      './app/api',
      './app/actions',
      './app/reducers',
      './app/store'
    ],
    modulesDirectories: [
      "node_modules",
      './app/components',
      './app/api',
      './app/actions',
      './app/reducers',
      './app/store'
    ],
    root: __dirname,
    alias: {
      app: 'app',
      configureStore: 'app/store/configureStore.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  devtool: process.env.NODE_ENV === "production" ? undefined : "source-map",
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.jsx?$/, loader: 'babel-loader', query: { presets: ['react', 'es2015', 'stage-2'] }, exclude: /(node_modules|bower_components)/ },
      { test: /\.scss$/i, loaders: ['style', extractSCSS.extract(['css!postcss!sass'])] },
      { test: __dirname + '/app/index.html', loader:  extractHTML.extract(["html?" + JSON.stringify({ attrs: [ "img:src"] })])  },
      // { test: /\.scss?$/, loaders: ['style', 'css?sourceMap', 'postcss?sourceMap', 'sass?sourceMap'] },
      { test: __dirname + '/assets/images' + (/\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/i), loaders: [ 'file?name=[name].[ext]' ] },
      // { test: /\.css$/, loaders: [ 'file', 'extract', 'css' ] },
      // { test: __dirname + '/app/index.html', loaders: [ "file?name=[name].[ext]", "extract", "html?" + JSON.stringify({ attrs: ["img:src", "link:href"] }) ] },
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/normalize-scss/sass'),
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: process.env.NODE_ENV === "development" ? [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    }),
    extractHTML,
    extractSCSS,
    new HtmlWebpackPlugin({
      title: 'React Redux ToDo App'
    }),
    new FaviconsWebpackPlugin(__dirname + '/app/assets/images/TheWolverineClaws.png'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:            JSON.stringify(process.env.NODE_ENV),
        API_KEY:             JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN:         JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL:        JSON.stringify(process.env.DATABASE_URL),
        PROJECT_ID:          JSON.stringify(process.env.PROJECT_ID),
        STORAGE_BUCKET:      JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
    })
  ] : [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    }),
    extractHTML,
    extractSCSS,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV:            JSON.stringify(process.env.NODE_ENV),
        API_KEY:             JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN:         JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL:        JSON.stringify(process.env.DATABASE_URL),
        PROJECT_ID:          JSON.stringify(process.env.PROJECT_ID),
        STORAGE_BUCKET:      JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
    })
  ],
  imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      speed: 2
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false }
      ]
    }
  }
}
