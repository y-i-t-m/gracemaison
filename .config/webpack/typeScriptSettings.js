const TEST =  /\.(tsx?|jsx?)$/;

const TS_LOADER = {
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
    experimentalWatchApi: true,
  }
};

const typeScriptSettings = [
  {
    test: TEST,
    exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
    use: [
      TS_LOADER,
    ],
  }
];

module.exports = typeScriptSettings;
