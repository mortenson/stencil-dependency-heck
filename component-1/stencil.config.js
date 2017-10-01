exports.config = {
  namespace: 'component1',
  generateDistribution: true,
  bundles: [
    { components: ['my-name'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
