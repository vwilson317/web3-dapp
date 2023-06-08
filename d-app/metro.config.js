const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

/** @type {import('expo/metro-config').MetroConfig} */
const { resolver: { sourceExts } } = config;

config.isCssEnabled = true;
config.transformer.babelTransformerPath = require.resolve("./transformer.js");
config.resolver.sourceExts = [...sourceExts, "scss", "sass"];

module.exports = config;