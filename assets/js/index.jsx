var div_container = document.getElementsByClassName('container')[0];

const gustavo = {
  nome: 'Gustavo',
  sobrenome: 'Moraes'
};

function exibeNomePessoa(pessoa) {
  return pessoa.nome + ' ' + pessoa.sobrenome;
}

function cumprimentar(pessoa) {
	if (pessoa) {
		return <h1>Olá, {exibeNomePessoa(pessoa)}!</h1>;
	}
	return <h1>Olá, estranho.</h1>;
}

ReactDOM.render(cumprimentar(gustavo), div_container);