const isProduction = process.env.NODE_ENV === "production";

module.exports = {
   webpack: (config) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
         fs: 'empty'
      }
      return config
   },
   exportPathMap: function () { // /Next-React-Components
      return {
         "/": { page: "/" }
      }
   },
   assetPrefix: isProduction ? '/reCAPTCHA-nextjs' : ''
}
