class Index extends React.Component {

  rootNode = document.getElementsByClassName('page')[0];

  constructor(props) {
    super(props);
  }

  onClick$Relogio() {

    ReactDOM.render(<Relogio />, this.rootNode);
  }

  onClick$BemVindo() {

    const gustavo = {
      nome: 'Gustavo',
      sobrenome: 'Moraes'
    };

    ReactDOM.render(<BemVindo pessoa={gustavo} />, this.rootNode);
  }

  render() {

    return (
      <div className="container">
        <h1>SandboxReact</h1>
        <p>Escolha no menu a mini-aplicação que deseja abrir:</p>
        <div className="btn-group">
          <button className="btn btn-default" onClick={this.onClick$Relogio}>
            Relógio
          </button>
          <button className="btn btn-default" onClick={this.onClick$BemVindo}>
            Bem Vindo
          </button>
        </div>
      </div>
    );
  }
}

// Starta a aplicação
ReactDOM.render(<Index />, document.getElementsByClassName('page')[0]);