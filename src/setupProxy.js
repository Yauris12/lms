const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/user/login',
    createProxyMiddleware({
      target: 'http://riesgoscriticos.atwebpages.com/index.php',
      changeOrigin: true,
    })
  )
}

module.exports = (app) => {
  app.use(
    '/user/create',
    createProxyMiddleware({
      target: 'http://riesgoscriticos.atwebpages.com/index.php',
      changeOrigin: true,
    })
  )
}
module.exports = (app) => {
  app.use(
    '/curso/comprar',
    createProxyMiddleware({
      target: 'http://riesgoscriticos.atwebpages.com/index.php',
      changeOrigin: true,
    })
  )
}

module.exports = (app) => {
  app.use(
    '/curso/infoCurso',
    createProxyMiddleware({
      target: 'http://riesgoscriticos.atwebpages.com/index.php',
      changeOrigin: true,
    })
  )
}
