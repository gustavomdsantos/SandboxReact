class Index extends React.Component {

  rootNode = document.getElementsByClassName('page')[0];

  constructor(props) {
    super(props);

    // Este binding é necessário para que o `this.` funcione no retorno de chamada
    this.onClick$Relogio = this.onClick$Relogio.bind(this);
    this.onClick$BemVindo = this.onClick$BemVindo.bind(this);
  }

  onClick$Relogio() {

    const relogioPage = (
      <div>
        <Relogio />
        <VoltarView />
      </div>
    );

    ReactDOM.render(relogioPage, this.rootNode);
  }

  onClick$BemVindo() {

    const gustavo = {
      nome: 'Gustavo',
      sobrenome: 'Moraes'
    };

    const bemVindoPage = (
      <div>
        <BemVindo pessoa={gustavo} />
        <VoltarView />
      </div>
    );

    ReactDOM.render(bemVindoPage, this.rootNode);
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