const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {baseUrl: isPro ? 'http://yunfenghui.lolong.xyz/api/' : 'api/'}
