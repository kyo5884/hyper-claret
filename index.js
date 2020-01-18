exports.onWindow = browserWindow => browserWindow.setVibrancy('ultra-dark');

exports.decorateConfig = (config) => {
  return Object.assign(config, {
    colors: {
      red: '#FF3B30',
      green: '#4CD964',
      yellow: '#FFCC00',
      blue: '#0095FF',
      magenta: '#FF2D55',
      cyan: '#5AC8FA',
      white: '#FFFFF',
      lightBlack: "#686868",
      lightRed: '#FF3B30',
      lightGreen: '#4CD964',
      lightYellow: '#FFCC00',
      lightBlue: '#0095FF',
      lightMagenta: '#FF2D55',
      lightCyan: '#5AC8FA',
      lightWhite: '#FFF'
    },
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