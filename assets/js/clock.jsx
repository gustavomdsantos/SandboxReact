var div_page = document.getElementsByClassName('page')[0];

function Relogio(props) {
  return (
    <div className="container">
      <h1>Olá mundo!</h1>
      <h2>Agora são {props.horarioAtual.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tique() {
  ReactDOM.render(
    <Relogio horarioAtual={new Date()} />,
    div_page);
}

setInterval(tique, 1000);