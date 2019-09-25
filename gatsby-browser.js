const scriptSource =
  'https://cdn.jsdelivr.net/npm/commercelayer@1.9.14/dist/commercelayer.min.js'

const injectCommerceLayerScript = () => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = scriptSource
  document.body.appendChild(script)
}

const checkCommerceLayerTag = () => {
  let scripts = document.getElementsByTagName('script')
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src === scriptSource) return true
  }
  return false
}

const initOrInjectCommerceLayer = () => {
  if (window.commercelayer && typeof window.commercelayer.init === `function`) {
    window.commercelayer.init()
  } else if (!checkCommerceLayerTag()) {
    injectCommerceLayerScript()
  }
}

exports.onInitialClientRender = () => {
  initOrInjectCommerceLayer()
}

exports.onRouteUpdate = () => {
  initOrInjectCommerceLayer()
}
