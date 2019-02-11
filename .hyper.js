// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    updateChannel: 'canary',
    fontSize: 17,
    fontFamily: '"Operator Mono", "Inconsolata for Powerline", monospace',
    cursorShape: 'BLOCK',
    wickedBorder: false,
    padding: '10px',
    shell: '/bin/zsh',
  },

  plugins: ['hyper-material-theme'],
};
