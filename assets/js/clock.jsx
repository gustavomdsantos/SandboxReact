var div_page = document.getElementsByClassName('page')[0];

class Relogio extends React.Component {

  taxaDeAtualizacao = 1000; // 1 segundo

  constructor(props) {
    super(props); // Todo componente-classe deve chamar o super com props.
    this.state = {horarioAtual: new Date()};
  }

  /**
   * Seta um timer quando o Relogio é renderizado para a DOM pela primeira vez.
   * Isto é chamado de "mounting" em React.
   *
   * @memberof Relogio
   */
  componentDidMount() {
    setInterval(() => this.fazTiqueTaque(), this.taxaDeAtualizacao);
  }

  /**
   * Limpa aquele timer sempre que a DOM produzida pelo Relogio é removida.
   * Isto é chamado de "unmounting" em React.
   *
   * @memberof Relogio
   */
  componentWillUnmount() {
    clearInterval(this.taxaDeAtualizacao);
  }

  fazTiqueTaque() {
    this.setState({horarioAtual: new Date()});
  }

  render() {
    return (
      <div className="container">
        <h1>Olá mundo!</h1>
        <h2>Agora são {this.state.horarioAtual.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Relogio />, div_page);