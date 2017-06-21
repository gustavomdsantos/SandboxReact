class IndexView extends React.Component {

  render() {
    return (
      <div className="index">
        <h1>SandboxReact</h1>
        <p>Escolha no menu a mini-aplicação que deseja abrir:</p>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={this.onClick$Relogio}>
            Relógio
          </button>
          <button className="btn btn-primary" onClick={this.onClick$BemVindo}>
            Bem Vindo
          </button>
          <button className="btn btn-primary" onClick={this.onClick$Aviso}>
            Aviso
          </button>
        </div>
      </div>
    );
  }
}