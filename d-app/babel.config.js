module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'nativewind/babel'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      'react-native-classname-to-style',
      // 'nativewind/babel',
      [
          "react-native-platform-specific-extensions",
          { extensions: ["scss", "sass", "css"] },
      ],
  ],
  };
};
