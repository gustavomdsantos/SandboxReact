var div_page = document.getElementsByClassName('page')[0];

const gustavo = {
  nome: 'Gustavo',
  sobrenome: 'Moraes'
};

function exibeNomePessoa(pessoa) {
  return pessoa.nome + ' ' + pessoa.sobrenome;
}

/**
 * Componente *funcional* React.
 * Renderiza uma mensagem de boas vindas para o nome passado como parâmetro.
 */
class BemVindo extends React.Component {

  render() {
    if (this.props.pessoa) {
      return (
        <div className="container">
          <h1>Olá, {exibeNomePessoa(this.props.pessoa)}!</h1>
        </div>
      );
    }
    return (
      <div className="container">
        <h1>Olá, estranho.</h1>
      </div>
    );
  }
}

const elemento = <BemVindo pessoa={gustavo} />;

ReactDOM.render(elemento, div_page);