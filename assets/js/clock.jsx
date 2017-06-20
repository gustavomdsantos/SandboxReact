var div_page = document.getElementsByClassName('page')[0];

function tique() {
  const elemento = (
    <div className="container">
      <h1>Olá mundo!</h1>
      <h2>Agora são {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(elemento, div_page);
}

setInterval(tique, 1000);