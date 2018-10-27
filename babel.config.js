module.exports = api => {
  api.cache(false)
  const presets = [
    "module:metro-react-native-babel-preset",
  ];
  const plugins = [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ];

  return {
    presets,
    plugins
  };
}
