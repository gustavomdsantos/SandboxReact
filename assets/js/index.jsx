var div_container = document.getElementsByClassName('container')[0];

const pessoa = {
  nome: 'Gustavo',
  sobrenome: 'Moraes'
};

function exibeNomePessoa(pessoa) {
  return pessoa.nome + ' ' + pessoa.sobrenome;
}

const pessoaReactElement = (
  <h1>
    Olá, {exibeNomePessoa(pessoa)}!
  </h1>
);

ReactDOM.render(pessoaReactElement, div_container);