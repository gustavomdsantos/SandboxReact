class Index extends React.Component {

  rootNode = document.getElementsByClassName('page')[0];

  constructor(props) {
    super(props);

    // Este binding é necessário para que o `this.` funcione no retorno de chamada
    this.onClick$Relogio = this.onClick$Relogio.bind(this);
    this.onClick$BemVindo = this.onClick$BemVindo.bind(this);
  }

  onClick$Relogio() {

    ReactDOM.render(<Relogio />, this.rootNode);
  }

  onClick$BemVindo() {

    ReactDOM.render(<BemVindo />, this.rootNode);
  }

  render() {

    return (
      <div className="container">
        <h1>SandboxReact</h1>
        <p>Escolha no menu a mini-aplicação que deseja abrir:</p>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={this.onClick$Relogio}>
            Relógio
          </button>
          <button className="btn btn-primary" onClick={this.onClick$BemVindo}>
            Bem Vindo
          </button>
        </div>
      </div>
    );
  }
}

// Starta a aplicação
ReactDOM.render(<Index />, document.getElementsByClassName('page')[0]);