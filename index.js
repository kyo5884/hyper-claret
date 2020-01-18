exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');

exports.decorateConfig = (config) => {
  return Object.assign(config, {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    css: `
      ${config.css || ''}
    `
  })
}