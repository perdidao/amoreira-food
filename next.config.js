module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./src'],
      prependData: `@import "~@styles/settings.scss";`,
    }
  }
  return defaultConfig
}
