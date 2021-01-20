const path = require('path');
const webpack = require('webpack');
const settings = require(path.resolve(__dirname, '.config/settings'));
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const StyleLintPlugin = require('stylelint-webpack-plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const TypeScriptSettings = require(path.resolve(__dirname, '.config/webpack/typeScriptSettings'));
const cssSettings = require(path.resolve(__dirname, '.config/webpack/cssSettings'));
// const Pages = require(path.resolve(__dirname, '.config/webpack/pages.js'));


module.exports = () => {
  console.log(`CURRENT MODE -> ${process.env.NODE_ENV}`);

  const MODE = process.env.NODE_ENV;
  const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
  const IS_PRODUCTION = process.env.NODE_ENV === 'production';

  return {
    mode: MODE,
    entry: settings.webpack.entries,
    output: {
      filename: '[name].js',
      path: path.join(__dirname),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css'],
      alias: {
        'src': path.resolve('./src'),
      },
    },
    devtool: IS_DEVELOPMENT ? 'inline-source-map' : false,
    target: ['web', 'es5'],
    module: {
      rules: [...TypeScriptSettings, ...cssSettings],
    },
    plugins: [
      ...[
        new webpack.ProgressPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new FixStyleOnlyEntriesPlugin(),
        new StyleLintPlugin({
          configFile: path.resolve('.config/.stylelintrc.js'),
          fix: true,
        }),
        new ExtractCssChunks({
          filename: '[name].css',
          chunkFilename: '[id].css',
          orderWarning: true,
        }),
      ]
    ],
  }

}

