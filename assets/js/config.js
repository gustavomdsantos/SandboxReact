/*
 * config: Script de inicialização do projeto no RequireJS.
 * Responsável por configurar todos os caminhos de libs necessários.
 *
 * É o primeiro arquivo JS a ser carregado (depois do próprio RequireJS, no
 * `index.html`.
 *
 * @author gustavosotnas
 */
requirejs.config({
  baseUrl: "assets/js",
  paths: {
    react: ['https://unpkg.com/react@15.6.1/dist/react.min', 'lib/react.min'],
    reactDOM: ['https://unpkg.com/react-dom@15.6.1/dist/react-dom.min', 'lib/react-dom.min'],
    babel: ['https://unpkg.com/babel-standalone@6.25.0/babel.min', 'lib/babel.min']
  },
  shim: {
    react: {
      exports: "React"
    },
    reactDOM: {
      deps: ["react"],
      exports: "ReactDOM"
    }
  },
  map: {
    '*': {
      'css': 'lib/require/css.min',
      'text': 'lib/require/text'
    }
  }
});

require(["babel!text!view/relogio.jsx"]);