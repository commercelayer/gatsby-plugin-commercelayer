'use strict'

var React = require('react')

exports.onRenderBody = function(_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents

  if (process.env.NODE_ENV === 'production') {
    var components = [
      React.createElement('script', {
        type: 'text/javascript',
        src:
          'https://cdn.jsdelivr.net/npm/commercelayer@1.9.14/dist/commercelayer.min.js'
      })
    ]
    return setPostBodyComponents(components)
  }
}
