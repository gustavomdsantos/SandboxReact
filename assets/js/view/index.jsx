var div_page = document.getElementsByClassName('page')[0];

function onClick$Relogio() {

  ReactDOM.render(<Relogio />, div_page);
}

function onClick$BemVindo() {

  const gustavo = {
    nome: 'Gustavo',
    sobrenome: 'Moraes'
  };

  ReactDOM.render(<BemVindo pessoa={gustavo} />, div_page);
}

function Index() {

  return (
    <div className="container">
      <h1>SandboxReact</h1>
      <p>Escolha no menu a mini-aplicação que deseja abrir:</p>
      <div className="btn-group">
        <button className="btn btn-default" onClick={onClick$Relogio}>Relogio</button>
        <button className="btn btn-default" onClick={onClick$BemVindo}>BemVindo</button>
      </div>
    </div>
  );
}

ReactDOM.render(<Index />, div_page);