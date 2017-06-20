var div_page = document.getElementsByClassName('page')[0];

class Relogio extends React.Component {

  constructor(props) {
    super(props); // Todo componente-classe deve chamar o super com props.
    this.state = {horarioAtual: new Date()};
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

function tique() {
  ReactDOM.render(
    <Relogio />,
    div_page);
}

setInterval(tique, 1000);