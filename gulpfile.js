const settings = require('./.config/settings');
const clean = require('./.config/gulp/clean');
// const image = require('./.config/gulp/image');
const clone = require('./.config/gulp/clone');
const gulp = require('gulp');

exports.clean = clean;
// exports.image = image;
exports.clone = clone;

exports.watch = () => {
  settings.clones.forEach((item) => {
    gulp.watch(item.from, clone);
  });
};