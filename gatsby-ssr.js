const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents },pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    const components = [
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/commercelayer@1.5.5/dist/commercelayer.min.js"></script>
    ]
    return setPostBodyComponents(components)
  }
}
