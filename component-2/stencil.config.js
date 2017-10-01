exports.config = {
  namespace: 'component2',
  generateDistribution: true,
  bundles: [
    { components: ['your-name'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
