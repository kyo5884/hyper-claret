exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

exports.decorateConfig = (config) => {
  return Object.assign(config, {
    cursorColor: 'rgba(255, 255, 255, 0.5)',
    selectionColor: 'rgba(255, 128, 128, 0.4)',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(128, 128, 128, 0.4)',
    css: `
      ${config.css || ''}
      div.term_fit {
        padding: 5px !important;
      }
    `
  })
}