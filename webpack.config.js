const path = require('path');
const webpack = require('webpack');
const settings = require(path.resolve(__dirname, '.config/settings'));
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const TypeScriptSettings = require(path.resolve(__dirname, '.config/webpack/typeScriptSettings'));
const cssSettings = require(path.resolve(__dirname, '.config/webpack/cssSettings'));
const Pages = require(path.resolve(__dirname, '.config/webpack/pages.js'));
