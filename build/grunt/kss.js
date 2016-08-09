module.exports = {
  options: {
    verbose: true,
    //builder: '../scss/template_kss',
    css: '../../css/screen.css'
  },
  dist: {
    src: ['../scss/components'],
    dest: '../doc/style_guide'
  }
};
