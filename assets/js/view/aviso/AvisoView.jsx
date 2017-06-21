class AvisoView extends React.Component {

  style = { width: "140px" };

  constructor(props) {
    super(props);

    this.state = {ePraAvisar: false} // define estado inicial da tela
    this.onClick$trocaEstadoDeTela = this.onClick$trocaEstadoDeTela.bind(this);
  }

  onClick$trocaEstadoDeTela() {
    this.setState(stateAtual => ({
      ePraAvisar: !stateAtual.ePraAvisar // inverte variável booleana
    }));
  }

  render() {
    return (
      <div className="container-aviso">
        <h1>Você tem um novo aviso.</h1>
        <center>
          <button className="btn btn-warning" onClick={this.onClick$trocaEstadoDeTela} style={this.style}>
            {this.state.ePraAvisar ? 'Esconder' : 'Mostrar'} aviso
          </button>
          <TextoAvisoView avisa={this.state.ePraAvisar} />
        </center>
      </div>
    );
  }
}