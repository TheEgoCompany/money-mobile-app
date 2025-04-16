const {
	wrapWithReanimatedMetroConfig,
      } = require('react-native-reanimated/metro-config');

const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
    extraNodeModules: {
      stream: require.resolve('readable-stream'),
    },
  };

  return wrapWithReanimatedMetroConfig(config);
})();
