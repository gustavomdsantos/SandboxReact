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
  config: {
    jsx: {
      transformer: 'babel'
    },
    babel: {
      presets: ["react", "es2015"],
      sourceMaps: "inline", // see https://babeljs.io/docs/usage/api/#options
      fileExtension: ".jsx" // Can be set to anything, like .es6 or .js. Defaults to .jsx
    }
  },
  map: {
    '*': {
      'css': 'lib/require/css.min',
      'text': 'lib/require/text',
      'jsx': 'lib/require/jsx'
    }
  }
});

require(["jsx!view/relogio"]);