define ([
  "react",
  "jsx!model/relogio/RelogioModel",
  "jsx!view/relogio/HoraFormatadaView"
], (React, RelogioModel, HoraFormatadaView) => {

  class RelogioView extends React.Component {

    taxaDeAtualizacao = 1000; // 1 segundo

    constructor(props) {
      super(props); // Todo componente-classe deve chamar o super com props.
      this.state = {horarioAtual: new RelogioModel()};
    }

    /**
     * Seta um timer quando o RelogioView é renderizado para a DOM pela primeira vez.
     * Isto é chamado de "mounting" em React.
     *
     * @memberof RelogioView
     */
    componentDidMount() {
      setInterval(() => this.fazTiqueTaque(), this.taxaDeAtualizacao);
    }

    /**
     * Limpa aquele timer sempre que a DOM produzida pelo RelogioView é removida.
     * Isto é chamado de "unmounting" em React.
     *
     * @memberof RelogioView
     */
    componentWillUnmount() {
      clearInterval(this.taxaDeAtualizacao);
    }

    fazTiqueTaque() {
      this.setState({horarioAtual: new RelogioModel()});
    }

    render() {
      return (
        <div className="relogio">
          <h1>Olá mundo!</h1>
          <h2>Agora são <HoraFormatadaView horario={this.state.horarioAtual}/>.</h2>
        </div>
      );
    }
  }
});