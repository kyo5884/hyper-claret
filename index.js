exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

exports.decorateConfig = (config) => {
  return Object.assign(config, {
    cursorColor: 'rgba(255, 255, 255, 0.5)',
    selectionColor: 'rgba(255, 128, 128, 0.4)',
    backgroundColor: 'transparent',
    borderColor: 'rgba(128, 128, 128, 0.4)',
    css: `
      ${config.css || ''}
      .hyper_main {
        border: none !important;
      }
      .term_active {
        padding: 12px !important;
      }
    `
  })
}