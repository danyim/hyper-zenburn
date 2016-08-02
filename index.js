const backgroundColor = '#3d3d3d'
const foregroundColor = '#f8f5ed'
const borderColor = '#777'
const cursorColor = 'rgba(239,240,165,0.75)'

const colors = [
  '#505050', // Black
  '#d7a5a4', // Red
  '#91ad91', // Green
  '#e8d7b9', // Yellow
  '#c6eaff', // Blue
  '#ba90bd', // Magenta
  '#9ad6d9', // Cyan
  '#f3f1d9', // White
  '#7f7f7f', // Bright Black
  '#e4b3b2', // Bright Red
  '#d4e894', // Bright Green
  '#eff0a5', // Bright Yellow
  '#6996bf', // Bright Blue
  '#dcbecd', // Bright Magenta
  '#9ad6d9', // Bright Cyan
  '#f8f5ed'  // Bright White
]

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .tab_active:before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
